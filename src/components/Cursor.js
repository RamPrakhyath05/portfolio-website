"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(true);
  const [clicks, setClicks] = useState([]);
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };
    const mouseClick = (e) => {
      const id = Date.now();
      setClicks((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY },
      ]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 400);
    };
    const mouseLeave = () => setIsActive(false);
    const mouseEnter = () => setIsActive(true);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);
    window.addEventListener("mouseenter", mouseEnter);
    window.addEventListener("click", mouseClick);

    return () =>{
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mouseenter", mouseEnter);
      window.removeEventListener("click", mouseClick);
    }
  }, []);

  return (
  <>
    <motion.div
      className="cursor"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        x: { type: "spring", stiffness: 500, damping: 28 },
        y: { type: "spring", stiffness: 500, damping: 28 },
        opacity: { duration: 0.2 },
      }}
    />

    <AnimatePresence>
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          className="cursor-tap"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "fixed",
            left: click.x,
            top: click.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
      ))}
    </AnimatePresence>
  </>
  );
}
