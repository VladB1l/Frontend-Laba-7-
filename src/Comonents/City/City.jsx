import styles from "./City.module.css";
import Content from "../ContentSection/ContentSection";
import Image from "../ImageSection/ImageSection";

function City() {
  return (
    <div className={styles.city}>
      <Content />
      <Image />
    </div>
  );
}

export default City;
