import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

const LoginComponent = () => {
  const [username, setUsername] = useState("suwan");
  const [password, setPassword] = useState("suwan");
  const [errMsg, setErrMsg] = useState(false);

  const navigate = useNavigate();
  const authContext = useAuth();

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setErrMsg(true);
    }
  };

  return (
    <div className="Login">
      {errMsg && <div className="failureMsg">로그인 실패, 다시 확인 부탁</div>}
      <h1>로그인 페이지</h1>
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input type="text" name="username" value={username} onChange={handleNameChange} />
        </div>
        <div>
          <label>password</label>
          <input type="text" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button name="login" onClick={handleSubmit}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
