export const Film = ({ videoSrc }) => {
  return (
      <video controls style={{ height: "100%", width: "100%", objectFit: "cover" }}>
        <source src={videoSrc} type="video/mp4" />
      </video>
  )
}