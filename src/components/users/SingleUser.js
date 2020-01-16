import React from 'react'

const SingleUser = ({ user }) => {

  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image">
          <img src={user.avatar_url} alt="" />
          <span className="card-title">Github profile</span>
        </div>
        <div className="card-content">
          <p>Name is {user.login.toUpperCase()}</p>
        </div>
        <div className="card-action">
          <a href={user.html_url} className="waves-effect waves-light btn-medium">Visit profile</a>
        </div>
      </div>
    </div>
  )
}

export default SingleUser
