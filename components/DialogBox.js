import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({
  dialogTitle,
  dialogContentText,
  isOpen,
  handleClose,
  children,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      fullScreen={fullScreen}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
      <DialogContent>
        {dialogContentText && (
          <DialogContentText id="alert-dialog-slide-description">
            {dialogContentText}
          </DialogContentText>
        )}
        {children}
      </DialogContent>
      <DialogActions sx={{ mb: { xs: "20px", md: "0px" } }}>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
