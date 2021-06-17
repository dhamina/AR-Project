import React from 'react';
import styles from './Spinner.style';


const Spinner = (props) => {
  return (

    <aside id="preloader">
      <div className="loader">
        <div className="load-3">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      <style jsx>{styles}</style>
    </aside>
  );
};

export default Spinner;