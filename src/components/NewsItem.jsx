import image from "../assets/news.jpg"
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100">
      {src && <img src={src ? src:image} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={url} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
