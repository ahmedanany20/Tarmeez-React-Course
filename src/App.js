import "./App.css";
import BankForm from "./BankForm";
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <UserContext.Provider
      value={{
        userName: "anany",
        name: "ahmed anany",
        email: "anany@gmail.com",
      }}
    >
      <div className="App">
        {/* Bank Form  */}
        <BankForm />

        {/* posts and side menu */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
