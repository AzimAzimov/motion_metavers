'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, zoomIn, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-ro`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
    </motion.div>
  </section>
);

export default Feedback;
