import React ,{useState} from "react";
import Login from "../Login";
import { Register } from "../Register";
import '../../assets/Account.css';
const Account = () => {
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (<>
  <div className="Account">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  </>);
};
export default Account;
