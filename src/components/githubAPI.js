import React,{useEffect, useState} from 'react';
import Repo from './repo'

const GithubAPI = () => {
  
  const [repos, setRepos] = useState([]);
  // const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("");

  useEffect( () => {
    getRepos();
  });


  const getRepos = async () => {
    // let url
    // (query !== "") ? url = `&beer_name=${query}` : url = "";
    const response = await fetch(`https://api.github.com/users/hotblack86/repos`);
    const data = await response.json();
    console.log(data)
    setRepos(data);
  }

  return (
    <div className="githubAPI">
      {repos.map(repo => (
       <Repo 
       key={repo.id}
       url={repo.html_url}
       title={repo.name}
       language={repo.language}
       created_at={repo.created_at}
       />
     ))}
    </div>
  )
}

export default GithubAPI;