type Book = {
  id: number;
  average_rating: string;
  original_publication_day: number;
  original_publication_month: number;
  original_publication_year: number;
  best_book: {
    author: {
      name: string;
      id: number;
    };
    title: string;
    small_image_url: string;
  };
};

export default Book;
