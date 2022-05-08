import Box from "@mui/material/Box"

export const Film = ({ videoSrc }) => {
  return (
      <Box component="video" controls sx={{ height: "100%", width: "100%", objectFit: "cover" }}>
        <source src={videoSrc} type="video/mp4" />
      </Box>
  )
}