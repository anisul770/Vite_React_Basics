import axios from 'axios';
import { useEffect, useState } from 'react';

const APIFetch = () => {
  const [users,setUsers] = useState([]);
  const [error,setError] = useState("");
// useEffect(()=> {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => setUsers(data));
// },[]);

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(data => setUsers(data.data))
    .catch(err => setError(err.message)); 
  },[])

  return (
    <div>
      {error && <p className='bg-red-200 text-red-800'>{error}</p>}
      <ul className='list-disc m-5'>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APIFetch;

/* 
{
  data: [
    {}
  ]
}
*/