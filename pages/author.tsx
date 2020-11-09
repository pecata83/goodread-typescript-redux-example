import { useDispatch, useSelector } from "react-redux";
import Layout from "@components/Layout";
import { startAuthorSearch } from "@store/search/actions";
import { useRouter } from "next/router";
import AuthorInfo from "@components/AuthorInfo";

export default function Author() {
  const router = useRouter();
  const { id } = router.query;

  const authorId =
    id ??
    useSelector((state) => {
      return state.search.selectedAuthorId;
    });

  const dispatch = useDispatch();

  if (authorId) {
    dispatch(startAuthorSearch({ authorId }));
  }

  return (
    <Layout>
      <AuthorInfo></AuthorInfo>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
