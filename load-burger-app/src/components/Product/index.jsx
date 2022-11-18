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
      toast.success("Produto adicionado ao carrinho!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const productIndex = currentSale.findIndex(
        (element) => element.id === newProduct.id
      );
      const updatedList = currentSale.map((obj, index) => {
        if (index === productIndex) {
          return { ...obj, quantity: obj.quantity + 1 };
        }
        return obj;
      });

      setCurrentSale(updatedList);
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
                quantity: 1,
              })
            }
          >
            Adicionar
          </button>
        </div>
      </li>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}
