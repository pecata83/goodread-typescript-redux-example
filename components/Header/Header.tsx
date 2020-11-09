import Link from "next/Link";
import Search from "@components/Search";
import styles from "./Header.module.css";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => (
  <header className={styles.header}>
    <h1 className={styles.logo}>
      <Link href="/">
        <a>{title}</a>
      </Link>
    </h1>
    <Search></Search>
  </header>
);

export default Header;
