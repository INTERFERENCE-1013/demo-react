// import {NavLink} from 'react-router-dom';
import '../styles/navbar.scss'

export default function Navbar() {
  return (
    // <NavLink to="/"><a className="nav-link active" aria-current="page">Home</a></NavLink>
    <nav className="navbar navbar-expand-lg navbar-dark color1">
      <div className="container">
        <a className="navbar-brand" href="/"><img height={'30px'} src={require('../img/react-icon.png')} alt="logo-react"/><span className='home-title'>React home</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/project">Proyectos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}