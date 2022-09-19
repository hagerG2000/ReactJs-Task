
/* eslint-disable */
import logo from './logo.svg';
import './index.css';
import Data from "./data.json";
import { Link  } from 'react-router-dom';
import test from './postRank';
import Progressbar from './progressbarComponont';
function App() {
  let count = 0;
  var index = 0;
  var id=100;
  var maxLength = false;
  const words = [];
  const adj = [];
  const scores = [];
  //to get random numbers each time we declare the arrays
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //loop through data to get words , scores , pos into arrays
  function loopwordlist(arrwords) {
    //make sure that each list has at least 1 verb, 1 adverb , .......
    while (!(adj.includes("adverb") && adj.includes("verb") && adj.includes("noun") && adj.includes("adjective"))) {
      for (let i = 0; i < 10; i++) {
        const n = randomNumberInRange(0, 14);
        words[i] = arrwords[n].word;
        adj[i] = arrwords[n].pos;
      }
    }
  }
  function loopscorelist(arrscores) {
    debugger;
    for (let i = 0; i < arrscores.length; i++) {
      scores[i] = arrscores[i];
    }
  }
//print every word in our list 
  const handleClick = event => {
    index++;
    //if we reach the end of the list make flag with false valuue to disable the buttons
    if (index >= words.length) {
      maxLength = true;
    } else {
      maxLength = false;
      document.getElementById('demo').innerText = words[index]
    }
    //check if the answer was correct or incorrect
    id = event.currentTarget.id;
    if (id != adj[index - 1]) {
      alert("Incorrect Answer!!")
      count = count + 10;
    }
    else {
      alert("correct Answer!!")
      count = count + 10;
    }
    //console.log("nnnnnnnnn"+count);
    return count;
  };
  return (
   /* <><>
    <Router>
      <Switch>
        <Route exact path="/" component={test} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </>*/
    <div className="App">
      <div className="content">
        <div>
          {Data.map(post => {
            return (
              <>
                {loopwordlist(post.wordList)}
                <p>{words}</p>
                {loopscorelist(post.scoresList)}
                <p>{scores}</p>
              </>
            )
          })}
        </div>
        <fieldset>
          <legend>choose your Answer</legend>
          What is this word Part of Speech : <br></br><p id="demo">{words[index]}</p><br></br>
          <button onClick={handleClick} disabled={maxLength} id="noun">Noun</button>
          <button onClick={handleClick} disabled={maxLength} id="adjective">Adjective</button>
          <button onClick={handleClick} disabled={maxLength} id="adverb">Adverb</button>
          <button onClick={handleClick} disabled={maxLength} id="verb">Verb</button>
          <Progressbar bgcolor="orange" progress={count}  height={30} />
        </fieldset>
      </div>
    </div>
  );
}

export default App;
