import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function FormikAxios() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/user')
    .then(function (response) {
      console.log(response.data);
      setUsers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })

    return () => {
      console.log('Component unmount')
    }
  }, [])

  

  return (
    <>
      <pre>
        {
        JSON.stringify({
          data: users,
        }, null, 2)}
      </pre>
    </>
  )
}
