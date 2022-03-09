import { useState } from 'react'

export default function Tile({value}) {
const [show, setShow] = useState(false)


    function getURL(string) {    
        let url = string.replace(/https:\/\//g, "")
        url = url.replace(/www./g, "")
        url = url.replace(/http:\/\//g, "")
        url = 'https://' + url
        url = new URL(url)
        return url.hostname    
    }
    return (
        <div className="tile" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >   
            <div>
                <img src={`http://kayak.com${value.logoURL}`} alt={`${value.name} logo`} />
                <div>
                    <h2>{value.name}</h2>
                    {show && <h3>{value.alliance}</h3>}
                    {show && <h4>{value.phone}</h4>}
                    {show && <h5>{getURL(value.site)}</h5>}
                </div>
                
            </div>  
        </div>
    )
}