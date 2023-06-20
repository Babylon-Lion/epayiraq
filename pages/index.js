import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Testimoni from "../components/Testimoni";
import Pricing from "../components/Pricing";
export default function Home() {
  return (
    <>
      <SeoHead title='ePayIraq - Payment Systems for the internet in Iraq' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />

      </Layout>
    </>
  );
}
