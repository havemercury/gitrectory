import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div style={{ textAlign: 'left', margin: '3rem 2rem 1rem 2rem' }}>
      <h2>Repos</h2>
      <ul style={{ marginLeft: '1rem' }}>
        {repos.map(repo => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </ul>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
