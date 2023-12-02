import styles from "./Steam.module.css";

function Steam(props) {
  return (
    <div className={styles.steam}>
      {props.products.map((item, index) => (
        <div style={{ backgroundImage: `url(${item.img})` }} key={index}>
          <div className={styles.price}>
            <div className={styles.discount}>{item.discount}</div>{" "}
            <div>
              <span>{item.oldprice}</span> {item.newprice}
            </div>
          </div>
          <div className={styles.title}>
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steam;
