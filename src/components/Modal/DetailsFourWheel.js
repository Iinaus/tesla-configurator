import React, { useState } from "react";
import "./Modal.css";

export default function DetailsFourWheel() {
  const [DetailsFourWheel, setDetailsFourWheel] = useState(false);

  const toggleDetailsFourWheel = () => {
    setDetailsFourWheel(!DetailsFourWheel);
  };

  if(DetailsFourWheel) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button 
        onClick={toggleDetailsFourWheel}>
        Details</button>

      {DetailsFourWheel && (
        <div className="modal">
          <div onClick={toggleDetailsFourWheel} className="overlay"></div>
          <div className="modal-content">
            <h2>Four Wheel Drive details</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button
                className="close-modal"
                onClick={toggleDetailsFourWheel}>
                X</button>
          </div>
        </div>
      )}
    </>
  );
}