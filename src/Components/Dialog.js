import { Dialog } from "@mui/material";

function DialogComp({ children, useProps, defaultOpen, ...props }) {
  const [open, comp] = useProps(defaultOpen, children);
  return (
    <Dialog open={open} {...props}>
      {comp ?? children}
    </Dialog>
  );
}

export default DialogComp;
