import './FeaturesComponent.css'

const FeaturesComponent = ({imagembase,titulobox,mensagembox}) => {
  return (
    <div className='box-featurs'>
      <img src={imagembase} className='imagem-base'/>
      <h2 className='titulo-box'>{titulobox}</h2>
      <p className='subtitle-box'>{mensagembox}</p>
    </div>
  )
}


export default FeaturesComponent


/*

const FeaturesComponent = ({ text, image }) => {
  return (
    <div>
      <h2>{text}</h2>
      <img src={image} alt="Imagem dinâmica" />
    </div>
  );
};

export default FeaturesComponent;
 */