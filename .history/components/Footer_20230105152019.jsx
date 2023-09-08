'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';

import styles from '../styles';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text">

        </h4>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
