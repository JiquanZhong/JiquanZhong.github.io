import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={` innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              My e-mail templates for CRM solution
            </p>
          </div>
          <Link to="/gallery">
            <span className="secondaryText">Explore More Works</span>
          </Link>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <Link to="/gallery">
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./works/picture/showCase1.png"
              alt="project"
            />
          </Link>

          <Link to="/gallery">
            <motion.img
              variants={fadeIn("up", "tween", 0.7, 0.6)}
              src="./works/picture/showCase2.png"
              alt="project"
            />
          </Link>

          <Link to="/gallery">
            <motion.img
              variants={fadeIn("up", "tween", 0.9, 0.6)}
              src="./works/picture/showCase3.png"
              alt="project"
            />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
