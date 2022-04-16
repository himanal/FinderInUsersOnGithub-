import React from 'react'

function ReposList({repos}) {
  return (
    <div>
        <p className='text-green-500'>repostory :
            {repos.map((e)=><p className='text-2xl text-gray-400 '>{e.name }</p>)}
            </p>
            </div>
  )
}

export default ReposList