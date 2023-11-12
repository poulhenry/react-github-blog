import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />

      <main className='max-w-7xl mx-auto'>
        <Outlet />
      </main>
    </div>
  )
}
