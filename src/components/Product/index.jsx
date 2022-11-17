import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Product({
  id,
  name,
  category,
  price,
  img,
  setCurrentSale,
  currentSale,
}) {
  function addProductToCart(newProduct) {
    if (!currentSale.some((element) => element.id === newProduct.id)) {
      setCurrentSale((previousSales) => [...previousSales, newProduct]);
    } else {
      toast.error("Produto já adicionado!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <li className="card-item">
        <div className="card-item__box-image">
          <img src={img} alt={name} />
        </div>
        <div className="card-item__box_text">
          <h2>{name}</h2>
          <span>{category}</span>
          {price % 1 === 0 ? <p>R${price}.00</p> : <p>R${price}</p>}
          <button
            className="green-button"
            onClick={() =>
              addProductToCart({
                id: id,
                name: name,
                category: category,
                price: price,
                img: img,
              })
            }
          >
            Adicionar
          </button>
        </div>
      </li>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </>
  );
}
