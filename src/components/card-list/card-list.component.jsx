import Card from "../card/card.component";
import './card-list.styles.css'

const Cardlist =(props)=> {
    const { monsters } = props;
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