import { ObjectId } from "mongodb";

export interface BlogPost {
  _id: ObjectId;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  date: Date;
  tags: string[];
  published: boolean;
}
