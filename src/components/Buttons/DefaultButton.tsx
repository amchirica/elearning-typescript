import React from "react";

export interface Button {
  name: string;
  action?: any;
  loading: boolean;
}

function DefaultButton(props: Button) {
  const { name, action, loading } = props;
  return (
    <button
      className="bg-black p-2 text-white text-sm rounded-md flex items-center justify-center min-w-[7rem]"
      onClick={(e) => {
        typeof action === "function" ? action(e) : null;
      }}
    >
      {loading ? <span className="loader" /> : name}
    </button>
  );
}

export default DefaultButton;
