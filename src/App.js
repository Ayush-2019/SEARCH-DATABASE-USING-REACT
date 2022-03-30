import data from './MOCK_DATA.json';
import './App.css';
import { useState } from 'react';

function App(){
  const[find,setFind] = useState("");
  return(
    <>
    <div>
      <br/>
      <input className='search_bar' placeholder='Write portion of name you remember' onChange={e=>setFind(e.target.value)}/><br/><br/>
    </div>
  {
    data.filter(details => {
      var full_name = details.first_name + " " + details.last_name;
      if (find === '') {
        return details;
      } else if (full_name.toLowerCase().includes(find.toLowerCase())) {
        return details;
      }
    }).map((details) => (
      <div key={details.id}>
        <table className='details_table'>
          <tr>
            <th>Costumer_id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>IP ADDRESS</th>
          </tr>
          <tr>
            <td>
              {details.id}
            </td>
            <td>
              {details.first_name}
            </td>
            <td>
              {details.last_name}
            </td>
            <td>
              {details.gender}
            </td>
            <td>
              {details.ip_address}
            </td>
          </tr>
        </table>
      </div>
    ))
  }
  </>
  )
}
export default App;