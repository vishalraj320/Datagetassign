import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./ArticleList.tsx";
import Article from "./Article.tsx";
import ErrorBoundary from './ErrorBoundary.tsx';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={ <ArticleList />}/>
          
        <Route path="/article/:id" element={   <Article />}/>
         
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;