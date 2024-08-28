import { useEffect, useState } from "react";

export default function RegisteredCombo({ getAllRegisteredCombos }) {
  console.log(getAllRegisteredCombos());
  const [list,setList] = useState([]);

  useEffect(() => {
    const interval = setInterval(()=>{
        if(getAllRegisteredCombos().length>0){
            setList(getAllRegisteredCombos());
            clearInterval(interval);
        }
    })
    return () => {
        clearInterval(interval);
  
    };
  }, [getAllRegisteredCombos]);
  return (
    <div>
      <h1>Registered Combo</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
          Click tile or Press 
          {" " + item.keys.join(" ")+" "}toggle tile</li>
        ))}
      </ul>
    </div>
  );
}
