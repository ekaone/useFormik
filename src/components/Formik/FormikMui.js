import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MyComponent from './MyComponent'

export default function Simple() {

  const [components, setComponents] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function (response) {
        // handle success
        setComponents(<MyComponent />)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div>
      {components !== null ? components : 'Upss..'}
    </div>
  )
}
