import TestimonialCard from "../components/TextimonialCard"
import testimonials from "../date/testimonials"

function Testimonials(){

return(

<section className="max-w-7xl mx-auto py-20 px-6">

<h1 className="text-4xl font-bold text-primary text-center">
Testimonials
</h1>

<div className="grid md:grid-cols-3 gap-8 mt-12">

{testimonials.map(testimonial => (

<TestimonialCard
key={testimonial.id}
name={testimonial.name}
feedback={testimonial.feedback}
/>

))}

</div>

</section>

)

}

export default Testimonials