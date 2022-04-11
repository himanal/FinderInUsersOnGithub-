import React, { useContext, useState } from 'react'
import AlertContext from '../../context/alret/AlertContext'
import GithubContext from '../../context/Github/GithubContext'

function UserSreach() {

  const [text, setText] =useState('') 
  const handlechange = (e)=>setText(e.target.value)

  const{users,searchData,clearData }=useContext(GithubContext)
  const { setAlert}= useContext( AlertContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    if( text === ""){
      setAlert("please enter somting","error")
    } else{
      searchData(text)

      setText('')
    }

  }
  const handleClear=()=>{
    clearData()
  }

  return (
    <div className='gird grid-cols-1  m-24   '>
        <div  >
            <form onSubmit={handleSubmit}>
                <input type="text" className=' w-80 h-12   rounded-l-xl  shadow-zinc-400 pl-3 ' placeholder='search' value={text} onChange={handlechange}/>
                <button type='submit' className=' w-20 bg-slate-400  text-zinc-300 hover:bg-slate-500  h-12 rounded-r-xl'>search</button>
            </form>
              {users.length>0 &&(
                
                  <div>
                    <button className='m-8 text-zinc-300 hover:bg-slate-700 hover:rounded-xl w-16 h-10 text-xl ' onClick={handleClear}>clear</button>
                  </div>
                )}
        </div>
    </div>
  )
}

export default UserSreach