import { Link } from "react-router-dom";

const Shinae = () => {
  const items = [
    { name: "Challenge1", route: "/wsa/challenge1" },
    { name: "Challenge2", route: "/wsa/challenge2" },
    { name: "Challenge2_Origin", route: "/wsa/challenge2_origin" },
    { name: "Challenge3", route: "/wsa/challenge3" }
  ];
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-blue-200">
      <h1 className="w-full h-[60px] flex justify-center items-center bg-blue-100">
        SHINAE
      </h1>
      <ul className="">
        {items.map((item) => (
          <li
            key={item.name}
            className="w-full h-[40px] flex justify-center items-center border-b-2 border-black"
          >
            <Link to={`${item.route}`} className="hover:text-blue-500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shinae;
