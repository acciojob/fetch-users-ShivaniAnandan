import React, { useState } from 'react'
import axios from "axios"
const Details = () => {
 
    const [data , setData] = useState([])

    function displayData(){
       axios.get("https://reqres.in/api/users").then(response => {
        setData(response.data.data)
        console.log(response.data.data)
       })
        
    }


  return (
    <div>
        <button className='btn' onClick={displayData}>Get User List</button>
        <table>
            <thead>
                <tr>
                   <th>First Name</th> 
                   <th>Last Name</th> 
                   <th>Email</th> 
                   <th>Avatar</th> 
                </tr>
            </thead>
            <tbody>
                {
                (data.length==0)? <p>No data found to display.</p> : data.map(element => {
                    return(
                        <tr>
                            <td>{element.first_name}</td>
                            <td>{element.last_name}</td>
                            <td>{element.email}</td>
                            <td><img 
                            src= {element.avatar}/></td>
                        </tr>
                    )
                  })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Details;