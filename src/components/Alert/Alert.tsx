import React, { FC } from "react";
import { AlertAction } from "../../store/types";

import "./styled.scss";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="container">
      <div className="modal-bg" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-header">
          <p className="modal-message">{message}</p>
        </header>
        <footer>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Alert;
