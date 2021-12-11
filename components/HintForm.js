import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

export default function HintForm({ data }) {
  let ref = {};
  data.forEach( hintObj => {
    ref[hintObj.id] = useRef()
  });

  const router = useRouter()
  const checkHint = async event => {
    event.preventDefault();
    let key = event.target[0].id;
    let found = data.some(hintObj => {
      return hintObj.id == event.target[0].id
        && hintObj.answer.toLowerCase().replace(/\s/g,'')
          == event.target[0].value.toLowerCase().replace(/\s/g,'');
    });

    if (found) {
      ref[key].current.className = "input is-success right";
    } else {
      ref[key].current.className = "input is-danger wrong";
    }

    // All answers are correct
    let allAnswered = true;
    Object.values(ref).forEach((item, i) => {
      allAnswered &= (item.current.value.toLowerCase().replace(/\s/g,'')
        == data.find(hintObj => hintObj.id
          == item.current.id).answer.toLowerCase().replace(/\s/g,''));
    });

    if (allAnswered) {
        router.push("/congrats");
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
