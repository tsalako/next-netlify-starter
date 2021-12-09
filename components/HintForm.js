import { useRouter } from 'next/router'
import React, { useState } from 'react';

export default function HintForm({ data }) {
  const [showMe, setShowMe] = useState(false);
  const router = useRouter()
  const reducer = (previousValue, currentValue) => previousValue && currentValue;
  const finishHunt = async event => {
    event.preventDefault()
    console.log(data);
    console.log(event);
    var result = data.map(hint => {
      return hint.answer == event.target[hint.id].value;
    }).reduce(reducer);
    console.log(result);

    if(result) {
      setShowMe(false);
      router.push("/final_hint");
    } else {
      setShowMe(true);
    }
  }

  return (
    <>
      <form onSubmit={finishHunt}>
        {data.map(({ id, question, answer }) => (
          <>
            <label htmlFor="question">{question}</label>
            <input type="text" id={id} pattern={answer} title="wrong answer" required value={answer}/>
            <br/>
            <br/>
          </>
        ))}
        <br/>
        <button type="submit">Finish</button>
      </form>
      <br/>
      <h2 style={{
        display: showMe?"block":"none"
      }}>
        One or more of your answers are wrong.
      </h2>
    </>
  )
}
