import React from "react";
import { motion } from "framer-motion";
import css from "./Gallery.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import useScrollToTop from "../../hooks/useScrollToTop";
import { works } from "../../utils/data.js";

const Gallery = () => {
  useScrollToTop();
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={` innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Works Galery</span>
            <p style={{ marginTop: "10px" }}>
              All rights reserved, please contact me before use
            </p>
          </div>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          {works.map((work, i) => {
            const fadeInAnimation = fadeIn("up", "tween", i * 0.2, 0.6);
            return (
              <motion.div key={work.id} variants={fadeInAnimation}>
                <a href={work.htmlURL} target="_blank">
                  <img src={work.pictureURL} alt="project" />
                  <p className={`secondaryText flexCenter`}>{work.workTitle}</p>
                </a>
              </motion.div>
            );
          })}

        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
