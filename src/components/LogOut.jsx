import React from 'react'
import {auth} from '../firebase'

const style = {
    button: `bg-red-400 px-4 py-2 hover:bg-red-300 rounded-2xl`
}


const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Log out
    </button>
  )
}

export default LogOut