import './NavBarComponent.css'


const NavBarComponent = () => {
  
  return (
    <div className='navbar'>
      <img src="./data/logobg.png" alt="" />
      <div className='links'>
      <a href="">Premium</a>
      <a href="">Suporte</a>
      <a href="">Baixar</a>
      <p>|</p>
      <a href="">Inscrever-se</a>
      <a href="">Entrar</a>
      </div>
    </div>
  )
}

export default NavBarComponent