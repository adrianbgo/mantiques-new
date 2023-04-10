import Layout from "@/components/Layout/Layout";
import { FormEvent, useState } from "react";
import { BlogPost } from "./api/models/BlogPost";
import styles from "../styles/AddPost.module.css";
import { ObjectId } from "bson";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!title || !content) return setError("All fields required");
    let _id = new ObjectId();
    let post: BlogPost = {
      _id,
      title,
      slug: title,
      content,
      excerpt: content,
      author,
      date: new Date(),
      tags,
      published: false,
    };

    let response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });

    let data = await response.json();

    if (data.success) {
      setTitle("");
      setContent("");
      setAuthor("");
      setTags([]);

      return setMessage(data.message);
    } else {
      return setError(data.message);
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <form onSubmit={handlePost} className={styles.form}>
          {error ? (
            <div className={styles.formItem}>
              <h3 className={styles.error}>{error}</h3>
            </div>
          ) : null}
          {message ? (
            <div className={styles.formItem}>
              <h3 className={styles.message}>{message}</h3>
            </div>
          ) : null}
          <div className={styles.formItem}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="title"
            />
          </div>
          <div className={styles.formItem}>
            <label>Author</label>
            <input
              type="text"
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              placeholder="author"
            />
          </div>
          <div className={styles.formItem}>
            <label>Content</label>
            <textarea
              name="content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Post Content"
            />
          </div>
          <div className={styles.formItem}>
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              onChange={(e) => setTags([e.target.value])}
              value={tags[0]}
              placeholder="Tags"
            />
          </div>
          <div className={styles.formItem}>
            <button type="submit">Add Post</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddPost;
