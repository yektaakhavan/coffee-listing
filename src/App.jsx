import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
function App() {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <img className="bg-image" alt="" />
      <div className="container-fluid">
        <div className="container">
          <h1>Our Collection</h1>
          <h4>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </h4>
          <div className="btn">
            <button
              id="all-products"
              onClick={() => setFilter("all")}
              style={{
                backgroundColor: filter === "all" ? "#4D5562" : "transparent",
              }}
            >
              All Products
            </button>
            <button
              id="available-now"
              onClick={() => setFilter("available")}
              style={{
                backgroundColor:
                  filter === "available" ? "#4D5562" : "transparent",
              }}
            >
              Available Now
            </button>
          </div>

          {/* Cards */}
          <Card filter={filter} />
        </div>
      </div>
    </>
  );
}

export default App;
