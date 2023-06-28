import React from "react";
import "./SigninPage.scss";
import axios from 'axios';
import {Link} from 'react-router-dom';
const SigninPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [resp, setResp] = React.useState();
  const onClickSigin = (email, password) => {
    axios.post(process.env.REACT_APP_BE_URI+'/auth/login', {
      "email": email,
      "password": password  
  })
  .then((res) => {
    setResp(res.status);
    localStorage.setItem('token', res.data.token);
    window.location.replace('https://invoker-game.com');
    setTimeout(() => {
      setResp(false);
    }, 9000);
  })
  .catch((err) =>{
    setResp(err.response.status);
    setTimeout(() => {
      setResp(false);
    }, 9000);
  
  })
  };
  return (
    <div className="login-form">
        <h1>Sign in</h1>
        <div className="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autoComplete="off"
            required
            className="form-control-material"
            value={email}
            onChange={(event) => {setEmail(event.target.value)}}
          />
          <label htmlFor="username">Email</label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="off"
            required
            className="form-control-material"
            value={password}
            onChange={(event) => {setPassword(event.target.value)}}
          />
          <label htmlFor="password">Password</label>
        </div>
        {resp === 403 ? <p style={{color: "red"}}>"Invalid email or password"</p> : null}
        {resp === 404 ? <p style={{color: "red"}}>"Invalid email or password"</p> : null}
        <button className="btn btn-ghost" onClick={() => {onClickSigin(email, password)}}>
          Sign in
        </button>
        <Link to="/"><button className="btn btn-ghost">
          Back
        </button>
        </Link>

    </div>
  );
};

export default SigninPage;
