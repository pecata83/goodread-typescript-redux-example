import { useState } from "react";
import styles from "./Search.module.css";
import { searchInit } from "@store/search/actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

type Props = {
  searchText?: string;
};

const IndexPage: React.FC<Props> = ({ searchText = "" }) => {
  const [formData, setFormData] = useState({ searchText });
  const dispatch = useDispatch();
  const router = useRouter();
  const { route } = router;

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const searchText = formData.searchText;
    dispatch(searchInit({ searchText }));
    console.log(route);
    if (route != "/") router.push("/");
  }

  return (
    <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search Books by name"
        name="searchText"
        id="searchText"
        value={formData.searchText}
        onChange={(e) => handleChange(e)}
      />
      <button
        id="searchBtn"
        name="Search button"
        className={styles.button}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default IndexPage;
