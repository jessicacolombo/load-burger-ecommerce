import { toast } from "react-toastify";
import "./style.css";

export function CartCard({
  id,
  name,
  category,
  img,
  quantity,
  currentSale,
  setCurrentSale,
}) {
  function removeItem(id) {
    const product = currentSale.filter((elem) => elem.id === id);
    if (product[0].quantity === 1) {
      const arrayWhithoutTheItem = currentSale.filter((elem) => elem.id !== id);
      setCurrentSale(arrayWhithoutTheItem);
    } else if (product[0].quantity > 1) {
      const updatedList = currentSale.map((obj) => {
        if (obj === product[0]) {
          return { ...obj, quantity: obj.quantity - 1 };
        }
        return obj;
      });
      setCurrentSale(updatedList);
    }

    toast.success("Item removido do carrinho!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
          <p className="div-text-cart__qtt">{quantity}</p>
        </div>
      </div>
      <button type="button" onClick={() => removeItem(id)}>
        Remover
      </button>
    </li>
  );
}
