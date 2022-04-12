import { useState } from "react";
import { useNavigate } from "react-router"

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')

  const onChange = (e) => {
    setUsername(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    navigate('/');
  }
  return (
    <div className="login">
      <form>
        <input type="text" required onChange={onChange} />
        <button type="button" onClick={formSubmit}>Login</button>
      </form>
    </div>
  )
}