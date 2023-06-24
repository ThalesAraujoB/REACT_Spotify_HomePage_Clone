import './App.css'
import NavBarComponent from './components/navbar/NavBarComponent'
import MiddlePartComponent from "./components/Middle/MiddlePartComponent";
import PremiumComponent from './components/premium/PremiumComponent'


function App() {

  return (
    <div>
      <NavBarComponent></NavBarComponent>
      <MiddlePartComponent></MiddlePartComponent>
      <PremiumComponent></PremiumComponent>
    </div>
  )
}

export default App
