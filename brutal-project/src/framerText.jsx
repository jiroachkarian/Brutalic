import { motion } from "framer-motion";
import React from "react";
import "./framertext.css";
import "./customprop.scss";

function CreditScene({ BrUtal }) {
  const repeatCount = Math.ceil((window.outerWidth / 2) * 100);

  const repeatedText = BrUtal.repeat(repeatCount);

  return (
    <div className="credit">
      {" "}
      <motion.div
        className="bg-motion"
        initial={{ y: 80, opacity: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        animate={{
          y: 0,
          opacity: 1,
        }}>
        <motion.p
          className="fs-md-2 t-motion t-outline"
          initial={{ x: -25 }}
          animate={{ x: 0 }}
          transition={{
            duration: 5,
            delay: 1,
            repeatType: "mirror",
            repeatDelay: 0.5,
            repeat: Infinity,
          }}
          style={{ width: "100%" }}>
          {repeatedText}
        </motion.p>
      </motion.div>
    </div>
  );
}
export default CreditScene;
