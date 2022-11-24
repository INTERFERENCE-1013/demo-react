import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}