import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=50&skip=0"
      );
      const data = await response.json();
      if (data && data.products) setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      {/* Products Section */}
      {products.length > 0 && (
        <div className="products">
          {products.slice((page - 1) * 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />{" "}
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ⬅️
          </span>

          {[
            ...Array(
              Math.floor(products.length / 10) +
                (products.length % 10 !== 0 ? 1 : 0)
            ),
          ].map((_, index) => (
            <span
              key={index}
              className={page === index + 1 ? "pagination__selected" : ""}
              onClick={() => selectPageHandler(index + 1)}
            >
              {index + 1}
            </span>
          ))}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < products.length / 10
                ? ""
                : "pagination__disable"
            }
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}
