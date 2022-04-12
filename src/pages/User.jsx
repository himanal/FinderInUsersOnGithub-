

import  { useContext, useEffect } from 'react'
import {  Link, useParams} from 'react-router-dom'
import GithubContext from '../context/Github/GithubContext'


function User() {
  const {getUser ,user} =useContext(GithubContext)
  const param = useParams()
  useEffect(()=>{
    getUser(param.login)
  
  },[])
  return (<div className='h-screen m-16'>
    <div className='mb-8'>

    <Link to={'/'} className="text-zinc-300 hover:bg-slate-700 hover:rounded-xl p-3 text-xl ">
      back to search page 
    </Link>
    </div>
    <div className='flex gap-2  '>
<div className='w-max h-max'>

    <img src={user.avatar_url} alt={user.login} className=' w-48 h-48 ' />
</div>
<div className='m-0'>

    <p className='text-zinc-400 text-2xl m-2 ' > {user.login}</p>
    <p className='text-zinc-200 tex-xl m-2' >full name: {user.name}</p>
    <p className='text-zinc-100 m-2' >{user.bio}</p>
    <a href={user.html_url} target="_blank"> Github</a>
</div>
    </div>
  </div>
  )
}

export default User