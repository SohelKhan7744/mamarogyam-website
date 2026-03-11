import {Link} from "react-router-dom"
import { useState } from "react"
import blogPosts from "../date/blogPosts"

function Navbar() {

const [search, setSearch] = useState("")

function handleSearch(e){
setSearch(e.target.value)
}

const filteredPosts = blogPosts.filter(post =>
post.title.toLowerCase().includes(search.toLowerCase())
)

return (

<nav className="bg-navy text-white shadow-md">

<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

{/* Logo */}

<Link to="/" className="text-xl font-bold text-mustard">
Mamarogyam
</Link>

{/* Navigation */}

<div className="hidden md:flex space-x-8 text-sm font-medium">

<Link className="hover:text-mustard transition" to="/">Home</Link>
<Link className="hover:text-mustard transition" to="/about">About</Link>
<Link className="hover:text-mustard transition" to="/programs">Programs</Link>
<Link className="hover:text-mustard transition" to="/knowledge">Knowledge</Link>
<Link className="hover:text-mustard transition" to="/contact">Contact</Link>

</div>

{/* Search Bar */}

<div className="relative">

<input
type="text"
placeholder="Search articles..."
value={search}
onChange={handleSearch}
className="px-4 py-2 rounded-full text-black w-56 focus:outline-none"
/>

{/* Search Results */}

{search && (
<div className="absolute bg-white text-black mt-2 w-56 rounded shadow-lg max-h-60 overflow-y-auto">

{filteredPosts.length === 0 && (
<p className="p-3 text-sm text-gray-500">
No articles found
</p>
)}

{filteredPosts.map(post => (

<Link
key={post.id}
to="/knowledge"
className="block px-4 py-2 hover:bg-gray-100 text-sm"
>

{post.title}

</Link>

))}

</div>
)}

</div>

</div>

</nav>

)

}

export default Navbar