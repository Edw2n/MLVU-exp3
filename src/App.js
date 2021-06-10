import './App.css';
import Question from './Question.js';
import React, { useState } from 'react';

function App() {

  // let nueron_list = [203, 322, 333, 414]

  let nueron_list = [132, 210, 233, 291, 355, 356, 360, 577, 660, 735, 840, 862, 904, 906, 908, 997, 1173, 1526, 1591, 1797, 1895, 1943, 1954, 1994, 1997, 2031]
  
  let expRootDir = 'full_spec11/'
  let targetTestDir = '/Madry'
  let rootDirs = nueron_list.map(item => {
    return expRootDir+'nueron_' + (item) + targetTestDir;
  })

  let questionNum = rootDirs.length
  const [totalInfo, setTotalInfo] = useState(
    Array.from(Array(questionNum).keys()).reduce((acc, curr) => (acc[curr + 1] = [], acc), {})
  )

  let defaultInfo = {
    'name': '',
    'age': '',
    'gender': '',
    'major': '',
    'backgrounds': ''
  }

  const [userInfo, setUserInfo] = useState(defaultInfo)

  function updateInfoToggle(number, data) {
    setTotalInfo(prevState => ({
      ...prevState,
      [number]: prevState[number].includes(data) ? prevState[number].filter(d => d !== data) : [...prevState[number], data]
    })
    );
  }

  function updateUserInfo(key, event) {
    setUserInfo(prevState => ({
      ...prevState,
      [key]: event.target.value
    }))

  }

  function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  function submit() {
    let notOK = [] // totalInfo update 할때 notOK 계산해 놓는게 나으려나

    Object.keys(totalInfo).forEach(function (item) {
      if (totalInfo[item].length !== 3) {
        notOK.push(item)
      }
    })

    if (notOK.length == 0) {
      download(JSON.stringify(userInfo), "Experiment3_" + userInfo["name"] + ".json", "text/plain");
    }

    return alert(
      JSON.stringify(userInfo) + '\n'
      + `${notOK.length > 0 ? 'pick only 3 options: ' + notOK : 'All Done!!!!'}`
      + '\n' + JSON.stringify(totalInfo)
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Interpretability Test (Experiment 3)
        </p>
      </header>

      <div className='userInfoForm'>
        <div className='Form-above'>
          <div className='Form-Left'>
            {Object.keys(defaultInfo).slice(0, 2).map(key => {
              console.log(key)
              return (<div className='Input-Row'>
                <text style={{ width: '60px' }}> {key} </text>
                <input
                  type="text"
                  value={userInfo[key]}
                  onChange={event => updateUserInfo(key, event)}
                />
              </div>);
            })}

          </div>

          <div className='Form-Left'>
            {Object.keys(defaultInfo).slice(2, 4).map(key => {
              console.log(key)
              return (<div className='Input-Row'>
                <text style={{ width: '60px' }}> {key} </text>
                <input
                  type="text"
                  value={userInfo[key]}
                  onChange={event => updateUserInfo(key, event)}
                />
              </div>);
            })}

          </div>

        </div>

        <div className='Input-full-Row'>
          <text style={{ width: '100px' }}> {Object.keys(userInfo).slice(-1)[0]} </text>
          <textarea
            type="text"
            value={userInfo[Object.keys(userInfo).slice(-1)[0]]}
            onChange={event => updateUserInfo(Object.keys(userInfo).slice(-1)[0], event)}
          />
        </div>
      </div>

      {Array.from(Array(questionNum).keys()).map(item => {
        return (<div>
          <Question number={item + 1} setAnswer={updateInfoToggle} rootDir={rootDirs[item]}></Question>
        </div>);
      })}

      <button onClick={submit}>Submit</button>

    </div>
  );
}

export default App;
