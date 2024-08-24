import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NotFoundImage from '../assets/404.png';
import styles from '../styles/NotFound.module.css';

const NotFound404 = () => {
  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push('/'); // Redirects to the home page after 5 seconds
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
  }, [history]);

  return (
    <div className={styles.NotFound}>
      <h2 className={styles.Message}>Oops! Page not found</h2>
      <img src={NotFoundImage} alt="Page not found" className={styles.Image} />
      <p className={styles.RedirectMessage}>
        This page does not exist. You’ll be redirected to the homepage in a few seconds.
      </p>
    </div>
  );
};

export default NotFound404;
