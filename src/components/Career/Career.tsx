// CSS
import "./Career.css";

// Hooks
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { t } = useTranslation();

  return (
    <section className="design-section">
      <div className="timeline">
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="timeline-component timeline-content"
        >
          <h3>2018 ({ t("13y") })</h3>
          <p>{ t("Started learning code") }</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="timeline-component timeline-content"
        >
          <h3>2020 ({ t("15y") })</h3>
          <p>{ t("Started technical course in Computer Science") }</p>
        </motion.div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="timeline-component timeline-content"
        >
          <h3>2022 ({ t("17y") })</h3>
          <p>{ t("Completed technical course in Computer Science") }</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="timeline-component timeline-content"
        >
          <h3>2023 ({ t("18y") })</h3>
          <p>{ t("First job as dev") }</p>
        </motion.div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="timeline-component timeline-content"
        >
          <h3>2023 ({ t("18y") })</h3>
          <p>{ t("Started bachelor's in Information Systems") }</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="timeline-component timeline-content"
        >
          <h3>2024 ({ t("19y") })</h3>
          <p>{ t("First remote job") }</p>
        </motion.div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-empty"></div>
      </div>
    </section>
  );
};

export default Career;
