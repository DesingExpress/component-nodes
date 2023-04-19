import { Box } from "@mui/material";

function BoxComp({ children, useProps, ...props }) {
  const comp = useProps();
  return <Box {...props}>{comp ?? children}</Box>;
}

export default BoxComp;
