import { styled } from "@mui/system"
import { CardMedia } from "@mui/material"

export const StyledCardMedia = styled(CardMedia)({
  cursor: "pointer",
  filter: "grayscale(100%)",
  "&:hover": {
    filter: "grayscale(0%)"
  }
})