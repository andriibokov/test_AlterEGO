import { Box, Button } from "@mui/material"
import i18n from "../../i18n";

const BtnLanguage = () => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  return (
    <Box>
      <Button onClick={() => changeLanguage("ua")}>UA</Button>
      <Button onClick={() => changeLanguage("en")}>EN</Button>
    </Box>
  );
};

export default BtnLanguage;