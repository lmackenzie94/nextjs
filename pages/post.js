import { useRouter } from "next/router";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Page = () => {
  const router = useRouter();
  // useRouter allows us to access the 'router' object inside the page

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};
export default Page;
