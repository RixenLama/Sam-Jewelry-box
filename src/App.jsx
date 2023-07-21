import Web from "./pages/website"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Web/>
      </BrowserRouter>
    </>
  )
}

export default App
