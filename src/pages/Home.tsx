import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

type Profile = {
  name: string;
  image: string;
};

const Home = () => {
  const profile: Profile[] = [
    { name: "문선주", image: "/seonju.png" },
    { name: "문수정", image: "/msj.png" },
    { name: "우신애", image: "/wsa.png" }
  ];

  return (
    <div className={styles.home}>
      <h1>UI STUDY</h1>
      <div className={styles.list}>
        {profile.map((item, index) => (
          <Link to={"/Seonju"} key={index}>
            <div className={styles.profile}>
              <img className={styles.image} src={item.image} alt="profile" />
              <span className={styles.name}>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
