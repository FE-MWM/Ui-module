import styles from "./Item.module.scss";
import { ItemType } from "./Chapter3";

const Item = ({ id, no, text }: ItemType) => (
  <li className={styles.list}>
    <div className={styles.no}>{no}</div>
    <div className={styles.content}>
      <div className={styles.id}>{id}</div>
      <div className={styles.text}>{text}</div>
    </div>
  </li>
);

export default Item;
