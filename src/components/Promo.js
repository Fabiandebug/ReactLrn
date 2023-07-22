import PromoHeading from "./PromoHeading";
import React, { useState } from "react";
 

const data={
    heading:"99% discount of all itms",
    callToAction:"Everything must go!"
}
function Promo(){

    const [word,setWord]=React.useState("Fuck off you little twat")

    function handleClick(){
        setWord("New state set")

    }
    return (<div>
        <PromoHeading 
        heading={data.heading}
        callToAction={data.callToAction}
        message={word}
         />
     <button onClick={handleClick}>Change state</button>
    </div>);
}

export default Promo