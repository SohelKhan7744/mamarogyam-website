import { Link } from "react-router-dom"
import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import blogPosts from "../date/blogPosts"

function Navbar() {

const [search,setSearch] = useState("")
const [showSearch,setShowSearch] = useState(false)
const [mobileMenu,setMobileMenu] = useState(false)

const filteredPosts = blogPosts.filter(post =>
post.title.toLowerCase().includes(search.toLowerCase())
)

return (

<nav className="bg-navy text-white shadow-md relative">

<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

{/* Logo */}

<Link to="/" className="text-xl font-bold text-mustard">
Mamarogyam
</Link>


{/* Desktop Navigation */}

<div className="hidden md:flex items-center space-x-8 text-sm font-medium">

<Link className="hover:text-mustard transition" to="/">Home</Link>
<Link className="hover:text-mustard transition" to="/about">About</Link>
<Link className="hover:text-mustard transition" to="/programs">Programs</Link>
<Link className="hover:text-mustard transition" to="/knowledge">Knowledge</Link>
<Link className="hover:text-mustard transition" to="/contact">Contact</Link>

</div>


{/* Search Icon */}

<div className="flex items-center gap-4">

<button
onClick={()=>setShowSearch(!showSearch)}
className="hover:text-mustard"
>
<Search size={20}/>
</button>


{/* Mobile Menu Button */}

<button
className="md:hidden"
onClick={()=>setMobileMenu(!mobileMenu)}
>
{mobileMenu ? <X size={22}/> : <Menu size={22}/>}
</button>

</div>

</div>


{/* Search Bar */}

{showSearch && (

<div className="bg-white py-3 px-6 border-t relative">

<input
type="text"
placeholder="Search health articles..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full border px-4 py-2 rounded text-black focus:outline-none"
/>

{/* Results */}

{search && (

<div className="absolute left-6 right-6 bg-white shadow-lg mt-2 rounded max-h-60 overflow-y-auto">

{filteredPosts.length === 0 && (
<p className="p-3 text-gray-500 text-sm">
No articles found
</p>
)}

{filteredPosts.map(post => (

<Link
key={post.id}
to="/knowledge"
className="block px-4 py-2 hover:bg-gray-100 text-sm text-black"
>

{post.title}

</Link>

))}

</div>

)}

</div>

)}


{/* Mobile Menu */}

{mobileMenu && (

<div className="md:hidden bg-navy border-t border-gray-700">

<div className="flex flex-col px-6 py-4 space-y-4">

<Link onClick={()=>setMobileMenu(false)} to="/">Home</Link>
<Link onClick={()=>setMobileMenu(false)} to="/about">About</Link>
<Link onClick={()=>setMobileMenu(false)} to="/programs">Programs</Link>
<Link onClick={()=>setMobileMenu(false)} to="/knowledge">Knowledge</Link>
<Link onClick={()=>setMobileMenu(false)} to="/contact">Contact</Link>

</div>

</div>

)}

</nav>

)

}

export default Navbar