export interface Post {
  createdAt: string;
  description: string;
  id: string;
  image: string;
  preview: string;
  title: string;
}

export type PostList = Post[];
