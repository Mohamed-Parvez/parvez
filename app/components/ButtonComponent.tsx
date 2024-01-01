import React from "react";

interface Props {
  label: string;
  classname: string;
}

const ButtonComponent = ({ label, classname }: Props) => {
  return (
    <div>
      <button type="button" className={classname}>
        {label}
      </button>
    </div>
  );
};

export default ButtonComponent;
