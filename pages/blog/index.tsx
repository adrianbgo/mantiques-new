import Layout from "@/components/Layout/Layout";
import PostCard from "@/components/PostCard/PostCard";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Blog.module.css";
import { BlogPost } from "../api/models/BlogPost";
interface IBlog {
  posts: Array<BlogPost>;
}
const Blog = (posts: IBlog) => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <div className={styles["blog-post-container"]}>
          {posts.posts.length == 0 ? (
            <h2>No Posts Added</h2>
          ) : (
            <ul className={styles["blog-post-container"]}>
              {posts.posts.map((post, i) => (
                <li key={`${post._id}`} className={styles["blog-post-card"]}>
                  <Link
                    href={`/blog/${post._id}`}
                    className={styles["blog-heading"]}
                  >
                    {post.title}
                  </Link>
                  <p className={styles["blog-post-details"]}>{post.content}</p>
                  <small className={styles["blog-post-date"]}>{`${new Date(
                    post.date
                  ).toLocaleDateString()}`}</small>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps = async (ctx: any) => {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;

  let response: Response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
  let data = await response.json();
  return {
    props: {
      posts: data["message"],
    },
  };
};

export default Blog;
