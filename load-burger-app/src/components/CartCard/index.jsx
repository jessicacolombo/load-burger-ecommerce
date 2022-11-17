import "./style.css";

export function CartCard({
  id,
  name,
  category,
  img,
  currentSale,
  setCurrentSale,
}) {
  function removeItem(id) {
    const arrayWhithoutTheItem = currentSale.filter((elem) => elem.id !== id);
    setCurrentSale(arrayWhithoutTheItem);
  }

  return (
    <li className="cart-card">
      <div className="cart-card__content-div">
        <div className="div-img-cart">
          <img src={img} alt={name} />
        </div>
        <div className="div-text-cart">
          <h2>{name}</h2>
          <span>{category}</span>
        </div>
      </div>
      <button type="button" onClick={() => removeItem(id)}>
        Remover
      </button>
    </li>
  );
}
