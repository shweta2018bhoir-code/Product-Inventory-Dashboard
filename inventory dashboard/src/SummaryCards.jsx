import React from "react";

function SummaryCards({ summary }) {
  return (
    <div className="cards">
      <div className="card">
        <h3>Total Products</h3>
        <p>{summary.totalProducts}</p>
      </div>

      <div className="card">
        <h3>Average Rating</h3>
        <p>{summary.avgRating}</p>
      </div>

      <div className="card">
        <h3>Total Stock Value</h3>
        <p>${summary.totalStockValue}</p>
      </div>
    </div>
  );
}

export default SummaryCards;