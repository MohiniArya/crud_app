import React, { useState } from 'react'
import { Dataset } from './Dataset'

export default function Crud() {
    const [Data,setData] = useState();

    const handleDelete =(id)=>{
        const updateData = Data.filter(item=>item.id !== id)
        setData(updateData);
    } 
     const handleEdit=()=> {
         setData()
     }

  return (
    <div>
      <table>
        <tr>
            
            <td>SNo.</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
        </tr>
        <tbody>
            {
                Dataset.map((item,i)=>{
                    return (
                        <tr key={i}>
                             <td>{i+1}</td>
                             <td>{item.Id}</td>
                             <td>{item.FirstName}</td>
                             <td>{item.LastName}</td>
                             <td>{item.Age}</td>
                             <td><button onClick={handleEdit}> Edit </button></td>
                             <td><button onClick={(e)=> handleDelete(item.id) }> Delete </button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
