import React from 'react';

export default function ErrorPageModal({clearError, error}) {
  console.log(error);
  return (
    <div className={error !== null ? 'modal-container show-modal' : 'modal-container'}>
      <div className="modal-content">
        <h1>Sorry!</h1>
        <p>We couldn't find this city, make sure the city exists</p>
        <button onClick={clearError}>ok</button>
      </div>
    </div>
  );
};