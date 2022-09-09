import Card from "../card/card.component";
import './card-list.styles.css'
import { Monsters } from "../../App";

type CardlistProps={
  monsters:Monsters[];
}

const Cardlist =({monsters}:CardlistProps)=> {
    return (
      <>
        <div className="container card-list">
          {monsters.map((element) => {
            return <Card {...element} key={element.id}/>
          })}
        </div>
      </>
    )
  }


export default Cardlist;