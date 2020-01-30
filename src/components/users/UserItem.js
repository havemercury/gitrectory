import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <Link to={`/user/${login}`}>
        <img src={avatar_url} alt='' className='round-img' />
      </Link>
      <div className='username-title'>
        <Link to={`/user/${login}`}>{login}</Link>
      </div>
      <div>
        <Link to={`/user/${login}`} className='btn btn-accent2'>
          More <i className='fas fa-angle-double-right'></i>
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
