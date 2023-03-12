import React from 'react'
import './RecordsPage.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';
import herald from '../../img/herald.webp';
import guardian from '../../img/guardian.webp';
import crusader from '../../img/crusader.webp';
import archon from '../../img/archon.webp';
import legend from '../../img/legend.webp';
import ancient from '../../img/ancient.webp';
import devine from '../../img/devine.webp';
import imortal from '../../img/imortal.webp';
const RecordsPage = () => {
  const [records, setRecords] = React.useState([]);
  React.useEffect(() => {
    axios.get(process.env.REACT_APP_BE_URI+'/users-records',{
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((res) => {
      setRecords(res.data.records);
    })
    .catch((err) => {
      return err;
    });
  }, []);
  return (
    <div>
    <Link to={"/"}><button className='home_btn'>home</button></Link>
    <div className='records_block'>
    <h2>Top players</h2>
      {
        localStorage.getItem('token') && records ? 
        records.map((user) => {
          if(user.record < 8000){
          return (
              <div className='users' key={user.nickName}>
                {user.record >= 25 ? <img src={herald} width="50px" alt='herald'></img> : null}
                {user.record >= 20 && user.record < 25 ? <img src={guardian} width="50px" alt='herald'></img> : null}
                {user.record >= 15 && user.record < 20 ? <img src={crusader} width="50px" alt='herald'></img> : null}
                {user.record >= 10 && user.record < 15 ? <img src={archon} width="50px" alt='herald'></img> : null}
                {user.record >= 9 && user.record < 10 ? <img src={legend} width="50px" alt='herald'></img> : null}
                {user.record >= 8 && user.record < 9 ? <img src={ancient} width="50px" alt='herald'></img> : null}
                {user.record >= 7 && user.record < 8 ? <img src={devine} width="50px" alt='herald'></img> : null}
                {user.record < 7 ? <img src={imortal} width="50px" alt='herald'></img> : null}
              <h3> {user.nickName}</h3>
              <p>{user.record.toFixed(2)}</p>
            </div>

          )
          } else {
            return null;
          }
        })

        : <div className='login_message'>Please <Link to="/login">login</Link> to see records</div>
      }
      
    </div>

    </div>
  )
}

export default RecordsPage
