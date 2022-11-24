import '../styles/footer.scss'

export default function Footer() {

  return (
    <footer className="py-3 color1 navbar-dark">
      {/* <div className='d-flex justify-content-center mb-2'>
        <a className="btn btn-footer" href='https://www.linkedin.com/in/bastiancortesoberg/'>Linkedin</a>
      </div> */}
      <p className="text-center text-white mb-2">Proyecto ReactJS - { new Date().getFullYear() }</p>
    </footer>
  );
}