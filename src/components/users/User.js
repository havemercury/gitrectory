import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-accent2'>
        <i className='fas fa-angle-double-left'></i> Back to Search
      </Link>

      <div className='grid user-grid-cols-2'>
        <div className='user-card text-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1 style={{ marginTop: '10px', lineHeight: '60%' }}>{name}</h1>
          <p>
            {hireable ? (
              <button className='btn-success btn-small'>
                <i className='fas fa-check text-success' /> Hireable
              </button>
            ) : (
              <button className='btn-danger btn-small'>
                <i className='fas fa-times-circle text-danger' /> Unhireable
              </button>
            )}
          </p>
          <ul style={{ marginBottom: '20px' }}>
            <li>
              <strong>Location:</strong>{' '}
              {location === '' ? location : 'Unavailable'}
            </li>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {login}
                </Fragment>
              )}
            </li>
          </ul>

          {bio && (
            <Fragment>
              <h2 style={{ marginTop: '0' }}>Bio</h2>
              <p
                style={{
                  textAlign: 'left',
                  margin: '0 20px 20px',
                  fontSize: '0.875rem'
                }}
              >
                {bio}
              </p>
            </Fragment>
          )}
          <a
            href={html_url}
            className='btn btn-dark'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit GitHub Profile{' '}
            <i className='far fa-arrow-alt-circle-right'></i>
          </a>
        </div>
        <div
          className='user-card text-center'
          style={{ backgroundColor: 'var(--main-color)', color: '#fff' }}
        >
          <div
            className='grid grid-cols-4'
            style={{ gridGap: '1rem', padding: '0 2rem' }}
          >
            <div className='badge btn-accent2'>Follows: {followers}</div>
            <div className='badge btn-success'>Following: {following}</div>
            <div className='badge btn-light'>Public Repos: {public_repos}</div>
            <div className='badge btn-dark'>Public Gists: {public_gists}</div>
          </div>

          <Repos repos={repos} />
        </div>
      </div>
    </Fragment>
  );
};

export default User;
