import { CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <CircularProgress sx={{ width: "50px", display: "block", margin: "0 auto" }} size="md" />
  );
}