import api from "./apiConfig";

export const getAllCookies = async () => {
  const resp = await api.get("/cookies");
  return resp.data;
};
