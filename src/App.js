import { useState, useEffect } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("")
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setMonsters(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(()=>{
   const newFilteredMonsters=monsters.filter((element) => {
    return element.name.toLowerCase().includes(searchField)
  });
   setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }
  
  return (
    <>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} className="monsters-search-box" placeholder="search monsters" />
      <Cardlist monsters={filteredMonsters} />
    </>
  )
}


export default App;
