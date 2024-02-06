import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import scss from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = isOpen && (
    <div className={scss.header}>
      <div className={scss.main}>
        {/* <button onClick={onClose}>&times;</button> */}
      </div>
      {children}
    </div>
  );

  return isBrowser
    ? ReactDOM.createPortal(modalContent, document.getElementById("react-root"))
    : null;
};

export default Modal;
