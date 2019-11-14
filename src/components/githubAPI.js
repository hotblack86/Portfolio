import React,{useEffect, useState} from 'react';
import Repo from './repo'
import SearchForm from './searchForm';

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
      url = `https://api.github.com/search/repositories?q=${query}+in:name+user:hotblack86&sort=updated`
    } else { 
      url = "https://api.github.com/users/hotblack86/repos?per_page=100&sort=updated";
    }

    const response = await fetch(url);
    const data = await response.json();
    (query !== "") ? setRepos(data.items) : setRepos(data);
    console.log(data)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  // const sortByDate = e => {
  //   e.preventDefault();
  //   const sortedByDate = repos.slice().sort((a, b) => {
  //     return a.created_at - b.created_at;
  //   });
  //   setRepos(sortedByDate);
  //   console.log(repos)
  // }

  return (
    <div className="githubAPI">
      <SearchForm 
        search={search}
        getSearch={getSearch}
        updateSearch={updateSearch}
      />

      <p className="title">Showing {repos.length} results for "{query}"  ~  Ordered by most recently updated</p>

      {repos.map(repo => (
       <Repo 
       key={repo.id}
       url={repo.html_url}
       title={repo.name}
       description={repo.description}
       language={repo.language}
       updated_at={repo.updated_at}
       />
     ))}
    </div>
  )
}

export default GithubAPI;