import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Pagination from './components/Pagination'
// import User from './components/User'
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  console.log(users)

  const USER_PER_PAGE = 5

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const res = await axios.get('https://randomuser.me/api/?page=1&results=50&nat=us')
      setLoading(false)
      setUsers(res.data.results)

      setTotalPage(Math.ceil(res.data.results.length / USER_PER_PAGE))

    }
    fetchUsers()
  }, [])

  const handleClick = num => {
    console.log(num)
    setPage(num)
  }
  return (
    <div className="App">
      <h1>Pagination</h1>
      <p>Page {page}</p>
      {loading ? <p>Loading...</p> : <>
        <Users users={users} page={page} />
        <Pagination totalPages={totalPage} handleClick={handleClick} />
      </>}
    </div>
  );
}

export default App;
