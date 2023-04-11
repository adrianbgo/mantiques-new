import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const name = "Mantiques";
export const siteTitle = "Mantiques - Vintage Finds and Treasures";

interface ILayout {
  children: React.ReactNode;
  home?: boolean;
  title?: string;
}

const Layout: React.FC<ILayout> = ({ children, home, title }: ILayout) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Vintage Finds and Treasures" />
        <meta name="og:title" content={title ? title : siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
