"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>
          Review {reviewId} not found for product {productId}
        </h1>
      </main>
    </div>
  );
}
