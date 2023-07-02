import './OptionsComponent.css'

const OptionsComponent = ({botao1,botao2,plano,valor,conta,option1,option2,option3,option4,option5}) => {
  return (
    <div className='options-box'>
        <button className="first-btn">{botao1}</button>
        <button className="sub-button">{botao2}</button>
        <h1 className="title-head">{plano}</h1>
        <p className="price">{valor}</p>
        <p className="conta">{conta}</p>
        <hr  className='line'/>
        <ul className='list'>
        <li>&#10003; {option1}</li>
        <li>&#10003; {option2}</li>
        <li>&#10003; {option3}</li>
        <li>&#10003; {option4}</li>
        </ul>
        <button className='start-btn'>comece agora </button>
        <p className="paragrath"><u>Sujeito a Termos e Condições.</u>O mês grátis não está disponível para usuários que já usaram o Premium.</p>
    </div>
  )
}

export default OptionsComponent