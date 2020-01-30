import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About Gitrectory</h1>
      <p>Gitrectory is a quick way to search for GitHub users.</p>

      <p>
        This app was made by <a href='/user/havemercury'>havemercury</a> with
        React.{' '}
        <a
          href='https://github.com/havemercury/gitrectory'
          target='_blank'
          rel='noopener noreferrer'
        >
          View the repository for this app.
        </a>
      </p>
      <p>Version: 1.0.0</p>
    </Fragment>
  );
};

export default About;
