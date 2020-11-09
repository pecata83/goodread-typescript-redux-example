import Layout from "@components/Layout";
import BookList from "@components/BookList";

export default function Home() {
  return (
    <Layout>
      <BookList></BookList>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
