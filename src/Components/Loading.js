import React from "react";
import image from "./image.gif";

export default function Loading() {
  return (
    <div>
      {/* //Loading GIF */}
      <div className="text-center my-5">
        <img src={image} style={{ width: "200px" }} alt="Loading" />
      </div>
    </div>
  );
}
