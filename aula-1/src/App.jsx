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
      <div className="classes-box">
      <OptionsComponent
        botao1='1 mês grátis ao assinar'
        botao2='Pagamento único disponível'
        plano='Individual'
        valor='R$ 19,90/mês após o período da oferta'
        conta='1 conta'
        option1='Ouça músicas sem anúncios'
        option2='Ouça em qualquer lugar — até quando estiver offline'
        option3='Ouça músicas na ordem que quiser'
        option4='Faça um plano pré-pago ou uma assinatura'
      ></OptionsComponent>
       <OptionsComponent
        botao1='1 mês grátis ao assinar'
        botao2='Pagamento único disponível'
        plano='Individual'
        valor='R$ 19,90/mês após o período da oferta'
        conta='1 conta'
        option1='Ouça músicas sem anúncios'
        option2='Ouça em qualquer lugar — até quando estiver offline'
        option3='Ouça músicas na ordem que quiser'
        option4='Faça um plano pré-pago ou uma assinatura'
      ></OptionsComponent>
      <OptionsComponent
        botao1='1 mês grátis ao assinar'
        botao2='Pagamento único disponível'
        plano='Individual'
        valor='R$ 19,90/mês após o período da oferta'
        conta='1 conta'
        option1='Ouça músicas sem anúncios'
        option2='Ouça em qualquer lugar — até quando estiver offline'
        option3='Ouça músicas na ordem que quiser'
        option4='Faça um plano pré-pago ou uma assinatura'
      ></OptionsComponent>
       <OptionsComponent
        botao1='1 mês grátis ao assinar'
        botao2='Pagamento único disponível'
        plano='Individual'
        valor='R$ 19,90/mês após o período da oferta'
        conta='1 conta'
        option1='Ouça músicas sem anúncios'
        option2='Ouça em qualquer lugar — até quando estiver offline'
        option3='Ouça músicas na ordem que quiser'
        option4='Faça um plano pré-pago ou uma assinatura'
      ></OptionsComponent>
      
      </div>
    </div>
  )
}

export default App
