import { useEffect, useState } from "react";
import "./Card.css";
import CoffeeList from "./CoffeeList";

function Card({ filter }) {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => console.error("problem is found", error));
  }, []);
  
  const filteredData =
    filter === "available"
      ? coffeeData.filter((item) => item.available === true)
      : coffeeData;

  return <CoffeeList items={filteredData} />;
}

export default Card;
