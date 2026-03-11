import Button from "./Button"
import { Link } from "react-router-dom"

function Hero(){

return(

<section className="bg-gradient-to-b from-gray-50 to-white py-28 text-center">

<div className="max-w-5xl mx-auto px-6">

<h1 className="text-5xl font-bold text-blue-800 leading-tight">

Understand Health  
<span className="text-mustard"> Before Disease Appears</span>

</h1>

<p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">

Mamarogyam teaches fundamental health principles from Ayurveda lifestyle wisdom,
yoga practices and disciplined living habits.

</p>

<div className="mt-10 flex justify-center gap-6 flex-wrap">

<Button text="Join Sunday Webinar"/>

<Link to="/challenge">
<Button text="Explore 30 Day Challenge" variant="outline"/>
</Link>

</div>

</div>

</section>

)

}

export default Hero