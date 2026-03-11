import BlogCard from "../components/BlogCard"
import blogPosts from "../date/blogPosts"
import { useState } from "react"

function Knowledge(){

const [search,setSearch] = useState("")

const filteredPosts = blogPosts.filter(post =>
post.title.toLowerCase().includes(search.toLowerCase())
)

return(

<section className="bg-gray-50 py-24">

<div className="max-w-7xl mx-auto px-6">

{/* Header */}

<div className="text-center max-w-2xl mx-auto">

<h1 className="text-4xl md:text-5xl font-bold text-navy">
Knowledge Center
</h1>

<p className="mt-4 text-gray-600">
Educational articles about Ayurveda lifestyle, yoga practices
and natural health wisdom.
</p>

</div>


{/* Search Bar */}

<div className="mt-10 flex justify-center">

<input
type="text"
placeholder="Search health topics..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full md:w-1/2 border border-gray-300 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-mustard"
/>

</div>


{/* Blog Grid */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

{filteredPosts.length > 0 ? (

filteredPosts.map(post => (

<BlogCard
key={post.id}
title={post.title}
category={post.category}
excerpt={post.excerpt}
/>

))

) : (

<p className="col-span-full text-center text-gray-500">
No articles found
</p>

)}

</div>

</div>

</section>

)

}

export default Knowledge