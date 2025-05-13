export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2>Featured Products</h2>
      </div>
    </>
  );
}
