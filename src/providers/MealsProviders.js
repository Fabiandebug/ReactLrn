import React from "react"
const MealsContext=React.createContext();

const todaysMeals=["Baked Beans","Beaked Sweet Potatoes","Baked Potatoes"]


function MealsProviders({children}){
    const [meals,setMealsList]=React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )

}

export const useMealsListContext=()=> React.useContext(MealsContext);

export default MealsProviders