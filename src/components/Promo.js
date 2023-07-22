import PromoHeading from "./PromoHeading";
 

const data={
    heading:"99% discount of all itms",
    callToAction:"Everything must go!"
}
function Promo(){
    return (<div>
        <PromoHeading 
        heading={data.heading}
        callToAction={data.callToAction}
         />
    </div>)
}

export default Promo