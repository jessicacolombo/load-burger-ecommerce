import "./style.css";

export function InputSearch({ products, setFilteredProducts }) {
  function handleSearch(inputValue) {
    if (inputValue !== "") {
      const filteredGroup = products.filter(
        (elem) =>
          elem.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          elem.category.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProducts(filteredGroup);
    } else {
      setFilteredProducts(products);
    }
  }

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event) => handleSearch(event.target.value)}
      ></input>
      <button type="button" className="green-button">
        Pesquisar
      </button>
    </div>
  );
}
