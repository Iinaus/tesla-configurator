import React, { useState } from "react";
import "./Modal.css";
import DeliveryDate from './../DeliveryDate';

export default function Payment() {
  const [Payment, setPayment] = useState(false);

  const togglePayment = () => {
    setPayment(!Payment);
  };

  if(Payment) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button
        onClick={togglePayment}
        className="widebuttonblue">
        Continue to Payment</button>

      {Payment && (
        <div className="modal">
          <div onClick={togglePayment} className="overlay"></div>
          <div className="modal-content">
            <h2>Summary</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <b><DeliveryDate /></b>
            <button className="widebuttonblue">Order with card</button>
            <button
              className="close-modal"
              onClick={togglePayment}>
              X</button>
          </div>
        </div>
      )}
    </>
  );
}