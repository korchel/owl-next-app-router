import { API } from "../api";
import { TopPageModel } from "@/interfaces/page.interface";

const getPage = async (alias: string): Promise<TopPageModel | null> => {
  const response = await fetch(API.topPage.byAlias + alias, { next: { revalidate: 10 } },);
  if (!response.ok) {
    return null;
  }
  return response.json();
};

export default getPage;