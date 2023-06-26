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
      imgname='img1'
      imagebase= 'aula-1\data\fones.png'
      titulobox='Modo offline.'
      mensagembox='Ouça música onde estiver.'
      />
      <FeaturesComponent 
      imgname='img2'
      imagebase='/data/music-bg.png'
      titulobox='Ouça músicas sem anúncios.'
      mensagembox='Curta música sem anúncios.'
    />
    <FeaturesComponent
      imgname='img3' 
      imagebase='/data/music-bg.png'
      titulobox='Ouça na ordem que quiser.'
      mensagembox='Qualquer música em qualquer ordem.'
    />
    <FeaturesComponent 
      imgname='img4'
      imagebase='/data/music-bg.png'
      titulobox='Qualidade de som superior'
      mensagembox='Sinta o som.'
    />
      </div>
    </div>
  )
}

export default PremiumComponent