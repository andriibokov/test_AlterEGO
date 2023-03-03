import { Link as RouterLink } from "react-router-dom";
import { Link, Box, Container } from "@mui/material"
import BtnLanguage from "../BtnLanguage/"
import { useTranslation } from "react-i18next";

const Header = () => {  
  const { t } = useTranslation('translation',{ keyPrefix : "header"});
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
        <Box>
          <Link component={RouterLink} sx={{ marginRight: "10px" }} to="/">
            {t("main")}
          </Link>
          <Link component={RouterLink} sx={{ marginRight: "10px" }} to="/news">
            {t("news")}
          </Link>
          <Link
            component={RouterLink}
            sx={{ marginRight: "10px" }}
            to="/profile"
          >
            Профіль
          </Link>
        </Box>
        <Box>
          <BtnLanguage />
        </Box>
      </Container>
    </Box>
  );
}


export default Header;