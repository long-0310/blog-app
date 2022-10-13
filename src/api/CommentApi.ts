import axiosInstance from ".";
import { commentDeleteType, commentType } from "../Types/CommentType";

const commentAPi = {
  getCommentApi: function (slug: string): Promise<commentType> {
    return axiosInstance.get(`articles/${slug}/comments`);
  },
  sendCommentApi: function (slug: string, body: string): Promise<any> {
    const comment = {
      comment: {
        body: body,
      },
    };
    return axiosInstance.post(`articles/${slug}/comments`, comment);
  },
  deleteCommentApi: function (data: {
    slug: any;
    id: any;
  }): Promise<commentDeleteType> {
    const { slug, id } = data;
    return axiosInstance.delete(`articles/${slug}/comments/${id}`);
  },
};
export default commentAPi;
