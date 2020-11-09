import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const IndexPage: React.FC<Props> = ({ title = "Books", children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header title={title} />
    <main>{children}</main>
    <Footer />
  </>
);

export default IndexPage;
