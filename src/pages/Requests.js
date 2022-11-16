import React from 'react';
import Request from './Request';
const Requests = ({ requests, removeRequests }) => {
  return (
    <section>
      {/* <div className="title">
        <h2>our </h2>
        <div className="underline"></div>
      </div> */}
      <div>
        {requests.map((request) => {
          return <Request key={request.id} {...request} removeRequest={removeRequests} />;
        })}
      </div>
    </section>
  );
};

export default Requests;