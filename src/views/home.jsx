import '../styles/home.scss'
import Icon from '@mdi/react'
import { mdiBootstrap , mdiFileSign, mdiCog, mdiRoutes } from '@mdi/js'

export default function Home() {

  return (
    <div className='container'>
      <div className="d-flex justify-content-center align-items-center div-home">
        <div className="row text-center">
          <div className="col-12 mb-5">
            <Icon path={mdiCog}
            title="User Profile"
            size={8}
            horizontal
            vertical
            rotate={10}
            color="#D84727"
            spin={15}/>
            <h1 className="display-1 txt-color1 text-uppercase">Portafolio</h1>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <Icon path={mdiFileSign}
            title="User Profile"
            size={6}
            color="#EF7B45"/>
            <h5 className='txt-color1'>Vistas y componentes</h5>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <Icon path={mdiBootstrap}
            size={6}
            color='#EF7B45'/>
            <h5 className='txt-color1'>Diseño con Bootstrap 5 y SASS</h5>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <Icon path={mdiRoutes}
            title="User Profile"
            size={6}
            color='#EF7B45'/>
            <h5 className='txt-color1'>Uso de rutas con react-router-dom</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
