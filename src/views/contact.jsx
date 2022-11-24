import '../styles/contact.scss'
import Icon from '@mdi/react'
import { mdiCardAccountMail, mdiWhatsapp, mdiLinkedin, mdiGmail } from '@mdi/js'

export default function Home() {

  return (
    <div className='container'>
      <div className="d-flex justify-content-center align-items-center div-contact">
        <div className="row">
          <div className="col-12 mb-5 text-center">
            <Icon path={mdiCardAccountMail}
            title="User Profile"
            size={8}
            color="#D84727"/>
          </div>
          <div className="col-12 mb-5">
            <ul class="list-group">
              <a class="list-group-item d-flex align-items-center justify-content-around a-contact" href='https://www.linkedin.com/in/bastiancortesoberg/'>
                <Icon path={mdiLinkedin}
                title="User Profile"
                size={2}
                color="#EF7B45"/>
                <span>LinkedIn</span>
              </a>
              <a class="list-group-item d-flex align-items-center justify-content-around a-contact" href='https://web.whatsapp.com/send?phone=+56977639062'>
                <Icon path={mdiWhatsapp}
                title="User Profile"
                size={2}
                color="#EF7B45"/>
                <span>WhatsApp</span>
              </a>
              <a class="list-group-item d-flex align-items-center justify-content-around a-contact" 
              href='mailto:bastianoberg39@gmail.com?subject=Portafolio%20programacion&body=Quisiera%20contactarte%20para%20conversar'>
                <Icon path={mdiGmail}
                title="User Profile"
                size={2}
                color="#EF7B45"/>
                <span>Gmail</span>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}