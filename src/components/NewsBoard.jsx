import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container my-5">
      <h2 className="text-center my-4 p-3 bg-primary text-white rounded">
        Latest
        <span className="badge bg-danger ms-2">News</span>
      </h2>

      <div className="row">
        {articles.map((news, index) => (
          <div key={index} className="col-md-4 mb-4 d-flex align-items-stretch">
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
