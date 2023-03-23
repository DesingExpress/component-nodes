import { cloneElement } from "react";

function OverrideStyle({ children, ...props }) {
  return cloneElement(children, props);
}

export default OverrideStyle;
