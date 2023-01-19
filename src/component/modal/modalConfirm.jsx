import React from "react";
import Modal from "../modal";

const ModalConfirm = ({ onConfirm, onClose, text }) => {
  const confirmAndCloseModal = () => {
    onConfirm();
    onClose();
  };
  return (
    <Modal onClose={onClose} title="Are you sure?">
      <p className="text-slate-500">{text}</p>
      <div className="ml-auto mt-7">
        <button onClick={onClose}>Cancel</button>
        <button onClick={confirmAndCloseModal} className="ml-6 btn">
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
