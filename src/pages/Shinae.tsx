import { Link } from "react-router-dom";

const Shinae = () => {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" }
  ];
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-blue-200">
      <h1 className="w-full h-[60px] flex justify-center items-center bg-blue-100">
        SHINAE
      </h1>
      <ul className="">
        {items.map((item) => (
          <li
            key={item.id}
            className="w-full h-[40px] flex justify-center items-center border-b-2 border-black"
          >
            <Link to={`detail/${item.id}`} className="hover:text-blue-500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shinae;
