import './PremiumComponent.css'
import FeaturesComponent from './features/FeaturesComponent'

const PremiumComponent = () => {


  return (
    <div className='big-box'>
      <div className='container-box'>
      <h1 className='title'>Por que ser Premium?</h1>
      </div>
    <div className='features-box'>
    <FeaturesComponent 
    imagebase='/data/music-bg.png'
    titulobox='exemplo'
    mensagembox='exemplos dinamico'

    />
      </div>
    </div>
  )
}

export default PremiumComponent