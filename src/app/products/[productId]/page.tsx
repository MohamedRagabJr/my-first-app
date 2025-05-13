import { Metadata } from "next";
type props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    }, 100);
  });
  return {
    title: ` Product ${title} `,
  };
};
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Details About Product {productId}</h1>
      </main>
    </div>
  );
}
