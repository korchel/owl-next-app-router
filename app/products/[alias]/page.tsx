import getMenu from "@/app/api/getMenu";
import getPage from "@/app/api/getPage";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const menu = await getMenu(0);
  console.log(menu);
  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
};

const ProductsPage = async ({ params }: { params: { alias: string } }) => {
  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }
  return (
    <div>
      product page {page.title}
    </div>
  );
};

export default ProductsPage;