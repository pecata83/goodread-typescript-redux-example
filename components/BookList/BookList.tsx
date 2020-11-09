import { useSelector } from "react-redux";
import styles from "./BookList.module.css";
import BookListItem from "./BookListItem";

type Props = {};

const BookList: React.FC<Props> = () => {
  const totalBooks = useSelector((state) => {
    return state.search.searchResultItemsNumber;
  });
  const searchResultStart = useSelector((state) => {
    return state.search.searchResultStart;
  });
  const searchResultEnd = useSelector((state) => {
    return state.search.searchResultEnd;
  });

  const books = useSelector((state) => {
    return state.search.searchResult;
  });

  if (!books) {
    return <div></div>;
  } else {
    const _booksList = Object.keys(books).map((id) => (
      <BookListItem key={id} book={books[id]} />
    ));

    return (
      <section className={styles.book_list_container}>
        <div className={styles.book_list_head}>
          <p>
            Results:<strong>{` ` + totalBooks}</strong>
          </p>
          <p>
            Showing:<strong>{` ` + searchResultStart + ` `}</strong>to{" "}
            <strong>{` ` + searchResultEnd + ` `}</strong>
          </p>
        </div>
        <div className={styles.book_list}>{_booksList}</div>
      </section>
    );
  }
};

export default BookList;
