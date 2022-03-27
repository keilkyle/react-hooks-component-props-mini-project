import React from "react";
import Article from "./Article"

function ArticleList({ posts }) {
  console.log(posts);

  const newName = posts?.map((i)=> {
    return <Article key={i.id} title={i.title} date={i.date} preview={i.preview} />
  });
  
  return (
    <main>
    {newName}  
    </main>   
  );
}

export default ArticleList;
