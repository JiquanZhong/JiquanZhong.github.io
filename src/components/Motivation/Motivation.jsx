import React from "react";
import css from "./Motivation.module.scss";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";

const Motivation = () => {
  return (
    <section className={css.wrapper}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className={`yPaddings flexCenter innerWidth paddings paddings ${css.container}`}
      >
        <a id="service" className="anchor"></a>
        {/* <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div className="flexCenter" style={{ background: exp.bg }}>
                  <exp.icon size={25} color="while" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects}</span>
                </div>
              </motion.div>
            );
          })}
        </div> */}

        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">Why did I create this site ?</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <motion.span
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className="secondaryText"
                key={i}
              >
                {paragraph}
              </motion.span>
            );
          })}

          <div className={` flexCenter ${css.stats}`}>
            <div className={` flexCenter ${css.stat}`}>
              <span className="primaryText">1000+</span>
              <span className="secondaryText">Templates Completed</span>
            </div>

            <div className={` flexCenter ${css.stat}`}>
              <span className="primaryText">40+</span>
              <span className="secondaryText">Automated Workflows</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Motivation;
