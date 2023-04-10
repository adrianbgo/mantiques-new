import Layout from "@/components/Layout/Layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { ObjectId } from "bson";
import { GetStaticProps } from "next";
import React from "react";
import { BlogPost } from "../api/models/BlogPost";
import styles from "../../styles/BlogPost.module.css";
import { format } from "date-fns";

interface IPost {
  postData: {
    post: BlogPost;
  };
}
const Post = ({ postData }: IPost) => {
  console.log(postData);
  return (
    <Layout>
      <h1 className={styles.title}>{postData.post.title}</h1>
      <p className={styles.date}>
        Posted on {format(new Date(postData.post.date), "MMMM dd, yyyy")}
      </p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.post.content }}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: ObjectId };
}) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
