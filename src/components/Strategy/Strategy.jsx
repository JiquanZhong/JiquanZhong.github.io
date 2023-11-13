import React from "react";
import { sliderSettings, strategies } from "../../utils/data";
import css from "./Strategy.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Strategy = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="testimonials"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">CRM Strategies</span>
          <p style={{ marginTop: "2rem" }}>Explore innovative CRM methods for enhanced engagement.</p>
          <p>Learn from practical examples to boost customer loyalty.</p>
        </div>

        <div className={` ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {
              strategies.map((trategy) => {
                return (
                  <div className={`flexCenter ${css.comment}`} key={trategy.id}>
                  {/* <img src={comment.img} alt="" /> */}
                  <p>{trategy.content}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{trategy.title}</span>
                    {/* <span>{comment.post}</span> */}
                  </div>
                </div>
                );
              })
            }
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Strategy;
