const Card = ({ product }) => {
  const { desc, title } = product;
  return (
    <div className="border-solid border-2">
      <h1> {title} </h1>
      <p>{desc}</p>
      <button>add to cart</button>
    </div>
  );
};

export default Card;
