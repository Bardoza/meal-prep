import React from "react";

const Input = ({ onChange, value, label, id, error, ...inputProps }) => {
  return (
    <div>
      <label htmlFor="name">
        {`${label}:`}
        <input
          id={id}
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={value}
          {...inputProps}
        />
      </label>
      <div>{error}</div>
    </div>
  );
};

export default Input;
