import { MenuItem } from "@/interfaces/menu,interface";
import { API } from "../api";

const getMenu = async (firstCategory: number): Promise<MenuItem[]> => {
  const response = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({firstCategory}),
    headers: new Headers({ 'content-type': 'application/json'}),
    next: { revalidate: 10 },
  });
  return response.json();
};

export default getMenu;