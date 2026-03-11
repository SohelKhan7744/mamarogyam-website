import Button from "./Button"

function ProgramCard({title, description, icon:Icon}){

return(

<div className="bg-white shadow-md p-8 rounded-xl text-center hover:shadow-lg transition">

<div className="flex justify-center mb-4">

<Icon size={42} className="text-mustard"/>

</div>

<h3 className="text-xl font-bold text-primary">

{title}

</h3>

<p className="mt-3 text-gray-600">

{description}

</p>

<div className="mt-6">

<Button text="Learn More →"/>

</div>

</div>

)

}

export default ProgramCard