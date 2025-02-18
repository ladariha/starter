import React from "react";
import "./styles.css";

export type Props = {
  name: string;
};

export const Demo: React.FC<Props> = ({ name }) => {
  return (
    <div className="moje-trida">
      <span className="name"> {name}</span>
    </div>
  );
};
