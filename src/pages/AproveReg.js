import React from 'react'
import aproveicon from '../img/browser.png';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";
const AproveReg = () => {
const [searchParams] = useSearchParams();
const token = searchParams.get('token');
const decoded = jwt_decode(token);
const id = decoded._id;
const nickName = decoded.nickName;
console.log(nickName);
const [resp, setResp] = React.useState();
React.useEffect(() => {
    axios.patch(process.env.REACT_APP_BE_URI+`/aprove-registration`, {
        "id": id,
    }, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then((res) => {
        setResp(true); 
        axios.post(process.env.REACT_APP_BE_URI+'/users-records', {
            "id": id,
            "nickName": nickName,
            "record": 999999
        },
        {
            headers: {
                "Authorization": "Bearer " + token
            }
        })


        setTimeout(() => {
            window.location.replace('/');
        }, 5000)
    })
    .catch((err) =>{setResp(false)})
})

  return (

        <>
        {
            resp === true ? 
            <div className='login-form'>
                <img src={aproveicon} alt="aproveicon" width="100px"></img>
                <p style={{marginTop: "30px"}}>Successfully</p> 
                </div>
            :   <div className='login-form'> <p style={{marginTop: "30px"}}>Unsuccessfully</p></div>
        }
        </>
    
  )
}

export default AproveReg
