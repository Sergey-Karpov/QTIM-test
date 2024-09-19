import type { Post } from "~/types";
import { API_BASE_URL } from "~/utils/constants";

export const getPost = async (id: string): Promise<Post | null> => {
  let post: Post | null = null;

  try {
    const res = await fetch(`${API_BASE_URL}/posts/${id}`);

    if (!res.ok) {
      throw new Error(`Ошибка загрузки поста: ${res.statusText}`);
    }

    post = (await res.json()) as Post;
  } catch (error) {
    console.error("Ошибка при получении поста:", error);
    post = null;
  }

  return post;
};
