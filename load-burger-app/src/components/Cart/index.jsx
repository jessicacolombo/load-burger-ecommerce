import "./style.css";
import { CartCard } from "../CartCard";
import { CartTotal } from "../CartTotal";

export function Cart({ currentSale, setCurrentSale }) {
  return (
    <section className="container-cart">
      <div className="cart">
        <h1>Carrinho de Compras</h1>
        <div className="cart__section">
          {currentSale.length > 0 ? (
            <section className="content-cart">
              <ul className="cart__list">
                {currentSale.map((elem) => {
                  return (
                    <CartCard
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      category={elem.category}
                      img={elem.img}
                      currentSale={currentSale}
                      setCurrentSale={setCurrentSale}
                    />
                  );
                })}
              </ul>
              <CartTotal currentSale={currentSale} />
              <button
                type="button"
                className="button-empty-the-cart"
                onClick={() => setCurrentSale([])}
              >
                Remover todos
              </button>
            </section>
          ) : (
            <div className="empty-cart">
              <h2>Sua sacola está vazia</h2>
              <p>Adicione itens</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
