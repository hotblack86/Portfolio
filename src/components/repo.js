import React from 'react';

const Repo = ({title, language, created_at, url}) => {

  

  return(
    <div >
      <a 
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          color: `green`,
          textDecoration: 'none',
        }}
        >{title}</a>
      <p>Language: {language}</p>
      <p>Created on: {created_at}</p>
      ~~~
    </div>
  )
}

export default Repo;