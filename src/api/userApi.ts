import axiosInstance from ".";
import { userType } from "../Types/authType";
import { updateUser } from "../Types/currentUserType";

const userApi = {
  getUserProfile(): Promise<userType> {
    return axiosInstance.get("user");
  },
  putUserProfile(data: updateUser): Promise<userType> {
    return axiosInstance.put("user", data);
  },

  getAuthorProfileApi(username: string): Promise<userType> {
    return axiosInstance.get(`profiles/${username}`);
  },
  followUser(username: string): Promise<userType> {
    return axiosInstance.post(`profiles/${username}/follow`);
  },
  unFollowUser(username: string): Promise<userType> {
    return axiosInstance.delete(`profiles/${username}/follow`);
  },
};

export default userApi;
