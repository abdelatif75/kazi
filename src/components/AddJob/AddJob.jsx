import { BiPlus } from "react-icons/bi"
import style from './AddJob.module.scss'

export default function AddJob() {
  return (
    <>
    <div className={style.container}>
        <button className={style.button}><BiPlus/></button>
    </div>
    </>
  )
}
