import { Link, useParams } from "react-router-dom";

const WelcomeComponent = () => {
  const { name } = useParams();

  const callHelloWorld = () => {
    alert("지야");
  };

  return (
    <>
      <h1>환영하오 {name}이여,</h1>
      <div>
        Manage your todos. <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorld}>
          Call Hello World
        </button>
      </div>
    </>
  );
};

export default WelcomeComponent;
