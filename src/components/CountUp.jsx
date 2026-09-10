import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function CountUp({ value, suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(
    () =>
      spring.on('change', (v) => {
        if (ref.current) {
          ref.current.textContent = `${v.toFixed(decimals)}${suffix}`
        }
      }),
    [spring, decimals, suffix],
  )

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  )
}
