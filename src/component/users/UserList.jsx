// dependencies
import {Link} from 'react-router-dom'
function UserList({user:{login, avatar_url}}) {
  return (
    <div className='relative'>
        <img src={avatar_url}  className="rounded-full absolute m-auto w-12 h-12"/>
            <h1 className='top-3 left-12 absolute text-amber-200 ml-4 text-s'>{login}</h1>
            <div className='top-12 absolute left-2'>
                <Link to={`/user/${login}`} className="text-gray-400 text-opacity-60">visit profile</Link>
            </div>
        </div>
  )
}

export default UserList