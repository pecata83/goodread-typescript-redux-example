import { useDispatch } from "react-redux";
import Link from "next/link";
import styles from "./BookList.module.css";
import bookType from "../../types/book";
import { selectAuthor } from "@store/search/actions";

type Props = {
  book: bookType;
};

const BookListItem: React.FC<Props> = ({ book }) => {
  const dispatch = useDispatch();

  function handleAuthorSelect() {
    const selectedAuthorId = book.best_book.author.id;
    const selectedAuthorName = book.best_book.author.name;
    dispatch(selectAuthor({ selectedAuthorId, selectedAuthorName }));
  }

  return (
    <div className={styles.book_list_item}>
      <img
        src={book.best_book.small_image_url}
        alt={`${book.best_book.title} book cover`}
      />
      <div className={styles.book_info}>
        <p className={styles.book_title}>{book.best_book.title}</p>
        <p>
          {` `}by{` `}
          <Link
            href={`/author?id=${book.best_book.author.id}&name=${book.best_book.author.name}`}
          >
            <a onClick={(e) => handleAuthorSelect()}>
              <strong className={styles.book_info_author}>
                {book.best_book.author.name}
              </strong>
            </a>
          </Link>
          ,
        </p>
        <p>
          <span>
            Rating:{` `}
            <strong>{book.average_rating}</strong>,
          </span>

          <span>
            {` `}Published:{` `}
            <strong>
              {`${
                book.original_publication_day
                  ? ("0" + book.original_publication_day).slice(-2) + "/"
                  : ""
              }${
                book.original_publication_month
                  ? ("0" + book.original_publication_month).slice(-2) + "/"
                  : ""
              }${book.original_publication_year}`}
            </strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookListItem;
