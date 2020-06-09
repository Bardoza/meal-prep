import { post, get } from "../src/utils/apiService";
const url = "/ingredients";

export const save = async (ingredient) => post(url, ingredient);

export const load = async () => {
  const response = await get(url);
  return response.Items || [];
};
