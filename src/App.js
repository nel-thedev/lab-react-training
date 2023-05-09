import './App.css';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <Random min="6" max="27" />
      <BoxColor r={50} g={120} b={100} />
      <BoxColor r={180} g={26} b={160} />

      <Rating>1</Rating>
      <Rating>2</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
