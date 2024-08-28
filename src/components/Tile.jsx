import { useEffect, useState } from "react"

export default function Tile({name,addKeyPressListener,removeKeyPressListener,combo}){
    const [active,setActive] = useState(false);

    const handleClick = ()=>{
        setActive((active)=>!active);
    }

    useEffect(()=>{
        addKeyPressListener(combo,()=>{
            handleClick();
        })

        return ()=>{
            removeKeyPressListener(combo);
        }
    },[addKeyPressListener,combo,removeKeyPressListener])

    return(
        <div onClick={handleClick} aria-label={`Tiles ${name}`} tabIndex={0}  className={`tiles ${active?'active':''}`}>{name}</div>
    )
}