import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    // <motion.div
    //   initial={{ y: -20, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   className="flex justify-between items-center p-4"
    // >
    <>
      <h2 className="text-xl font-bold">About</h2>
      <div className="flex gap-6">
        <Link href="/resume" className="hover:text-primary transition-colors">
          Resume
        </Link>
        <Link href="/projects" className="hover:text-primary transition-colors">
          Projects
        </Link>
      </div>
      </>
    // </motion.div>
  );
} 