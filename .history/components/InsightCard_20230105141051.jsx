'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', ;)}
  >
    Insight Card
  </motion.div>
);

export default InsightCard;
