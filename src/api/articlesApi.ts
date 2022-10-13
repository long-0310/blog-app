/** @format */

import { listArticleType, tagType } from "./../Types/ArticlesType";
import {
  CreateArticleType,
  updateArticlesType,
} from "./../Types/createArticleType";
import axiosInstance from ".";
import { articleInterface } from "../Types/ArticlesType";

const articlesAPi = {
  getArticles: (): Promise<articleInterface> => {
    return axiosInstance.get("articles");
  },
  postArticlesApi(articlesData: CreateArticleType): Promise<CreateArticleType> {
    return axiosInstance.post("articles", articlesData);
  },
  updateArticlesApi(
    slug: string,
    articlesData: updateArticlesType
  ): Promise<articleInterface> {
    return axiosInstance.put(`articles/${slug}`, { article: articlesData });
  },
  deleteArticlesApi(slug: string): Promise<articleInterface> {
    return axiosInstance.delete(`articles/${slug}`);
  },

  favoriteArticleApi(slug: string): Promise<articleInterface> {
    return axiosInstance.post(`articles/${slug}/favorite`);
  },
  unfavoriteArticleApi(slug: string): Promise<articleInterface> {
    return axiosInstance.delete(`articles/${slug}/favorite`);
  },
  singleArticlesApi(slug: string): Promise<articleInterface> {
    return axiosInstance.get(`articles/${slug}`);
  },
  getTagApi: function (): Promise<articleInterface> {
    return axiosInstance.get("tag");
  },
  getArticlesByAuthor(userName: string): Promise<articleInterface> {
    return axiosInstance.get(`articles/?author=${userName}`);
  },
  getTags(): Promise<tagType> {
    return axiosInstance.get("tags");
  },
  getTagsArticles(tag: string): Promise<tagType> {
    return axiosInstance.get(`articles/?tag=${tag}`);
  },
  getLikeUser(name: string): Promise<tagType> {
    return axiosInstance.get(`articles/?favorited=${name}`);
  },
};
export default articlesAPi;
