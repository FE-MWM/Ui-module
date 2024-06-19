import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

type Profile = {
  name: string;
  image: string;
  address: string;
};

const Home = () => {
  const profile: Profile[] = [
    { name: "문선주", image: "/seonju.png", address: "/seonju" },
    { name: "문수정", image: "/msj.png", address: "/msj" },
    { name: "우신애", image: "/wsa.png", address: "/wsa" }
  ];

  return (
    <div className={styles.home}>
      <h1>UI STUDY</h1>
      <div className={styles.list}>
        {profile.map((item, index) => (
          <Link to={item.address} key={index}>
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
