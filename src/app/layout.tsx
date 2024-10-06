import './globals.css'
import { Gruppo } from 'next/font/google'
import Menu from '@/components/nav/page'
import { Kiwi_Maru } from 'next/font/google'

export const metadata = {
  title: 'Pablo Gimenez',
  description: 'Nestsj by Pablo',
}

const gruppo = Gruppo({
  weight: ["400"],
  subsets: ['latin']
})
const kiwi = Kiwi_Maru({
  weight: ["400"],
  subsets: ['latin']
})

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={gruppo.className}>
        <div className="container">

          <div className="nombre">
            <h1>Pablo E<span>x</span>eQ</h1>
            <h3>Desarrollador Fullstack</h3>
          </div>
          <div className="menu">
            <Menu className={kiwi.className}></Menu>
          </div>          <div className="panel">
            {children}</div>
        </div>
        <div className='footer'>© Pablo ExeQ</div>
      </body>
    </html>
  )
}
