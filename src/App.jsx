import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadGames} from './action/gameAction'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const {popular, newGames, upcoming} = useSelector((state) => state.games);
  // console.log(popular);
  return (
    <div className="App">
      
    </div>
  )
}

export default App
