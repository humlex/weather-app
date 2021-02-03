import React, { FC } from "react";
import { AlertAction } from "../../store/types";

import CloseIcon from "@material-ui/icons/Close";

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
          <div className="close-btn">
            <CloseIcon onClick={onClose} />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Alert;
