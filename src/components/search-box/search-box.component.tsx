import { ChangeEventHandler } from 'react';
import './search-box.styles.css'

type SearchBoxProps={
 className:string;
 placeholder?:string;
 onChangeHandler:ChangeEventHandler<HTMLInputElement>;  //---functional definition of onChange
}
//  func:(event:ChangeEvent<HTMLInputElement>) => void; //---same as onChangeHandler

const SearchBox =({className,placeholder,onChangeHandler}:SearchBoxProps)=> {
    return (
        <>
        <input type="search" className={`search-box ${className}`} placeholder={placeholder}  onChange={onChangeHandler}/>
        </>
    )
  }


export default  SearchBox;