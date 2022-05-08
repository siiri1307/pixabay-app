import { useEffect, useState } from "react"
import { ContentGrid } from "components/ContentGrid"
import Box from "@mui/material/Box"
import { Modal, TextField } from "@mui/material"
import { Photo } from "components/Photo"
import { ModalBox } from "components/ModalBox"
import { CONTENT_TYPE } from "constants/Constants"
import { Film } from "components/Film"
import { getData } from "services/PixabayService"

function App() {

  const [items, setItems] = useState([])
  const [keyword, setKeyword] = useState(() => {
    const storedKeyword = localStorage.getItem("keyword")
    return storedKeyword || ""
  })
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const [error, setError] = useState(false)

  const handleOpenModal = (item) => {
    setSelectedItem(item)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setSelectedItem({})
    setShowModal(false)
  }

  useEffect(() => {
    localStorage.setItem("keyword", keyword)

    const timeoutId = setTimeout(() => {
      console.log(`Calling the API with keyword ${keyword}`)

      getData(keyword)
        .then(data => {
          setItems(data)
          setError(false)
        })
        .catch(error => {
          console.log(`Error: ${error}`)
          setItems([])
          setError(true)
        })
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [keyword])

  return (
    <Box className="App" sx={{ flexGrow: 1, ml: 2, mr: 2}}>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="search"
          label="Image and/or video keyword(s)"
          onChange={(e) => setKeyword(e.target.value)}
          sx={{ mt: 3, mb: 3 }}
          value={keyword}
          variant="standard">
        </TextField>
      </Box>
      {error && <Box style={{ display: "flex", justifyContent: "center" }}>Something went wrong</Box>}
      <ContentGrid items={items} onItemClicked={handleOpenModal} />
      <Modal 
        open={showModal}
        onClose={handleCloseModal}
      >
        <ModalBox>
          {[CONTENT_TYPE.FILM, CONTENT_TYPE.ANIMATION].includes(selectedItem.type) && <Film videoSrc={selectedItem.videos.large.url} />}
          {[CONTENT_TYPE.PHOTO, CONTENT_TYPE.ILLUSTRATION, CONTENT_TYPE.AI, CONTENT_TYPE.SVG].includes(selectedItem.type) && <Photo src={selectedItem.largeImageURL} alt={selectedItem.tags} />}
        </ModalBox>
      </Modal>
    </Box>
  );
}

export default App;
