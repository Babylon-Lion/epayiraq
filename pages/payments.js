import Feature from "../components/Feature";
import Hero2 from "../components/Hero2";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Testimoni from "../components/Testimoni";
import Pricing from "../components/Pricing";
export default function Payments() {
  return (
    <>
      <SeoHead title='ePayIraq - Payment Systems for the internet in Iraq' />
      <Layout>
        <Hero2 />
        <Feature />
        <Pricing />

      </Layout>
    </>
  );
}
