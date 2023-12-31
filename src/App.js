import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import Btn from './components/Btn';
// import ModeToggler from './components/ModeToggler';
// import Promo from './components/Promo';
// import MealsProviders from './providers/MealsProviders';
// import Counter from './components/meals/Counter';
// import MealsList from './components/meals/MealsList';
import {Routes,Route} from 'react-router-dom'
import Ride from './components/useReducer/Ride';
import Map from './functions/Map';
import Form from './forms/Form';
import Feedback from './forms/Form2';


function App() {
  return (
    <div>
      {/* <Header name="Anna" color = "purple" />
      <Main greet="Howdy"/>
      <Sidebar greet="Hi"/>
      <Btn/> */}
      {/* <ModeToggler/> */}
      {/* <Promo/> */}

     <Routes>
        <Route path="/ride" element={<Ride/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/feedback" element={<Feedback/>}/>


     </Routes>

    </div>
  )

}

export default App;
