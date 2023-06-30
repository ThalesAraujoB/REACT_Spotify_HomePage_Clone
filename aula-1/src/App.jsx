import './App.css'
import NavBarComponent from './components/navbar/NavBarComponent'
import MiddlePartComponent from "./components/Middle/MiddlePartComponent";
import PremiumComponent from './components/premium/PremiumComponent'
import PlanComponent from './components/plan/PlanComponent'
import OptionsComponent from './components/options/OptionsComponent';


function App() {

  return (
    <div>
      <NavBarComponent></NavBarComponent>
      <MiddlePartComponent></MiddlePartComponent>
      <PremiumComponent></PremiumComponent>
      <PlanComponent></PlanComponent>
      <OptionsComponent></OptionsComponent>
    </div>
  )
}

export default App
