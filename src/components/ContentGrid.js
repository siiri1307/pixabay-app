import { Box, Grid, Card, CardContent} from "@mui/material"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { StyledCardMedia } from "./StyledCardMedia"

export const ContentGrid = ({ items, onItemClicked }) => {

  if(!items) return null

  const gridItems = items.map((item) => {
    return (
      <Grid item key={item.id} xs={8} sm={5} md={3} lg={2}>
        <Card sx={{ maxWidth: 350 }}>
          <StyledCardMedia component="img" height="194" src={item.webformatURL || item.previewImage} onClick={() => onItemClicked(item)} />
          <CardContent>
            <Box style={{ display: "flex", justifyContent: "space-evenly"}}>
              <Box><ThumbUpIcon color="action" sx={{mr: "2px"}} /><span style={{verticalAlign: "5px"}}>{item.likes}</span></Box>
              <Box><VisibilityIcon color="action" sx={{mr: "2px"}} /><span style={{verticalAlign: "5px"}}>{item.views}</span></Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      )
    }
  )

  return (
    <Grid         
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      spacing={3}
    >
      {gridItems}
    </Grid> 
  )
}