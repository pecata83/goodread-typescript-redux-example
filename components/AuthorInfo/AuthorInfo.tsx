import { useSelector } from "react-redux";
import styles from "./AuthorInfo.module.css";
import AuthorBookListItem from "./AuthorBookListItem";

type Props = {};

const AuthorInfo: React.FC<Props> = () => {
  const selectedAuthor = useSelector((state) => {
    return state.search.selectedAuthor;
  });

  console.log(selectedAuthor);

  if (!selectedAuthor) {
    return <div></div>;
  } else {
    const _booksList = selectedAuthor.books.book.map((book) => (
      <AuthorBookListItem key={book.id} book={book} />
    ));

    return (
      <section className={styles.author_info_container}>
        <div className={styles.author_image}>
          <img src={selectedAuthor.image_url} alt="Author photo" />
        </div>
        <div className={styles.author_details}>
          <p className={styles.author_name}>{selectedAuthor.name}</p>
          <p>
            <strong>Fans : {` `}</strong>
            {selectedAuthor.fans_count}
          </p>
          <p>
            <strong>Followers: {` `}</strong>
            {selectedAuthor.author_followers_count}
          </p>
          <p>
            <strong>Hometown: {` `}</strong>
            {selectedAuthor.hometown}
          </p>
          <div dangerouslySetInnerHTML={{ __html: selectedAuthor.about }}></div>
          {/* <p>
            About: {` `}
            {selectedAuthor.about}
          </p> */}
          <div>{_booksList}</div>
        </div>
      </section>
    );
  }
};

export default AuthorInfo;
