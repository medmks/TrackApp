import { useEffect } from "react";
import { useState } from "react";
const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems);
    console.log("updates");
  }, [getItems]);
  return items.map((e, i) => <div key={i}>{e}</div>);
};
export default List;
