import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-[100vh]' style={{backgroundColor: 'gray'}}>
    <h1>Social</h1>
    </div>
  )
}
