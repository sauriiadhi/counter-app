import './App.css';
import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { incNum,decNum} from "./actions/index"

const App= () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch()
  return (
    <>
    <div className="container">
        <h1>Counter App</h1>
        <div className="counter">
            <div title='Increment' onClick={() => dispatch(incNum(2))} id="increment-btn">+</div>
            <input id="counter-value" name="input" readOnly value={myState}/>
            <div  id="decrement-btn" title='Decrement'
            onClick={() => dispatch(decNum())}>-</div>
        </div>
    </div>
    </>
  );
}

export default App;
