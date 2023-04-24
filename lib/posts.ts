import { BlogPost } from "@/pages/api/models/BlogPost";
import { ObjectId } from "bson";

export const getAllPostIds = async () => {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;
  const response: Response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/posts`
  );
  let data = await response.json();
  let posts: Array<BlogPost> = JSON.parse(JSON.stringify(data.message));
  let pathList = posts.map((post) => post._id);
  return pathList.map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
};

export const getPostData = async (id: ObjectId) => {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;
  const response: Response = await fetch(
    `${
      dev
        ? "http://localhost:3000"
        : "https://adrianbgo.github.io/mantiques-new"
    }/api/posts`
  );
  let data = await response.json();
  let posts: Array<BlogPost> = JSON.parse(JSON.stringify(data.message));
  let post = posts.find((post) => post._id === id);
  return {
    id,
    post,
  };
};
