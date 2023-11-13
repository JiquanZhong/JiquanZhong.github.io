import React from "react";
import css from "./Profile.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Profile = () => {
  return (
    <section className={`${css.wrapper} paddings`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.middleElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Bonjour,
            <br />
            it’s Yuan TANG
          </motion.span>

          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            An enthusiastic CRM specialist from
            <br />
            Panda's hometown Chengdu, China. 🐼
          </motion.span>
        </div>

        <motion.div
          className={css.person}
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Profile;
