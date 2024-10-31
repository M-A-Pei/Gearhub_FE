import { RouterProvider, createBrowserRouter } from "react-router-dom"
import route from "./routes/route"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(route)} />
      <ToastContainer />
    </>
  )
}

export default App
