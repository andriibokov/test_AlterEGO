import { Box, Container } from "@mui/material"
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation("translation", { keyPrefix: "main" });

  return (
    <Container sx={{ height: "100%" }} maxWidth="lg">
      <Box sx={{ height: "100%" }}>{t("lorem")}</Box>
    </Container>
  );
}

export default Main;

