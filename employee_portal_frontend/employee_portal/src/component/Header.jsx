import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigator = useNavigate();

  function home() {
    navigator('/employees')
  }

  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <a className='navbar-brand' onClick={home}>Employee Portal</a>
            </nav>
        </header>
    </div>
  )
}

export default Header