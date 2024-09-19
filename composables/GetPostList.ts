import type { PostList } from "~/types";
import { API_BASE_URL } from "~/utils/constants";

export const getPostList = async (): Promise<PostList | []> => {
  let postList: PostList | [] = [];

  try {
    const res = await fetch(`${API_BASE_URL}/posts/`);

    if (!res.ok) {
      throw new Error(`Ошибка загрузки списка постов: ${res.statusText}`);
    }

    postList = (await res.json()) as PostList;
  } catch (error) {
    console.error("Ошибка при получении списка постов:", error);
    postList = [];
  }

  return postList;
};
