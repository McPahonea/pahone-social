import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center text-white mt-40">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold"
      >
        Alexandru Pahone
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl text-gray-300 mt-4 max-w-2xl"
      >
        Developer • Trader • 3D Designer • Tech Explorer
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex gap-4 mt-10"
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition"
        >
          Projects
        </a>
        <a
          href="/about"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition"
        >
          About Me
        </a>
      </motion.div>
    </div>
  )
}
