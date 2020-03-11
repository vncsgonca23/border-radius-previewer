import React,{useState} from "react";
import GlobalStyle from "./styles/global";
import { Container, Border } from "./styles/borderRadius";
function App() {
  const [leftTop,setLeftTop] = useState('0')
  const [rightTop,setRightTop] = useState('0')
  const [rightBottom,setRightBottom] = useState('0')
  const [leftBottom,setLeftBottom] = useState('0')
  function handleRightBottom(e){
    e.preventDefault();
    setRightBottom(e.target.value)
    console.log(e.target.value)

  }
  function handleLeftBottom(e){
    e.preventDefault();
    setLeftBottom(e.target.value)
  }
  function handleRightTop(e){
    e.preventDefault();
    setRightTop(e.target.value)
    console.log(e.target.value)

  }
  function handleLeftTop(e){
    e.preventDefault();
    setLeftTop(e.target.value)
  }
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <h1>Border Radius Previewer</h1>
        <Border leftTop={leftTop} rightTop={rightTop} leftBottom={leftBottom} rightBottom={rightBottom}/>
        <div className="left-top" >
          <label htmlFor="">Left-Top</label>
          <input type="text" placeholder="0"onBlur={handleLeftTop}/>
        </div>
        <div className="right-top" >
        <label htmlFor="">Right-Top</label>
          <input type="text" placeholder="0" onBlur={handleRightTop}/>
        </div>
        <div className="left-bottom" >
        <label htmlFor="">Left-Bottom</label>
          <input type="text" placeholder="0" onBlur={handleLeftBottom}/>
        </div>
        <div className="right-bottom" >
        <label htmlFor="">Right-Bottom</label>
          <input type="text" placeholder="0" onBlur={handleRightBottom}/>
        </div>

  <label className="Output">{`border-radius: ${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px;`}</label>
      </Container>
    </div>
  );
}

export default App;
