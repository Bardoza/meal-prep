import React from "react";

const Input = ({ onChange, value, label, id, ...inputProps }) => {
  return (
    <label htmlFor="name">
      {`${label}:`}
      <input
        id={id}
        type="text"
        onChange={e => onChange(e.target.value)}
        value={value}
        {...inputProps}
      />
    </label>
  );
};

export default Input;
