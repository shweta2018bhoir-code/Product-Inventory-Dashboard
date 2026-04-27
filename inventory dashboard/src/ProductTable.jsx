import React, { useState } from "react";

function ProductTable({ products }) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("");

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0;
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={e => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th onClick={() => setSortKey("title")}>Title</th>
            <th onClick={() => setSortKey("price")}>Price</th>
            <th onClick={() => setSortKey("discountedPrice")}>Discounted</th>
            <th onClick={() => setSortKey("rating")}>Rating</th>
            <th onClick={() => setSortKey("stock")}>Stock</th>
            <th>Status</th>
            <th>Review Score</th>
          </tr>
        </thead>

        <tbody>
          {sorted.map(p => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>${p.price}</td>
              <td>${p.discountedPrice}</td>
              <td>{p.rating}</td>
              <td>{p.stock}</td>
              <td>{p.status}</td>
              <td>{p.reviewScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;