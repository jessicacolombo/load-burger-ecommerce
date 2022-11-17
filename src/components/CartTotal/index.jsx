import "./style.css";

export function CartTotal({ currentSale }) {
  const total = currentSale.reduce((prev, cur) => prev + +cur.price, 0);
  return (
    <div className="cart-total">
      <h2>Total: </h2>
      <span>R${total.toFixed(2)}</span>
    </div>
  );
}
