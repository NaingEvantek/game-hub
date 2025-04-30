import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
  onDelete: (item: string) => void;
}
const Cart = ({ cartItems, onClear, onDelete }: Props) => {
  return (
    <>
      <div>Card</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>
            {item}{" "}
            <button onClick={() => onDelete(item)} className="btn btn-danger">
              x
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
