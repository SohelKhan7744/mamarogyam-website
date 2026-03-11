import Button from "../components/Button"

function Apply() {

return (

<section className="bg-gray-50 py-24">

<div className="max-w-3xl mx-auto px-6">

{/* Header */}

<div className="text-center">

<h1 className="text-4xl font-bold text-navy">
Program Application
</h1>

<p className="mt-4 text-gray-600">
Apply for the Mamarogyam programs and begin your journey toward
disciplined and conscious living.
</p>

</div>


{/* Form Card */}

<form className="mt-12 bg-white shadow-lg rounded-xl p-8 space-y-6">

<input
type="text"
placeholder="Full Name"
className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard"
/>

<input
type="number"
placeholder="Age"
className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard"
/>

<input
type="text"
placeholder="City"
className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard"
/>

<input
type="tel"
placeholder="Phone"
className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard"
/>

<input
type="email"
placeholder="Email"
className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard"
/>

<input
type="text"
placeholder="Occupation"
className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard"
/>


<select className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard">

<option value="">Program Applying For</option>
<option>Mamarogyam</option>
<option>Tejasvi Bhava</option>
<option>Connect to Soul</option>

</select>


<textarea
placeholder="Purpose of joining"
rows="4"
className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard"
/>


<label className="flex items-start gap-2 text-sm text-gray-600">

<input type="checkbox" className="mt-1"/>

<span>
I understand this program provides health education and lifestyle
guidance and does not replace medical consultation.
</span>

</label>


<div className="pt-4 text-center">

<Button
type="submit"
text="Submit Application"
/>

</div>

</form>

</div>

</section>

)

}

export default Apply