import React, { useState } from "react";



export default function Login() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
      
          <label>Username</label>
          <input
            autoFocus
            type="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label> Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}