import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * CountUp - animates a number from 0 to `to` when the element enters the viewport.
 *
 * Props:
 *  - to: numeric end value
 *  - prefix: optional prefix (e.g. "+")
 *  - suffix: optional suffix
 *  - duration: animation duration in seconds (default 2)
 */
const CountUp = ({ to, prefix = '', suffix = '', duration = 2, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (n) => setVal(Math.round(n)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
};

export default CountUp;
