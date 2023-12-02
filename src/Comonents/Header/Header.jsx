
import styles from "./Header.module.css";

function Header(props) {
  function HandleClick(id) {
    id === 1 ? props.setHeader(true) : props.setHeader(false);
  }

  const color = {
    color: props.headerToggle ? "black" : "white",
  };

  return (
    <div style={color}>
      <ul className={styles.header}>
        <li
          onClick={() => HandleClick(1)}
          className={props.headerToggle ? styles.current : null}
        >
          City
        </li>
        <li
          onClick={() => HandleClick(2)}
          className={!props.headerToggle ? styles.current : null}
        >
          Steam
        </li>
      </ul>
    </div>
  );
}

export default Header;
