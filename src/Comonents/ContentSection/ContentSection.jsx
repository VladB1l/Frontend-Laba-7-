import { useState } from "react";
import styles from "./ContentSection.module.css";

function ContentSection() {
  const [color, setColor] = useState([false, false]);

  function HandleColor(id) {
    if (id === 0) {
      setColor([!color[0], color[1]]);
    }
    if (id === 1) {
      setColor([color[0], !color[1]]);
    }
  }

  return (
    <div className={styles.content}>
      <h2>Білоконь Владислав Віталійович </h2>
      <p>Народився 7 травня 2004 року у місті Київ</p>
      <p>
        Отримав повну загальну середню освіту, закінчивши ліцей інформаційних
        технологій №79 у Києві
      </p>
      <h4>Хоббі:</h4>
      <ul>
        <li>Шахи;</li>
        <li>Комп'ютерні ігри;</li>
        <li>Катання на велосипеді;</li>
      </ul>
      <h4
        onClick={() => HandleColor(0)}
        className={color[0] ? styles.blue : styles.pointer}
      >
        Улюблені фільми:
      </h4>
      <ol>
        <li
        onClick={() => HandleColor(1)}
          className={color[1] ? styles.green : styles.pointer}
        >
          Інтерстеллар;
        </li>
        <li>Реальна сталь;</li>
        <li>Темний лицар: повернення легенди;</li>
      </ol>

      <div>
        <p>
          Відень - федеральна столиця Австрії. Є одночасно однією з 9 земель
          Австрії, зусібіч оточеною територією іншої землі — Нижньої Австрії. На
          2020 рік населення становить 1 911 191 мешканця; разом із передмістями
          — близько 2,6 млн (понад 25 % відсотків жителів Австрії); таким чином,
          Відень є найнаселенішим містом в Австрії, посідає одинадцяте місце
          серед найбільших міст Європейського Союзу за чисельністю населення і
          друге місце серед німецькомовних міст за тим же показником,
          поступаючись Берліну. Культурний, економічний і політичний центр
          Австрії.
        </p>
      </div>
    </div>
  );
}

export default ContentSection;
