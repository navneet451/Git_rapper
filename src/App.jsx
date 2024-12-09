import { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState();

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    setUserInfo(response.data);
    console.log(response.data);
    setUserName("");
  };

  return (
    <>
      <div className="container">
        <h1 className="heading">GitHub Wrapper</h1>
        <form className="formCard">
          <input type="text" placeholder="Enter username to get github details" value={userName} onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
        </form>
        {userInfo && (
          <div className="userDetailCard">
            <div className="userDetailBody">
              <p className="name">{userInfo.name}</p>
              <em className="userName">{userInfo.login}</em>
              <div className="follow">
                <p>Followers: {userInfo.followers}</p>
                <p>Following: {userInfo.following}</p>
              </div>
              <div className="prof">
                <p>🏢{userInfo.company}</p>
                <p>✍️{userInfo.bio}</p>
              </div>
            </div>
            <div className="userImage">
              <img src={userInfo.avatar_url} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
