/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import SingleUser from './SingleUser'
import GithubContext from '../../context/github/githubContext';

const UserList = () => {
  
  const githubContext = useContext(GithubContext);
  useEffect(()=>{
    githubContext.getUsers()
  }, [])
  const { users } = githubContext

  return (
    <div className="row">

      {users.map(user => (
        <SingleUser key={user.id} user={user} />
      ))}

    </div>
  )
}


export default UserList
