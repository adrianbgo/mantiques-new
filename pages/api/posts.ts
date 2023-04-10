import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { BlogPost } from "./models/BlogPost";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      return getPosts(req, res);
    }

    case "POST": {
      return addPost(req, res);
    }

    case "PUT": {
      return updatePost(req, res);
    }

    case "DELETE": {
      return deletePost(req, res);
    }
  }
};

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { db } = await connectToDatabase();

    let posts = await db
      .collection<BlogPost>("blog-posts")
      .find({})
      .sort({ published: -1 })
      .toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (error: any) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

const addPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { db } = await connectToDatabase();

    await db.collection("blog-posts").insertOne(JSON.parse(req.body));

    return res.json({
      message: "Post added successfully",
      success: true,
    });
  } catch (error: any) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

const updatePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { db } = await connectToDatabase();
    const _id = JSON.parse(req.body).id;
    await db.collection("blog-posts").updateOne(
      {
        _id,
      },
      { $set: { published: true } }
    );
    return res.json({
      message: "Post Updated Successfully",
      success: true,
    });
  } catch (error: any) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { db } = await connectToDatabase();
    const _id = JSON.parse(req.body).id;
    await db.collection("blog-posts").deleteOne({
      _id,
    });
    console.log("deleted");
    return res.json({
      message: "Post Deleted Successfully",
      success: true,
    });
  } catch (error: any) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

export default handler;
