import React from 'react';
import logo from '../images/GitHub32px.png';

const Repo = ({title, description, language, updated_at, url}) => {

  return(
    <div>
      <h3>{title}</h3><a
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
        ><img src={logo} alt="" style={{
          display: 'flex'
        }}/></a>
      <p>{description}</p>
      <p>Language: {language}</p>
      <p>Last updated: {updated_at}</p>
      ~~~
    </div>
  )
}

export default Repo;