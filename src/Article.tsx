import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  axios  from 'axios'

interface Post {
  id: number;
  title: string;
  summary: string;
  fullText: string;
}

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Post | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
      <li className="cards_item">
      <div className="card">
      <div className="card_content">
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
      <p>{article.fullText}</p>
      </div>
      </div>
      </li>
      </ul>
    </div>
  );
};

export default Article;