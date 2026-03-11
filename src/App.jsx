import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"

import Home from "./pages/Home"
import About from "./pages/About"
import Framework from "./pages/Framework"
import Challenge from "./pages/Challenge"
import Programs from "./pages/Programs"
import Webinars from "./pages/Webinars"
import Knowledge from "./pages/Knowledge"
import Apply from "./pages/Apply"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import Legal from "./pages/Legal"

function App() {

return (

<Routes>

<Route element={<MainLayout/>}>

<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/framework" element={<Framework/>} />
<Route path="/challenge" element={<Challenge/>} />
<Route path="/programs" element={<Programs/>} />
<Route path="/webinars" element={<Webinars/>} />
<Route path="/knowledge" element={<Knowledge/>} />
<Route path="/apply" element={<Apply/>} />
<Route path="/testimonials" element={<Testimonials/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/legal" element={<Legal/>} />

</Route>

</Routes>

)

}

export default App