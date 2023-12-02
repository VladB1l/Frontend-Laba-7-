import { useState } from "react";
import styles from "./ImageSection.module.css";
import React from "react";

function ImageSection() {
  const buttons = ["Додати", "Збільшити", "Зменшити", "Видалити"];
  const [images, setImages] = useState([100]);

  function HandleClick(index) {
    if (index === 0) {
      let new_Imgages = [...images];
      new_Imgages.push(100);
      setImages(new_Imgages);
    }
    if (index === 1) {
      let new_Imgages = [...images];
      new_Imgages[new_Imgages.length - 1] += 10;
      setImages(new_Imgages);
    }
    if (index === 2) {
      let new_Imgages = [...images];
      new_Imgages[new_Imgages.length - 1] -= 10;
      setImages(new_Imgages);
    }
    if (index === 3) {
      let new_Imgages = [...images];
      new_Imgages.splice(new_Imgages.length - 1, 1);
      setImages(new_Imgages);
    }
  }

  return (
    <div className={styles.image}>
      {images.map((item, index) => (
        <div key={index}>
          <a
            href="https://www.vienna.at/"
            target="blank"
            style={{
              backgroundSize: `${item}%`,
              backgroundImage: `url(img/vienna.jpg)`,
            }}
          ></a>
        </div>
      ))}
      <div className={styles.buttons}>
        {buttons.map((buttonText, index) => (
          <button onClick={() => HandleClick(index)} key={index}>
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSection;
