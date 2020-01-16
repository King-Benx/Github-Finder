import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';


const Search = ({ clearUsers }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    githubContext.searchUsers(text);
    setText('');
  }

  const onClick = (e) => {
    githubContext.clearUsers()
  }
  return (
    <div className="row" style={{ textAlign: 'center' }}>
      <form onSubmit={onSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" onChange={onChange} value={text} name="text" className="validate" />
            <label htmlFor="icon_prefix">Search User</label>
            <input type="submit" value="Search" className="btn btn-dark btn-primary postfix" />
          </div>
        </div>
      </form>
      <button className="btn-floating btn-sm waves-effect waves-light grey" onClick={onClick}><i className="material-icons">refresh</i></button>
    </div>
  )
}


export default Search;