function BlogCard({title, category, excerpt}) {

return (

<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

<span className="text-sm text-mustard font-medium">
{category}
</span>

<h3 className="text-xl font-semibold mt-2">
{title}
</h3>

<p className="text-gray-600 mt-3">
{excerpt}
</p>

<button className="mt-4 text-mustard font-medium">
Read Article →
</button>

</div>

)

}

export default BlogCard