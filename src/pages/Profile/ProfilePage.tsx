import { Box, Button, Container } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";
import { LoggedOut } from "../../redux/user/action";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {  
  const { t } = useTranslation("translation", { keyPrefix: "profile" });
  
  let navigate = useNavigate();
  navigate("/");
  const dispatch = useAppDispatch();
  const redirectMain = () => {
    localStorage.removeItem("isAuth");
    dispatch(LoggedOut());
    navigate("/");
  }

  
  return (
    (localStorage.getItem("isAuth") === null) ?
      <Navigate to="/"/>
    :
      <Container sx={{ height: "100%" }} maxWidth="lg">
        <Box sx={{ display:"flex", flexDirection:"column", height: "100%" }}>
          {t("lorem")}
          <Button onClick={() => redirectMain()}>{t("btnLogOut")}</Button>
        </Box>
      </Container>
  )
};

export default ProfilePage;

