// React routing isnt inbuild, we need to use third party library for that.
// it is available at reactrouter.com
// to install it we run  : npm i react-router-dom 
// ns to use it we gonna wrap the main component with BrowserRouter in index.js file and then we can use the Routes and Route components to define our routes in App.jsx file.
// we gonna use browser router for this, so we need to wrap our app with that in index.js file.
// it helps us to navigate between different pages without refreshing the page, it is a single page application.





import React from 'react'
// Below we imported routes from the .....  here route gonna work for each route we defined in the app.jsx ..while routes
import {Route, Routes} from 'react-router-dom'
// Below we imported all the pages we created in the pages folder to use them in the routes.
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
{/* Here we are definig our routes ...its gona work as the 
single "/" stands for the main home page ...
nd the others are set as the name suggests...
in element we put the thing we wanna call ....  */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>

    </div>
  )
}

export default App