import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        {/* <div className="card__result">
          <h1>Your score is 10/10!</h1>
          <p>You are best!</p>
        </div> */}
        <h1 className="card__title">Question 1/10</h1>
        <div>
          <p className="card__question">What is React?</p>
          <ul className="card__answers">
            <li>
              <button>Framework</button>
            </li>
            <li>
              <button>Library</button>
            </li>
            <li>
              <button>Compiller</button>
            </li>
            <li>
              <button>Programming language</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
