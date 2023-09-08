'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, zoomIn, fadeIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedblack-gradient">
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Samanta
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[1]">
              Founded | Metaversus
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
