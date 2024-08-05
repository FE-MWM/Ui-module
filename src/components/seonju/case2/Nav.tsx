import styles from "./Nav.module.scss";

type NavProps = {
  pages: number[];
  viewIndex: number;
  moveToPage: (index: number) => () => void;
};

const Nav = ({ pages, viewIndex, moveToPage }: NavProps) => (
  <ul className={styles.nav}>
    {pages.map((p, i) => (
      <li key={p} className={viewIndex === i ? styles.on : ""}>
        <button onClick={moveToPage(i)}>{p}</button>
      </li>
    ))}
  </ul>
);

export default Nav;
