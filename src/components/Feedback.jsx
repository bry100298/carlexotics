import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/constants/motion";
import styles from "@/constants/styles";

const Feedback = () => {
  return (
    <section className="xs:p-8 my-6 sm:my-2 px-[10%]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-6`}
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-5xl text-[26px] border-5 border-l-third-color mb-3">
              Where Luxury Drives Excellence
            </h4>
            <p className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
            CarLEXotics provides luxury car rentals with unparalleled service and an exclusive fleet, elevating your travel experience.
            </p>
          </div>
          <p className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
            “As a leading car rental provider, we are dedicated to delivering tailored solutions that cater to the unique needs of travelers globally. Our commitment to customer satisfaction drives us to offer high-quality vehicles, seamless booking processes, and personalized service. Backed by a team of passionate professionals, we ensure every aspect of your rental journey is smooth, reliable, and enjoyable. Whether it's a short-term rental or a long-term lease, we're here to make your travel experience hassle-free and memorable.”
          </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <img
            src="/about/aboutus.png"
            className="px-0 lg:px-4 xl:px-14 w-full h-auto object-cover rounded-3xl"
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;