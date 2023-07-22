function PromoHeading(props){

return(
    <div>
        <h1>{props.heading}</h1>
        <h2>{props.callToAction}</h2>
        <h3>{props.message}</h3>
    </div>
)

}
export default PromoHeading