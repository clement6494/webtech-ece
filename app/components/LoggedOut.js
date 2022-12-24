import { useContext } from 'react'
import UserContext from './UserContext'

export default function LoggedOut(){
    const login = useContext(UserContext)
    const onClickLogin = async (e) => {
      const response = await fetch('/api/profile')
      const user = await response.json()
      login(user)
    }
    return (
      <button
        className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6"
        onClick={onClickLogin}
      >
        
        Login
      </button>
    )
  }