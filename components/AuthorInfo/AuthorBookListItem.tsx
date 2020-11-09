import styles from "./AuthorInfo.module.css";

type Props = {
  book: {
    link: string;
    image_url: string;
    small_image_url: string;
    title: string;
    book_title: string;
    isbn: number;
    text_reviews_count: number;
    ratings_count: number;
    num_pages: number;
    average_rating: number;
    publication_day: number;
    publication_month: number;
    publication_year: number;
  };
};

const AuthorBookListItem: React.FC<Props> = ({ book }) => {
  console.log(book);

  return (
    <div>
      <a className={styles.book_list_item} href={book.link} target="_blank">
        {book.image_url ? (
          <img src={book.image_url} alt={`${book.title} book cover`} />
        ) : (
          <img src={book.small_image_url} alt={`${book.title} book cover`} />
        )}
        <div className={styles.book_info}>
          <p className={styles.book_title}>{book.title}</p>
          <p>
            <span>
              Isbn:{` `}
              <strong>{book.isbn}</strong>,
            </span>
            <span>
              {` `}Reviews:{` `}
              <strong>{book.text_reviews_count}</strong>,
            </span>

            <span>
              {` `}Ratings:{` `}
              <strong>{book.ratings_count}</strong>,
            </span>
            <span>
              {` `}Pages:{` `}
              <strong>{book.num_pages}</strong>,
            </span>
          </p>
          <p>
            <span>
              {` `}Rating:{` `}
              <strong>{book.average_rating}</strong>,
            </span>
            <span>
              {` `}Published:{` `}
              <strong>
                {`${
                  book.publication_day
                    ? ("0" + book.publication_day).slice(-2) + "/"
                    : ""
                }${
                  book.publication_month
                    ? ("0" + book.publication_month).slice(-2) + "/"
                    : ""
                }${book.publication_year}`}
              </strong>
            </span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default AuthorBookListItem;
