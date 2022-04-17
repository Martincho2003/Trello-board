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
    <div className="auth-wrapper form_body">
      <div className="auth-inner">
        <form>
          <h3>Log In</h3>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter username" required onChange={onChange}/>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary btn-block" onClick={formSubmit}>Login</button>
        </form>
      </div>
    </div>
  )
}