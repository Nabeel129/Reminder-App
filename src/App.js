import React, { useState } from 'react';
import List from './components/List';
import data from './data';


function App() {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople([]);
  }
  const bringClick = () => {
    setPeople(data);
  }
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today!</h3>
          <List people={people} />
          {people.length !== 0 && <button onClick={handleClick}>Clear All</button>}
          {people.length === 0 && <button onClick={bringClick}>Fetch All</button>}
        </section>
      </main>
    </>
  )
}

export default App;
