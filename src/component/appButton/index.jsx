import React from "react";

const AppButton = ({className}) => {
    const onOpenModal = () =>{
    
    }
  return (
    <button className={`btn  ${className}`} onClick={onOpenModal}>
      Add new task
    </button>
  );
};

export default AppButton;
