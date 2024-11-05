export default function Filter({ category }: { category: string }) {
  return (
    <section className="flex *:rounded-xl *:px-4 *:py-1 hover:*:bg-white ">
      <div className={`${category === "all" && "bg-white"}`}>همه</div>
      <div>بشقاب</div>
      <div>گلدان</div>
      <div>گردسوز</div>
    </section>
  );
}
