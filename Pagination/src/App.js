import { useEffect, useState, Fragment } from "react";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );
      const data = await response.json();
      if (data && data.products) {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / 10));
      }
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="App">
      {/* Loading Indicator */}
      {loading && <div>Loading...</div>}

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      {/* Products Section */}
      {!loading && !error && products.length > 0 && (
        <div className="products">
          {products.map((prod) => (
            <span className="products__single" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
      )}

      {/* No Products Message */}
      {!loading && !error && products.length === 0 && (
        <div>No products available.</div>
      )}

      {/* Pagination */}
      {!loading && products.length > 0 && (
        <div className="pagination">
          {/* Previous Button */}
          <span
            onClick={() => page > 1 && selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ⬅️
          </span>

          {/* Dynamic Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1)
            .filter((pg) => {
              // Show first, last, current, and two around the current page
              return pg === 1 || pg === totalPages || Math.abs(pg - page) <= 2;
            })
            .map((pg, idx, arr) => (
              <Fragment key={pg}>
                {/* Dots for skipped pages */}
                {idx > 0 && pg !== arr[idx - 1] + 1 && (
                  <span className="pagination__dots">...</span>
                )}
                <span
                  className={page === pg ? "pagination__selected" : ""}
                  onClick={() => selectPageHandler(pg)}
                >
                  {pg}
                </span>
              </Fragment>
            ))}

          {/* Next Button */}
          <span
            onClick={() => page < totalPages && selectPageHandler(page + 1)}
            className={page < totalPages ? "" : "pagination__disable"}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}
