import React from 'react'

function Footer() {
    const fullYear = new Date().getFullYear()
    
  return (
    <div className='text-sm h-12 w-screen absolute bottom-0 left-0 bg-slate-800 text-amber-200 flex justify-center' >
        <p className='pt-2'>
            CopyRight &copy; {fullYear} All Rights reserved for himanal
            
        </p> 
         
    </div>
  )
}

export default Footer