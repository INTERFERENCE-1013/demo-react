// import { useRouteError } from "react-router-dom";
import '../styles/notFound.scss'
import Icon from '@mdi/react'
import { mdiAlertCircle } from '@mdi/js'

export default function NotFound () {
    // const error = useRouteError();
    return(
        <div className='container'>
            <div className="d-flex justify-content-center align-items-center div-notFound">
                <div className="row text-center">
                    <div className="col-12 mb-5">
                        <Icon path={mdiAlertCircle}
                        title="User Profile"
                        size={8}
                        color="red"/>
                        <h1 className="display-1 txt-color1">¡Ups! Página no encontrada</h1>
                    </div>
                    <div className="col-12 mb-5">
                        <a className="btn btn-notFound btn-lg" href='/'>Volver a Inicio</a>
                    </div>
                </div>
            </div>
        </div>
    )
};