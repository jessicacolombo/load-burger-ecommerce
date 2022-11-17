import "./style.css";
import { Logo } from "../Logo";
import { InputSearch } from "../InputSearch";

export function Header({ products, setFilteredProducts }) {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <InputSearch
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </header>
  );
}
