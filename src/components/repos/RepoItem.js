import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <li>
      <i className='fas fa-eye'></i> <a href={repo.html_url}>{repo.name}</a>
    </li>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
