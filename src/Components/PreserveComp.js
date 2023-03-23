import { Portal } from "@mui/material";
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";

function DisplayComp(props, ref) {
  const _ref = useRef();
  useLayoutEffect(() => {
    const prevRef = ref;
    const domelem = _ref.current;
    domelem.appendChild(prevRef);
    return () => {
      domelem.removeChild(prevRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
  return <div {...props} ref={_ref} />;
}

export default forwardRef(DisplayComp);

export const PreservedComp = forwardRef(function PreservedComp(
  { children, style },
  ref
) {
  useEffect(() => {
    if (!!ref && !!style && typeof style === "object")
      ref.style = Object.entries(style)
        .map(([k, v]) => `${k}:${v}`)
        .join(";");
    return () => {
      console.log("remove");
      ref?.remove();
    };
  }, []);
  return <Portal container={ref}>{children}</Portal>;
});
