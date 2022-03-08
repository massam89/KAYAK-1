export default function Tile({value}) {

    return (
        <div className="tile">   
            <div>
                <img src={`http://kayak.com${value.logoURL}`} alt={`${value.name} logo`} />
                <h2>{value.name}</h2>
            </div>  
        </div>
    )
}