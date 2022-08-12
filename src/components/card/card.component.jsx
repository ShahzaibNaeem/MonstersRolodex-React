import './card.styles.css';

const Card =({ id, name, email } )=> {
        return (
            <>
                <div className="card-container">
                    <img src={`https://robohash.org/${id}/set==set2?180X180`} alt={`monsters ${name}`} />
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
            </>
        )
    }

export default Card;
