import { Link as RouterLink } from "react-router-dom";
import { Link, Box, Container } from "@mui/material"
import BtnLanguage from "../BtnLanguage/"
import { useTranslation } from "react-i18next";
import { PopupLogin } from "../popupLogin/PopupLogin";
import { useAppSelector } from "../../hooks/useTypedSelector";
import { User } from "../../types/user";

const Header = () => {  
  const { t } = useTranslation('translation',{ keyPrefix : "header"});
  const user: User = useAppSelector((state: any) => state.userReducer);
  
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
        maxWidth="lg"
      >
        <Box sx={{ flex: "1" }}>
          <Link component={RouterLink} sx={{ marginRight: "10px" }} to="/">
            {t("main")}
          </Link>
          <Link component={RouterLink} sx={{ marginRight: "10px" }} to="/news">
            {t("news")}
          </Link>
        </Box>

        {!user.isAuth && <PopupLogin />}

        {user.isAuth && (
          <Box sx={{ display: "flex" }}>
            <Link
              component={RouterLink}
              sx={{ marginRight: "10px" }}
              to="/profile"
            >
              {user.login}
            </Link>
          </Box>
        )}

        <Box>
          <BtnLanguage />
        </Box>
      </Container>
    </Box>
  );
}


export default Header;