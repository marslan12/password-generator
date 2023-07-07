import { useState } from 'react';
import './App.css';
import usePasswordGenerator from './hooks/use-password-generator';
import PasswordStrength from './components/password-strength';
import Button from './components/button';
import CheckBox from './components/checkBoxes';

function App() {
  const [length, setLength] = useState(10);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);
  const [copied, setCopied] = useState(false);

  const {password, errorMessage, generatePassword} = usePasswordGenerator();

  const handleCheckBoxChange = (index) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxData(updatedCheckboxData);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {setCopied(false)}, 1000);
  }


  return (
    <div className='container'>
      {password && (
        <div className='header'>
            <div className='title'>{password}</div>
            <Button text={copied ? 'Copied' : 'Copy'} onClick={handleCopy} customClass = 'copyButton'/>
        </div>
      )}
      <div className='charLength'>
        <span>
          <label>Character Length</label>
          <label> {length} </label>
        </span>
        <input
            type='range'
            min='4'
            max='20'
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
      </div>

      <div className='checkBoxes'>
        {checkboxData.map((checkbox, index) => {
          return (
            <CheckBox title={checkbox.title} state={checkbox.state} onChange={() => handleCheckBoxChange(index)} />
          )
        })}
      </div>

      <PasswordStrength password={password} />
      {errorMessage && (
        <div className='errorMessage'> {errorMessage} </div>
      )}
      
      <Button text='Generate Password' onClick={() => generatePassword(checkboxData, length)} customClass = 'generateBtn'/>
    </div>
  );
}

export default App;
 