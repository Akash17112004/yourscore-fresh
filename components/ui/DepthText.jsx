'use client';

import { useEffect, useMemo, useRef } from 'react';
import styles from './DepthText.module.css';

const MAX_LAYERS = 24;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getLayerColor = (faceColor, depthColor, index, total) => {
  const progress = total <= 1 ? 1 : index / total;
  // Keep the face dominant, with just enough of the depth colour showing at the edge.
  const faceMix = Math.round(90 - progress * 34);
  return `color-mix(in srgb, ${faceColor} ${faceMix}%, ${depthColor})`;
};

const getTransform = (rotateX, rotateY) => `rotateX(${rotateX.toFixed(3)}deg) rotateY(${rotateY.toFixed(3)}deg)`;

const DepthText = ({
  text = 'Elevate',
  layers = 6,
  depth = 0.48,
  faceColor = '#f8fafc',
  depthColor = '#7c3aed',
  tilt = 5,
  pointerTracking = true,
  smoothing = 0.14,
  perspective = 900,
  autoOrbit = false,
  orbitSpeed = 0,
  fontSize = 'clamp(3rem, 12vw, 7rem)',
  fontWeight = 900,
  lineHeight = 0.86,
  letterSpacing = '-0.065em',
  shadow = true,
  className = '',
  style = {}
}) => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  const safeLayers = clamp(Math.round(Number(layers) || 1), 2, MAX_LAYERS);
  const safeDepth = clamp(Number(depth) || 0, 0, 12);
  const safeTilt = clamp(Number(tilt) || 0, 0, 12);
  const safeSmoothing = clamp(Number(smoothing) || 0.14, 0.02, 0.35);
  const safePerspective = clamp(Number(perspective) || 900, 300, 2000);
  const safeOrbitSpeed = clamp(Number(orbitSpeed) || 0, 0, 2);

  const baseRotation = useMemo(() => ({ x: -safeTilt * 0.32, y: safeTilt * 0.42 }), [safeTilt]);

  const depthLayers = useMemo(
    () => Array.from({ length: safeLayers }, (_, layerIndex) => {
      const index = safeLayers - layerIndex;
      return {
        index,
        color: getLayerColor(faceColor, depthColor, index, safeLayers),
        // A very small offset makes the extrusion readable without turning the
        // heading into a heavy 3D treatment.
        transform: `translate3d(${(index * safeDepth * 0.38).toFixed(3)}px, ${(index * safeDepth * 0.54).toFixed(3)}px, ${(-index * safeDepth).toFixed(3)}px)`
      };
    }),
    [safeLayers, safeDepth, faceColor, depthColor]
  );

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage || typeof window === 'undefined') return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const canTrackPointer = pointerTracking && finePointer && !reducedMotion;
    let frameId = 0;
    let activePointer = false;
    const startTime = performance.now();
    const current = { ...baseRotation };
    const target = { ...baseRotation };

    const applyTransform = () => {
      stage.style.transform = getTransform(current.x, current.y);
    };

    if (reducedMotion) {
      applyTransform();
      return undefined;
    }

    // Touch devices cannot use cursor tracking. Do not keep a render loop alive
    // when there is no pointer interaction or orbit to animate.
    if (!canTrackPointer && !autoOrbit) {
      applyTransform();
      return undefined;
    }

    const handlePointerMove = (event) => {
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      activePointer = true;
      const x = clamp((event.clientX - (rect.left + rect.width / 2)) / (rect.width * 0.8), -1, 1);
      const y = clamp((event.clientY - (rect.top + rect.height / 2)) / (rect.height * 0.8), -1, 1);
      target.x = baseRotation.x - y * safeTilt;
      target.y = baseRotation.y + x * safeTilt;
    };

    const handlePointerLeave = () => {
      activePointer = false;
      target.x = baseRotation.x;
      target.y = baseRotation.y;
    };

    if (canTrackPointer) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerleave', handlePointerLeave);
      window.addEventListener('blur', handlePointerLeave);
    }

    const tick = (now) => {
      if ((!canTrackPointer || !activePointer) && autoOrbit) {
        const orbit = ((now - startTime) / 1000) * safeOrbitSpeed * Math.PI * 2;
        const fallbackAmount = canTrackPointer ? 0.18 : 0.55;
        target.x = baseRotation.x + Math.sin(orbit) * safeTilt * fallbackAmount;
        target.y = baseRotation.y + Math.cos(orbit * 0.85) * safeTilt * fallbackAmount;
      }

      current.x += (target.x - current.x) * safeSmoothing;
      current.y += (target.y - current.y) * safeSmoothing;
      applyTransform();
      frameId = requestAnimationFrame(tick);
    };

    applyTransform();
    frameId = requestAnimationFrame(tick);

    return () => {
      if (canTrackPointer) {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerleave', handlePointerLeave);
        window.removeEventListener('blur', handlePointerLeave);
      }
      cancelAnimationFrame(frameId);
    };
  }, [autoOrbit, baseRotation, pointerTracking, safeOrbitSpeed, safeSmoothing, safeTilt]);

  const rootStyle = {
    ...style,
    '--depth-text-perspective': `${safePerspective}px`,
    '--depth-text-font-size': fontSize,
    '--depth-text-font-weight': fontWeight,
    '--depth-text-line-height': lineHeight,
    '--depth-text-letter-spacing': letterSpacing,
    '--depth-text-face-color': faceColor,
    '--depth-text-depth-color': depthColor,
    '--depth-text-shadow': shadow
      ? `1px 1px 0 color-mix(in srgb, ${depthColor} 76%, #000 24%), 2px 2px 0 color-mix(in srgb, ${depthColor} 56%, #000 44%), 0 5px 12px color-mix(in srgb, ${depthColor} 12%, transparent)`
      : 'none'
  };

  return (
    <span ref={rootRef} className={`${styles.depthText} ${className}`.trim()} style={rootStyle}>
      <span ref={stageRef} className={styles.stage}>
        {depthLayers.map((layer) => (
          <span
            aria-hidden="true"
            className={styles.layer}
            key={layer.index}
            style={{
              color: layer.color,
              opacity: 0.36 + (layer.index / safeLayers) * 0.34,
              transform: layer.transform,
            }}
          >
            {text}
          </span>
        ))}
        <span className={styles.face}>{text}</span>
      </span>
    </span>
  );
};

export default DepthText;
