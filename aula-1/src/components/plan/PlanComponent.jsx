import './PlanComponent.css'

const PlanComponent = () => {
  return (
    <div className='all-box'>
        <div className='plan-box-cotainer'>
        <h1 className='plan-title'>Escolha seu plano Premium</h1>
        <p className='plan-subtitle'>Ouça sem limites no seu celular, alto-falante e em outros dispositivos.</p>
    </div>
    <div className='cards-logo'>
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            alt="visa"
            className='visa'
            />
        <img 
            src="https://logosmarcas.net/wp-content/uploads/2020/09/MasterCard-Logo-1996-2016.png"
            alt="master"
            className='mastercard'
            
            />
        <img
            src="https://www.bh1.com.br/wp-content/uploads/2018/06/logomarca-american-express-amex.gif"
            alt="amex"
            className='amex'
            />
        <img
            src="https://neofeed.com.br/wp-content/uploads/2021/04/Elo-1-696x392.jpg"
            alt="elo"
            className='elo'
            />
            <img
                src="https://logodownload.org/wp-content/uploads/2015/03/hipercard-logo-1.png"
                alt="hiper"
                className='hiper'
                />
        </div>
    </div>
  )
}

export default PlanComponent