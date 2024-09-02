import React from "react";

const ProButton = ({ className, onclick, label, icon }) => {
  return (
    <button
      onclick={onclick}
      className={`${className}  ${icon ? 'flex items-center justify-center gap-2' :''} bg-primaryButton  text-sm p-1 px-2 font-mono rounded-full`}
    >
      {label} {icon}
    </button>
  );
};

export default ProButton;
