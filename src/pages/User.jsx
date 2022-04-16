

import  { useContext, useEffect } from 'react'
import {  Link, useParams} from 'react-router-dom'
import ReposList from '../component/repos/ReposList'
import GithubContext from '../context/Github/GithubContext'


function User() {
  const {getUser ,user ,getUserRepos , repos} =useContext(GithubContext)
  const param = useParams()
  useEffect(()=>{
    getUser(param.login)
    getUserRepos(param.login)
  },[])
  return (<div className='h-screen m-16'>
    <div className='mb-8'>

    <Link to={'/'} className="text-zinc-300 duration-300 hover:bg-slate-700 hover:rounded-xl p-3 text-xl ">
      back to search page 
    </Link>
    </div>
    <div className='flex gap-2  '>
<div className='w-max h-max'>

    <img src={user.avatar_url} alt={user.login} className=' rounded shadow-slate-300 shadow-2xl w-48 h-48 ' />
</div>
<div className='m-0'>

    <p className='text-zinc-400 text-2xl m-2 ' > {user.login}</p>
    <p className='text-zinc-200 tex-xl m-2' >{user.name}</p>
    <p className='text-zinc-100 m-2' >{user.bio}</p>
    <a href={user.html_url} target="_blank" className='ring-2 ring-slate-600 px-3 py-1 m-2 rounded delay-100 hover:rounded-lg bg-slate-400 hover:bg-slate-500 duration-300 '> vist Github page</a>
</div>

 <ReposList repos={repos}/>
    </div>
  </div>
  )
}

export default User