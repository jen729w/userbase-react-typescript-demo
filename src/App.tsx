import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import userbase, { UserResult } from 'userbase-js';

const App: React.FC = () => {
  const [user, setUser] = useState<UserResult>();

  useEffect(() => {
    userbase
      .init({ appId: process.env.REACT_APP_USERBASE_APP_ID as string })
      .then();
  }, []);

  const [regForm, setRegForm] = useState<{
    username?: string;
    password?: string;
  }>({ username: '', password: '' });

  const handleRegInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegForm({ ...regForm, [event.target.name]: event.target.value });
  };

  const handleRegSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (regForm.username && regForm.password) {
      userbase
        .signUp({
          username: regForm.username,
          password: regForm.password,
          rememberMe: 'local',
        })
        .then((ur: UserResult) => setUser(ur))
        .catch((err) => alert(err));
    }
  };

  const [loginForm, setLoginForm] = useState<{
    username?: string;
    password?: string;
  }>({ username: '', password: '' });

  const handleLoginInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) 

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={regForm?.username}
            onChange={handleRegInputChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={regForm?.password}
            onChange={handleRegInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
