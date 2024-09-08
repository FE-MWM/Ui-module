import { ItemType } from "./Chapter3";
import Item from "./Item";
import styles from "./List.module.scss";

type ListProps = {
  list: ItemType[];
};

const List = ({ list }: ListProps) => {
  return (
    <ul className={styles.list}>
      {list.map((item, i) => (
        <Item {...item} key={`item_${i}`} />
      ))}
    </ul>
  );
};

export default List;
