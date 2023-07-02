import './App.css'
import NavBarComponent from './components/navbar/NavBarComponent'
import MiddlePartComponent from "./components/Middle/MiddlePartComponent";
import PremiumComponent from './components/premium/PremiumComponent'
import PlanComponent from './components/plan/PlanComponent'
import OptionsComponent from './components/options/OptionsComponent';
import FooterComponent from './components/footer/FooterComponent'


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
      ></OptionsComponent>
       <OptionsComponent
        botao1='1 mês grátis ao assinar'
        botao2='Pagamento único disponível'
        plano='Duo'
        valor='R$ 24,90/mês após o período da oferta'
        conta='2 contas'
        option1='2 contas Premium para pessoas que moram juntas'
        option2='Música sem anúncios, no modo offline e na ordem que você quiser'
        option3='Ouça músicas na ordem que quiser'
      ></OptionsComponent>
      <OptionsComponent
        botao1='1 mês grátis ao assinar'
        botao2='Pagamento único disponível'
        plano='Família'
        valor='R$ 34,90/mês após o período da oferta'
        conta='Até 6 contas'
        option1='6 contas Premium para familiares que moram no mesmo endereço'
        option2='Bloqueie músicas com conteúdo explícito'
        option3='Música sem anúncios, no modo offline e na ordem que você quiser'
      ></OptionsComponent>
       <OptionsComponent
        botao1='1 mês grátis ao assinar'
        botao2='Pagamento único disponível'
        plano='Universitário'
        valor='R$ 9,90/mês após o período da oferta'
        conta='1 conta'
        option1='Desconto especial para estudantes universitários elegíveis'
        option2='Ouça músicas sem anúncios'
        option3='Ouça em qualquer lugar — até quando estiver offline'
      ></OptionsComponent>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
