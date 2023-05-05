import React from 'react';
import { NavLink , Outlet} from 'react-router-dom';

function RootLayout() {
  return (
    <div className='root-layout'>

      <header>
        <nav>
          <h1>ART MUSEUM</h1>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='artworks'> ARTWORKS</NavLink>
          <NavLink to="search">SEARCH</NavLink>

        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default  RootLayout;