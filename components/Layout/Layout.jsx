import Head from "next/head";
import Header from "../Header/Header";

/**
 * Custom layout component that allows you to create a custom head
 * for each page by passing in your own details
 * @param {String} title The title to pass into the head
 * @param {String} keywords The keywords to pass into the head
 * @param {String} description The description to pass into the head
 * @param {String} children The children to render inside the head
 */
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Legends of Kesmai Marketplace",
  keywords: "legends of kesmai, lok, gaming, mmorpg, iok, gamestorm",
  description: "Marketplace for Legends of Kesmai",
};
