import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import Login from '../components/Login';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />
  return (
    <div className='h-screen'>
      <Head>
        <title>Metaverse Challenge Chat App</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpEgpwgWTPxuVaCIlNCbzPFXL96DYMxbgsg&usqp=CAU" />
      </Head>
      Welcome to the app
      <button onClick={logout}>Logout</button>
    </div>
  )
}
