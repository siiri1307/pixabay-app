export const getData = async (keyword) => {

  const API_KEY = "12930277-c7a9ad902c921de5595cfba75"
  const photosUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo;`
  const videosUrl = `https://pixabay.com/api/videos/?key=${API_KEY}&q=${encodeURIComponent(keyword)};`

  try {
    const photosResponse = await fetch(photosUrl)
    const photos = await photosResponse.json()
    const videosResponse = await fetch(videosUrl)
    const videos = await videosResponse.json()

    for(const video of videos.hits) {
      const response = await fetch(`https://i.vimeocdn.com/video/${video.picture_id}_640x360.jpg`)
      video.previewImage = response.url
    }

    return photos.hits.concat(videos.hits)
  }
  catch (error) {
    return error
  }
}