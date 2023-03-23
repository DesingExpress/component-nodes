import { Paper } from "@mui/material";
import { useMemo } from "react";

function FlotBox({ position = "right", children, full }) {
  const [_position, margin] = useMemo(() => {
    const pos = position.toLowerCase();
    const mgn = ["top", "bottom"].indexOf(pos) > -1 ? "0 auto" : "auto 0";
    return [pos, mgn];
  }, [position]);
  return <Paper style={{ [_position]: 0, margin }}>{children}</Paper>;
}

export default FlotBox;
