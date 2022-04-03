import React,{useState} from 'react';

function Folder({explorer}) {
    const [expand, setExpand] = useState(false)
    return(
        <div>
            <span 
            onClick={() => 
            setExpand(!expand)}>
                {explorer.name}
                <br />
            </span>
            <div style={{display: expand? "block": "none", paddingLeft:"10px"}}>
                {explorer.items 
                ? explorer.items.map(item => {
                    return <Folder explorer={item}/>})
                : ''
                }
            </div> 
        </div>
    )
}

export default Folder; 