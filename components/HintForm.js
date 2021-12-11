import { useRouter } from 'next/router'
import React, { useState, useRef, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

export default function HintForm({ data }) {
  let hintStates = {};
  let ref = {};
  data.forEach( hintObj => {
    hintStates[hintObj.id] = 0;
    ref[hintObj.id] = useRef()
  });

  const router = useRouter()
  const reducer = (previousValue, currentValue) => previousValue && currentValue;
  const checkHint = async event => {
    event.preventDefault();
    let key = event.target[0].id;
    let found = data.some(hintObj => {
      return hintObj.id == event.target[0].id && hintObj.answer.toLowerCase() == event.target[0].value.toLowerCase();
    });

    if (found) {
      hintStates[key] = 1;
      ref[key].current.className = "input is-success";
    } else {
      hintStates[key] = -1;
      ref[key].current.className = "input is-danger";
    }

    // All answers are correct
    if (Object.values(hintStates).reduce(reducer)) {
        router.push("/final_hint");
    }
  }

  return (
    <>
      {data.map(({ id, question, answer }) => (
        <>
          <div key={id} className="card">
            <div className="card-content">
              <div className="content" dangerouslySetInnerHTML={{ __html: question }}/>
            </div>
            <footer className="card-footer">
              <form className="field is-grouped card-footer-item" onSubmit={checkHint}>
                <div className="control is-expanded">
                  <input ref={ref[id]} className="input" type="text" id={id}/>
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
