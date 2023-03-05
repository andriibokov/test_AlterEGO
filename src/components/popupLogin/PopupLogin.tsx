import { LoginForm } from "../Login/LoginForm";
import { useState } from "react";
import { Box, Button, Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";

export function PopupLogin() {
  const { t } = useTranslation("translation", { keyPrefix: "profile" });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        {t("btnLogIn")}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Button
          sx={{
            alignSelf: "end",
            width: "50px",
            padding: "5px",
            fontSize: "20px",
          }}
          onClick={handleClose}
        >
          Х
        </Button>

        <LoginForm />
      </Dialog>
    </Box>
  );
}
