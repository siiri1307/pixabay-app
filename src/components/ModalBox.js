import { styled } from "@mui/system"
import Box from "@mui/material/Box"

export const ModalBox = styled(Box)({
  width: "90%", 
  height: "90%", 
  position: "absolute", 
  top: "50%", left: "50%", 
  transform: "translate(-50%, -50%)"
})