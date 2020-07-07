import React, { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

interface TradeScenarioDialogProps {
  classes?: Record<"paper", string>;
  id: string;
  keepMounted: boolean;
  open: boolean;
  onClose: () => void;
  title: string;
  okClicked: () => void;
}

const TradeScenarioDialog: FunctionComponent<TradeScenarioDialogProps> = (
  props
) => {
  const { onClose, okClicked, open, title, children, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    okClicked();
  };

  return (
    <>
      <Dialog
        open={open}
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>

        <DialogContent dividers>{children}</DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TradeScenarioDialog;
