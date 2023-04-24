import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";

const name = "Mantiques";
export const siteTitle = "Mantiques - Vintage Finds and Treasures";

interface ILayout {
  children: React.ReactNode;
  home?: boolean;
  title?: string;
}

const Layout: React.FC<ILayout> = ({ children, home, title }: ILayout) => {
  const router = useRouter();
  const [underConstruction, setUnderConstruction] = useState(true);

  useEffect(() => {
    if (underConstruction) {
      router.push("/");
    }
  }, [underConstruction, router]);
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
