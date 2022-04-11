import { useContext } from "react"
import AlertContext from "../../context/alret/AlertContext"


function Alert() {
    const { alert}=useContext(AlertContext)

  return alert !== null &&(<>
      {alert.type === 'error' && (<h1 className=" m-12 text-red-700 text-xl">{alert.msg}</h1>) }
  </>
  )
}

export default Alert