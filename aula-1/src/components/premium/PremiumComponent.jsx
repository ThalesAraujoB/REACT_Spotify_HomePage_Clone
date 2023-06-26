import './PremiumComponent.css'
import FeaturesComponent from './features/FeaturesComponent'
import imagem1 from '../../../data/fones.png'

const PremiumComponent = () => {


  return (
    <div className='big-box'>
      <div className='container-box'>
      <h1 className='title'>Por que ser Premium?</h1>
      </div>
    <div className='features-box'>
      <FeaturesComponent 
      imgname='img1'
      imagebase= {imagem1}
      titulobox='Modo offline.'
      mensagembox='Ouça música onde estiver.'
      />
      <FeaturesComponent 
      imgname='img2'
      imagebase={imagem1}
      titulobox='Ouça músicas sem anúncios.'
      mensagembox='Curta música sem anúncios.'
    />
    <FeaturesComponent
      imgname='img3' 
      imagebase={imagem1}
      titulobox='Ouça na ordem que quiser.'
      mensagembox='Qualquer música em qualquer ordem.'
    />
    <FeaturesComponent 
      imgname='img4'
      imagebase={imagem1}
      titulobox='Qualidade de som superior'
      mensagembox='Sinta o som.'
    />
      </div>
    </div>
  )
}

export default PremiumComponent