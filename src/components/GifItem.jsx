
export const GifItem = ({url, title}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <h4>{title}</h4>
    </div>
  )
}
