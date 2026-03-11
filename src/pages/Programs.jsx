
import ProgramCard from "../components/ProgramCard"
import programs from "../date/programs"

function Programs(){

return(

<section className="bg-gray-50 py-24">

<div className="max-w-7xl mx-auto px-6">

{/* Section Header */}

<div className="text-center max-w-2xl mx-auto">

<h1 className="text-4xl md:text-5xl font-bold text-navy">
Our Programs
</h1>

<p className="mt-4 text-gray-600">
Explore structured programs designed to build health awareness,
discipline and personal transformation.
</p>

</div>

{/* Programs Grid */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

{programs.map(program => (

<ProgramCard
key={program.id}
icon={program.icon}
title={program.title}
description={program.description}
/>

))}

</div>

</div>

</section>

)

}

export default Programs