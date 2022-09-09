import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from "./utils/data.utils"

export type Monsters={
  id:string;
  name:string;
  email:string;
}

const App = () => {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [searchField, setSearchField] = useState("")
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  
  useEffect(() => {
    const fetchData = async () => {
      const user=await getData<Monsters[]>("https://jsonplaceholder.typicode.com/users") 
      setMonsters(user)
    }
    fetchData()
  }, [])

  useEffect(()=>{
   const newFilteredMonsters=monsters.filter((element) => {
    return element.name.toLowerCase().includes(searchField)
  });
   setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField])

  const onSearchChange = (e:ChangeEvent<HTMLInputElement>):void => {
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
