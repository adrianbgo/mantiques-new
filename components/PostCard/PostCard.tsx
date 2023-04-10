import { useState } from "react";
import { useRouter } from "next/router";
import { BlogPost } from "@/pages/api/models/BlogPost";
import { ObjectId } from "mongodb";
import Link from "next/link";

interface IPostcard {
  post: BlogPost;
}

export default function PostCard({ post }: IPostcard) {
  const [publishing, setPublishing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // Publish post
  const publishPost = async (postId: ObjectId) => {
    // change publishing state
    setPublishing(true);
    const data = {
      id: postId,
    };
    try {
      // Update post
      await fetch("/api/posts", {
        method: "PUT",
        body: JSON.stringify(data),
      });

      // reset the publishing state
      setPublishing(false);
      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      console.error(error);
      // Stop publishing state
      return setPublishing(false);
    }
  };
  // Delete post
  const deletePost = async (postId: ObjectId) => {
    //change deleting state
    setDeleting(true);
    const data = {
      id: postId,
    };
    try {
      // Delete post
      await fetch("/api/posts", {
        method: "DELETE",
        body: JSON.stringify(data),
      });

      // reset the deleting state
      setDeleting(false);

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
    }
  };
  return (
    <>
      <li>
        <h3>
          <Link href={`/blog/${post._id}`}>{post.title}</Link>
        </h3>
        <p>{post.content}</p>
        <small>{new Date(post.date).toLocaleDateString()}</small>
        <br />
        {!post.published ? (
          <button
            type="button"
            onClick={async () => await publishPost(post["_id"])}
          >
            {publishing ? "Publishing" : "Publish"}
          </button>
        ) : null}
        <button type="button" onClick={() => deletePost(post["_id"])}>
          {deleting ? "Deleting" : "Delete"}
        </button>
      </li>
    </>
  );
}
