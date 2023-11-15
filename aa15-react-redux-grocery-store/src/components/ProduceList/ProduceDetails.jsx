import {useState} from 'react';

function ProduceDetails({ produce }) {
  const cartItem = {};
  const [item, setItem] = useState("");

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}

        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          // value={produce.id}
          onClick={() => setItem(produce.id)}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
