import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { LoggedIn, LoggedOut } from "../../redux/user/action";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { User } from "../../types/user";
import users from "../../users.json";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const { t } = useTranslation("translation", { keyPrefix: "profile" });
  const dispatch = useAppDispatch();
  const user: User = useAppSelector((state: any) => state.userReducer);


  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handlSubmit = (e: any): void => {
    e.preventDefault();

    const isL = users.filter(
      (user: any) => user.login === login && user.password === password
    );
    if (!!isL.length) {
      localStorage.setItem("isAuth", `${login}`);
      dispatch(LoggedIn(login, true));
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography component="h1" variant="h5">
          {t("titleForm")}
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={() => handlSubmit(event)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="login"
                label={t("loginTitle")}
                name="login"
                autoComplete="login"
                onChange={(event) => setLogin(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label={t("passwordTitle")}
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>
          {isError && <Box sx={{marginTop:"10px"}}>{t("errorText")}</Box>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("btnLogIn")}
          </Button>
        </Box>
      </Box>
    </>
  );
};