
import { CircularProgress, Box } from "@mui/material"

export const withLoading = (Component) => {
  const WithLoadingComponent = ({ isLoading, ...props }) => {
    if(!isLoading) return <Component {...props} />
    return <Box sx={{display: "flex", justifyContent: "center"}}><CircularProgress color="inherit" /></Box>
  }
  return WithLoadingComponent
}