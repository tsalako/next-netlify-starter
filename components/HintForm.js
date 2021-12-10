import { useRouter } from 'next/router'
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

export default function HintForm({ data }) {
  let initStates = {};
  data.forEach( hintObj => {
    initStates[hintObj.id] = 0;
  });

  const [hintState, setHintState] = useState(initStates)

  const router = useRouter()
  const reducer = (previousValue, currentValue) => previousValue && currentValue;
  const checkHint = async event => {
    event.preventDefault();
    let key = event.target[0].id;
    let found = data.some(hintObj => {
      return hintObj.id == event.target[0].id && hintObj.answer == event.target[0].value;
    });

    let hintStateTemp = hintState;
    if (found) {
      hintStateTemp[key] = 1;
    } else {
      hintStateTemp[key] = -1;
    }
    // not refreshing
    setHintState(hintStateTemp);

    // All answers are correct
    if (Object.values(hintState).reduce(reducer)) {
        router.push("/final_hint");
    }
  }

  return (
    <>
      {data.map(({ id, question, answer }) => (
        <>
          <div className="card">
            <div className="card-content">
              <div className="content" dangerouslySetInnerHTML={{ __html: question }}/>
            </div>
            <footer className="card-footer">
              <form className="field is-grouped card-footer-item" onSubmit={checkHint}>
                <div className="control is-expanded">
                  <input className={`input ${hintState[id] == 1 ? "is-success" : ""} ${hintState[id] == -1 ? "is-danger" : ""}`} type="text" id={id} required/>
                </div>
                <div className="control">
                  <button className="button">Submit</button>
                </div>
              </form>
            </footer>
          </div>
          <br/>
        </>
      ))}
    </>
  )
}
