import React from "react";
import "../modal/modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Preparando Pedido...</h2>
            <p>Por favor, aguarde enquanto seu pedido está sendo preparado.</p>
            <button onClick={onClose}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
