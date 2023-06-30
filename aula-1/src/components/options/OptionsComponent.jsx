import './OptionsComponent.css'

const OptionsComponent = () => {
  return (
    <div className='options-box'>
        <button className="first-btn">1 mês gratis ao assinar</button>
        <button className="sub-button">Pagamento único disponível</button>
        <h1 className="title-head">Individual</h1>
        <p className="price">R$ 19,90/mês após o período da oferta</p>
        <p className="conta">1 conta</p>
        <hr  className='line'/>
    </div>
  )
}

export default OptionsComponent