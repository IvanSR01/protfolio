import { FC, useState } from "react";
import styles from "./Portfolio.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import icon from "../../../public/Снимок экрана 2024-02-18 105237.png";
import Image from "next/image";
import Sorted from "./sorted/Sorted";
import SectionHeader from "../sectionHeader/SectionHeader";
import { useFilter } from "./useFilter";
import { portfolioData } from "./portfolio.data";
const Portfolio: FC = () => {
  const motions = {
    initial: { x: "-10vw", opacity: 0 },
    animate: { x: "0vw", opacity: 1 },
  };
  const motionsItem = {
    initial: { y: "10vh", opacity: 0 },
    animate: { y: "0vh", opacity: 1 },
    exit: {
      y: "10vh",
      opacity: 0,
    },
  };
  const [filter, setFilter] = useState("all");
  const newArray = useFilter(portfolioData, filter);
  return (
    <section className={styles.section} id="port">
      <SectionHeader>Portfolio</SectionHeader>
      <main>
        <motion.div
          variants={motions}
          initial={"initial"}
          whileInView={"animate"}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <h3>Galeria</h3>
          <Sorted setFilter={setFilter} />
        </motion.div>
        <div className={styles.items}>
          <AnimatePresence>
            {newArray.map((item, i) => (
              <motion.div
                variants={motionsItem}
                initial={"initial"}
                whileInView={"animate"}
                exit={"exit"}
                transition={{
                  duration: 0.6 * (i || 1),
                }}
                viewport={{ once: true }}
                key={i}
              >
                <a href={item.link}>
                  <img src={item.icon} alt="" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </section>
  );
};

export default Portfolio;
