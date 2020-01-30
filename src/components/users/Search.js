import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
          className='search-form'
        />
        <div className='grid grid-cols-2'>
          <button className='btn-accent1 search-form' type='submit'>
            <i className='fas fa-search'></i> Submit
          </button>
          {githubContext.users.length > 0 && (
            <button
              className='btn-accent2 search-form'
              onClick={githubContext.clearUsers}
            >
              <i className='fas fa-eraser'></i> Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
