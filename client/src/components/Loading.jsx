import React from "react";

const Loading = ({ height }) => {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ height: height }}
    >
      <div className="w-40 h-40 border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
