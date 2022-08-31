import Head from 'next/head'
import style from './Login.module.scss'

export default function Login() {
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
    <main className={style.background}>
        <div className={style.container}>
            <div className={style.logo}>kazi</div>
            <button className={style.google}>google</button>
        </div>
    </main>
    </>
  )
}
