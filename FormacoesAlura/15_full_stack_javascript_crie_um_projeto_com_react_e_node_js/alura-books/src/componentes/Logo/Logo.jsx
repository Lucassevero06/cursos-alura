import '../../App.css';
import './Logo.css';
import logo from '../../imagens/logo.svg';
const Logo = () => {
  return (
    <div className='logo'>
    <img src={logo} alt='logo'></img>
    <p><strong>Alura Books</strong></p>
    </div>
  )
}

export default Logo