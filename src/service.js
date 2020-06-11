import { post, get, deleteRequest } from "../src/utils/apiService";
const url = "ingredients";

export const createIngredient = async (ingredient) => post(url, ingredient);

export const loadIngredients = async () => {
  const response = await get(url);
  return response.Items || [];
};

export const deleteIngredient = async (ingredientId) =>
  deleteRequest(url, { ingredientId });
