import Signup from "../Signup/Signup2";
import Login from "../Login/Login";
import { FC } from "react";

// Signup is using Form2
// Login is using Form

const App: FC = () => {
  return (
    <div className="App">
      <Signup />
      <Login />
    </div>
  );
};

export default App;
