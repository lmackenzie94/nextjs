import Link from "next/link";
import Layout from "../components/Layout";
import withLayout from "../components/Layout";

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
  </Layout>
);

export default Index;
// export default withLayout(Index);