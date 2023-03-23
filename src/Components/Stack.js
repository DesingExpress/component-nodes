import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

function StackComponent({
  defaultDirection,
  defaultSpacing,
  setProps,
  children,
  ..._props
}) {
  const [props, _setProps] = useState({
    direction: defaultDirection,
    spacing: defaultSpacing,
  });

  useEffect(() => {
    setProps((val) => _setProps((v) => ({ ...v, ...val })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack
      direction={props.direction}
      spacing={props.spacing}
      sx={{ width: "100%", height: "100%" }}
      {..._props}
    >
      {children}
    </Stack>
  );
}

export default StackComponent;
