import React,{useEffect, useState} from 'react';
import Repo from './repo'

const GithubAPI = () => {
  
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
    getRepos();
  }, [query]);


  const getRepos = async () => {
    let url
    if (query !== "") { 
      url = `https://api.github.com/search/repositories?q=${query}+in:name+user:hotblack86`
    } else { 
      url = "https://api.github.com/users/hotblack86/repos?per_page=100";
    }

    const response = await fetch(url);
    const data = await response.json();
    (query !== "") ? setRepos(data.items) : setRepos(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="githubAPI">

      <form onSubmit={getSearch} className="search-form">
       <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
       />
       <button className="title" type="submit">
         Search
       </button>
      </form>

      <p className="title">Showing {repos.length} results for "{query}"</p>

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