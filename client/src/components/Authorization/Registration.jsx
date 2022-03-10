import React from 'react';

function Registration(props) {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="repeatPassword" />
        </div>

        <button type="submit" className="btn btn-primary">Registration</button>
      </form>

    </div>
  );
}

export default Registration;