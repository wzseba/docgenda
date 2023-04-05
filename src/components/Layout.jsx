import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {

    const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-gray-700 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>Bienvenido Doctor Pedro</h2>
            <Link className={`${location.pathname === '/pacientes' ? 'text-gray-900' : 'text-white'} text-2xl block mt-20 hover:text-gray-300 w-fit`} to='/pacientes'>Pacientes</Link>
            <Link className={`${location.pathname === '/pacientes/nuevo' ? 'text-gray-900' : 'text-white'} text-2xl block mt-2 hover:text-gray-300 w-fit`} to='/pacientes/nuevo'>Nuevo Paciente</Link>
        </aside>

        <main className='md:w-3/4 p-10 md:h-screen'>
            
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout