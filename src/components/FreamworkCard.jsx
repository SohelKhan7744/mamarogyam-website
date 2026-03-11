

function FrameworkCard({title, description,icon:Icon}){

return(

<div className="bg-white border p-8 rounded-xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition">

<div className="flex justify-center mb-4">

<Icon size={40} className="text-mustard"/>

</div>


<h3 className="font-bold text-lg text-navy">

{title}

</h3>

<p className="mt-3 text-gray-600 text-sm leading-relaxed">

{description}

</p>

</div>

)

}

export default FrameworkCard