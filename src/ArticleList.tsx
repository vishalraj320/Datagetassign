import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Article {
  id: number;
  title: string;
  summary: string;
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
      <li className="cards_item">
      <div className="card">
      <div className="card_content">
        {articles.map((article) => (
          <div className="listContainer" key={article.id}>
            <a href={`/article/${article.id}`}>{article.title}</a>
            <p>{article.summary}</p>
          </div>
        ))}
        </div>
        </div>
        </li>
      </ul>
      </div>

  );
};

export default ArticleList;