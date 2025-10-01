// import React from 'react'
import Header from '../Header'
// import Meals from '../Meals'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function Layout() {
      const queryClient=new QueryClient;
  return (
    <QueryClientProvider client={queryClient}>
    <div className='relative '>
      <div className=' w-full top-0 left-0 sticky z-10'>
        <Header />
      </div>
        <main>
          <Outlet/>
        </main>
        <div>
          <Footer/>
        </div>
    </div>
    </QueryClientProvider>
  )
}

export default Layout