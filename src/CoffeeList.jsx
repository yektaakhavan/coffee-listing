import "./CoffeeList.css";
function CoffeeList({ items }) {
  return (
    <ul className="coffee-list">
      {items.map((item, id) => (
        <li key={id} className="coffee-card">
          <div className="card">
            <div className="image-wrapper">
              <img id="coffee-image" src={item.image} alt={item.name} />
              {item.popular && <span id="label">popular</span>}
            </div>
            <div className="info">
              <p id="coffee-name">{item.name}</p>
              <button id="price">{item.price}</button>
            </div>
            <div className="rating">
              {item.rating !== null ? (
                <>
                  <img
                    id="star"
                    src="/src/assest/images/Star_fill.svg"
                    alt="star"
                  />
                  <p id="rating">{item.rating}</p>
                  <p id="votes">({item.votes} votes)</p>
                  {item.available === false && (
                    <span id="available">Sold out</span>
                  )}
                </>
              ) : (
                <>
                  <img id="star" src="/src/assest/images/Star.svg" alt="star" />
                  <p id="votes">No rating</p>
                </>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CoffeeList;
