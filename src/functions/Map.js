function Map(){

        const data=[
            {
            id:'1',
            title:'Lemon Ice Cream',
            description:'Fucks your taste buds',
            img:'https://picsum.photos/200/300/?random',
            price:"$4.99"
        },
        {
            id:'2',
            title:'Coffee  Cream',
            description:'Just amazing',
            img:'https://picsum.photos/200/300/?random',
            price:"$4.99"
        },
        {
            id:'3',
            title:'Lemon Tea',
            description:'Amazes your taste buds',
            img:'https://picsum.photos/200/300/?random',
            price:"$4.99"
        }
     ]
        const topDeserts=data.map(dessert=>{
            return{
                content:`${dessert.title} - ${dessert.description}`,
                price:dessert.price
            }
        })

        console.log(topDeserts)
    return (
       
        <div>
            <h1>Map Function example</h1>

        </div>
    )

}

export default Map

