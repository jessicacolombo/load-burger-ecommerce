import { Product } from "../Product";
import "./style.css";

export function ProductList({ filteredProducts, currentSale, setCurrentSale }) {
  return (
    <section>
      <ul className="products-list">
        {filteredProducts.map((elem) => {
          return (
            <Product
              key={elem.id}
              id={elem.id}
              name={elem.name}
              category={elem.category}
              price={elem.price}
              img={elem.img}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          );
        })}
      </ul>
    </section>
  );
}
