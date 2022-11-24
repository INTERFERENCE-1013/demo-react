import '../styles/project.scss'
import Icon from '@mdi/react'
import { mdiFolderStarMultiple, mdiVuejs, mdiLanguageHtml5 } from '@mdi/js'

export default function Home() {

  return (
    <div className='container'>
        <div className="d-flex justify-content-center align-items-center div-contact">
            <div className="row justify-content-center">
                <div className="col-12 mb-5 text-center">
                    <Icon path={mdiFolderStarMultiple}
                    title="User Profile"
                    size={8}
                    color="#D84727"/>
                    <h1 className="display-2 txt-color1 text-uppercase">Otros proyectos</h1>
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <div class="card">
                        <div className='d-flex justify-content-center'>
                            <Icon path={mdiLanguageHtml5}
                            title="User Profile"
                            size={5}
                            color="#EF7B45"/>
                        </div>
                        <div class="card-body text-center">
                            <p class="card-text">Web estática muy sencilla bootstrap con hosting en GitHub Pages</p>
                            <a href="https://interference-1013.github.io" class="btn btn-primary a-project">Ir al proyecto</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <div class="card">
                        <div className='d-flex justify-content-center'>
                            <Icon path={mdiVuejs}
                            title="User Profile"
                            size={5}
                            color="#EF7B45"/>
                        </div>
                        <div class="card-body text-center">
                            <p class="card-text">Portafolio hecho en VueJS (Versión 2) con módulos para interactuar con hosting en firebase</p>
                            <a href="https://portafolio-bcortes.web.app" class="btn btn-primary a-project">Ir al proyecto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}