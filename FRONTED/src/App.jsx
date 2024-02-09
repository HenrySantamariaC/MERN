import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import User from './components/User/User';
import ListNotes from './components/Notes/ListNotes';
import CreateNotes from './components/Notes/CreateNotes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="list-notes" element={<ListNotes />} />
      <Route path="create-note" element={<CreateNotes />} />
      <Route path="user" element={<User />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
