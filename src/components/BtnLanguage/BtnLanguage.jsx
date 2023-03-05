import i18n from "../../i18n";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const BtnLanguage = () => {
  const [lang, setLang] = useState("ua");
  const handleChange = (event, nextView) => {
    if (!nextView) return
    setLang(nextView);
    i18n.changeLanguage(nextView);
  };

  return (
    <ToggleButtonGroup
      sx={{ marginLeft: "10px", flexDirection: "row" }}
      exclusive
      value={lang}
      onChange={handleChange}
    >
      <ToggleButton
        value="ua"
        aria-label="ua"
      >
        UA
      </ToggleButton>
      <ToggleButton
        value="en"
        aria-label="en"
      >
        EN
      </ToggleButton>
    </ToggleButtonGroup>
  );
};