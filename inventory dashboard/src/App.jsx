import React, { useEffect, useState } from "react";
import SummaryCards from "./SummaryCards";
import ProductTable from "./ProductTable";
import "./App.css";

const API_URL = "https://script.google.com/macros/s/AKfycbzj--MgjKx4P7x8GoHG71O5zGMY2nkYf95P99Nr60IBI2e2uES5S62CRjzXFkSdtlcSZA/exec";

function App() {
  const [products, setProducts] = useState([]);
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          accessToken: "secretToken"
        })
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setProducts(data.data);
      setSummary(data.summary);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (products.length === 0) return <h2>No Data Found</h2>;

  return (
    <div className="container">
      <h1>Product Inventory Dashboard</h1>

      <SummaryCards summary={summary} />
      <ProductTable products={products} />
    </div>
  );
}

export default App;