import React from "react";
import "./LoginPage.scss";
import axios from 'axios';
import {Link} from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [resp, setResp] = React.useState(false);
  const onClickLogin = (email, nickname, password) => {
    axios.post(process.env.REACT_APP_BE_URI+'/auth/register', {
      "email": email,
      "password": password,
      "nickName": nickname    
  })
  .then((res) => {
    setResp(res.status);
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
        <h1>Log in</h1>
        <div className="form-input-material">
          <input
            type="text"
            name="Email"
            id="Email"
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
            type="text"
            name="Nickname"
            id="Nickname"
            placeholder=" "
            autoComplete="off"
            required
            className="form-control-material"
            value={nickname}
            onChange={(event) => {setNickname(event.target.value)}}
          />
          <label htmlFor="username">Nickname</label>
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
        {resp === 400 ? <p style={{color: "red"}}>"Incorect data"</p> : null}
        {resp === 500 ? <p style={{color: "red"}}>"User already exist"</p> : null}
        {resp === 200? <p style={{color: "green"}}>"Check email"</p> : null}
        <button className="btn btn-ghost" onClick={() => {onClickLogin(email, nickname, password)}}>
          Log in
        </button>
        <Link to="/"><button className="btn btn-ghost">
          Back
        </button>
        </Link>
    </div>
  );
};

export default LoginPage;
