
import Sheet from 'react-modal-sheet';
import { useState, useEffect, useRef } from 'react';
import "./App.css"

function App() {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
       const res = await fetch("https://jsonplaceholder.typicode.com/users")
       const data = await res.json()
       setData(data.slice(0,8))
    }
    fetchData()
  }, [])

  const handleButtonToggle = () => {
    setOpen(prevState => !prevState)
  }

  if(!data.length) {
    return null
  }

    return (
      <>
        <Sheet className="sheet-custom" isOpen={isOpen} onClose={() => setOpen(false)}>
          <Sheet.Container className="sheet-container-custom">
            <Sheet.Header className="sheet-header"/>
            <div>
              <h1 className="title">Lorem ipsum, lorem ipsum, lorem ipsum</h1>
              <span className="close" onClick={handleButtonToggle}>X</span>
            </div>
            <Sheet.Content dragListener={false}>
              <div>
                {data.map(d =>(<p className="li-item" key={d.id}>{d.name}</p>))}
              </div>
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop />
        </Sheet>
        <span onClick={handleButtonToggle} className="icon">{isOpen ? "Close" : "Open"}</span>

      </>
      )
}

export default App;
