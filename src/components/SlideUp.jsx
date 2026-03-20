import React from 'react';
import { motion } from 'framer-motion';

const SlideUp = ({ children, delay = 0, duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
