import Card from "./Card";

const products = [
  {
    title: "shoes",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit",
  },
  {
    title: "shoes 2",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit",
  },
  {
    title: "shoes 3",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit",
  },
];
const Products = () => {
  return (
    <div>
      <h1>products</h1>
      <div className="grid grid-cols-3 gap-5 p-8">
        {products.map((v, i) => (
          <Card key={i} product={v} />
        ))}
      </div>
    </div>
  );
};

export default Products;
