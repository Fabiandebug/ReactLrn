import { useMealsListContext } from "../../providers/MealsProviders"

function Counter(){
    const {meals}=useMealsListContext();

    return (
        <div>
            <h3>Number of meals:{meals.length}</h3>
        </div>
        );
}

export default Counter