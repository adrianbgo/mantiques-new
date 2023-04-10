import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function Custom404() {
  return (
    <Layout>
      <div className="error-container">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for cannot be found.</p>
        <Link href="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
}
