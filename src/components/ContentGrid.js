import { Box, Grid, Card, CardContent} from "@mui/material"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { StyledCardMedia } from "components/StyledCardMedia"

export const ContentGrid = ({ items, onItemClicked }) => {

  if(!items) return null

  const gridItems = items.map((item) => {
    return (
      <Grid item key={item.id} xs={8} sm={5} md={3} lg={2}>
        <Card sx={{ maxWidth: 350 }}>
          <StyledCardMedia component="img" src={item.webformatURL || item.previewImage} onClick={() => onItemClicked(item)} />
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-evenly"}}>
              <Box>
                <ThumbUpIcon color="action" sx={{mr: "2px"}} />
                <Box component="span" sx={{verticalAlign: "5px"}}>
                  {item.likes}
                </Box>
              </Box>
              <Box>
                <VisibilityIcon color="action" sx={{mr: "2px"}} />
                <Box component="span" sx={{verticalAlign: "5px"}}>
                  {item.views}
                </Box>
              </Box>
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