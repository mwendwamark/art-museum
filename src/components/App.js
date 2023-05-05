import { createBrowserRouter, Route,  createRoutesFromElements, RouterProvider } from "react-router-dom";
import ArtworksList from "./ArtworksList";
import Home from "./Home";
import RootLayout from "../layouts/RootLayout";
import SearchArtwork from "./SearchArtwork"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="artworks" element={<ArtworksList />} />
    <Route path="search" element={<SearchArtwork />} />
    {/*Route path='favourties' element={<Favourites />}/>  */}
  </Route>
  )
)

function App () {
  return(

      <RouterProvider router={router} />

  )
}
export default App;