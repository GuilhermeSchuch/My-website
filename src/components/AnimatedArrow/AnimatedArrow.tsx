import { motion } from "framer-motion";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

export default function AnimatedArrow() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="451" height="100%">
        <motion.path
            d="M 10 100 C 300 300, 400 100, 300 100, C 200 100 200 300 300 500"
            fill="transparent"
            strokeWidth="12"
            stroke="#D9D9D9"
            strokeLinecap="round"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={transition}
        />
      </svg>

      <motion.div
        style={triangle}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={transition}
      />
    </div>
  );
}

const triangle: React.CSSProperties = {
  width: 0,
  height: 0,
  rotate: "90deg",
  borderLeft: "25px solid transparent",
  borderRight: "25px solid transparent",
  borderBottom: "50px solid #D9D9D9",
  position: "absolute",
  top: 0,
  left: 0,
  offsetPath: `path("M 10 100 C 300 300, 400 100, 300 100, C 200 100 200 300 300 500")`,
};
