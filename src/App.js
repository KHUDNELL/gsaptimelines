import './App.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function App() {

  const titleRef=useRef();
  const tl = useRef();

  useEffect(() => {
    
    tl.current = gsap.timeline()
    .to(titleRef.current, {
      y: 500
    })
    .to(titleRef.current, {
      rotation: "+=360"
    });

  });



  return (
    <div className="App">
      <h1 className="title" ref={titleRef}>Wing</h1>
     
     
    </div>
  );
}

export default App;
