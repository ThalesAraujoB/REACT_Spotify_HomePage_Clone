import './MiddlePartComponent.css'

const MiddlePartComponent = () => {
  return (
    <div className='container'>
        <h1 className='titulo'>Curta o Premium grátis por 2 meses</h1>
        <h3>Depois, pague somente R$ 19,90/mês. Cancele quando quiser.</h3>
        <button className='btn1'>COMECE AGORA</button>
        <button className='btn2'>VER PLANOS</button>
        <p className='termos'><u>Sujeito a Termos e Condições</u>. Os 2 meses grátis não estão disponíveis para usuários que já experimentaram o Premium.</p>
    </div>
  )
}

export default MiddlePartComponent