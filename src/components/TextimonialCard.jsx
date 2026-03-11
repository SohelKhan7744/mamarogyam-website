function TestimonialCard({name, feedback}){

return(

<div className="bg-white shadow p-6 rounded-md">

<p className="text-gray-700">

"{feedback}"

</p>

<h4 className="mt-4 font-semibold text-primary">

{name}

</h4>

</div>

)

}

export default TestimonialCard