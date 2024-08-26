import { ItemType } from "./Chapter3";
import Item from "./Item";

type ListProps = {
  list: ItemType[];
};

const List = ({ list }: ListProps) => {
  console.log("list", list);
  return (
    <ul id="list">
      {list.map((item, i) => (
        <Item {...item} key={`item_${i}`} />
      ))}
    </ul>
  );
};

export default List;
