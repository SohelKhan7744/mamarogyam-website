import Hero from "../components/Hero"
import ProgramCard from "../components/ProgramCard"
import FrameworkCard from "../components/FreamworkCard"
import TestimonialCard from "../components/TextimonialCard"
import Button from "../components/Button"
import programs from "../date/programs"
import testimonials from "../date/testimonials"
import { Link } from "react-router-dom"
import { BookOpen, Utensils, Sun, Leaf } from "lucide-react"
import {Briefcase, Sunset, Moon } from "lucide-react"

function Home() {

return (

<div className="bg-gray-50">

{/* HERO */}

<Hero/>

{/* CORE PHILOSOPHY */}

<section className="max-w-7xl mx-auto py-20 px-6 text-center">

<h2 className="text-4xl font-bold text-navy">
Core Philosophy
</h2>

<p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

Modern life has disconnected people from the fundamental principles of health.
Irregular routines, improper food habits and stress gradually disturb the natural balance of the body.
Health is not created by medicine alone.
Health is created by disciplined living.
Mamarogyam teaches individuals how to align their daily life with natural rhythms through food discipline, daily routine, seasonal awareness, and mindful practices.
Mamarogyam helps individuals return to fundamental lifestyle disciplines through education, implementation and habit tracking.

</p>

</section>


{/* HEALTH FRAMEWORK */}

<section className="bg-white py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center text-navy">
Mamarogyam Health Framework
</h2>

<p className="text-center mt-4 text-gray-500 text-lg">
Learn → Implement → Track → Transform
</p>

<div className="grid md:grid-cols-4 gap-10 mt-14">

<FrameworkCard
icon={BookOpen}
title="Health Education"
description="Understanding how daily habits influence digestion, energy and mental clarity."
/>

<FrameworkCard
icon={Utensils}
title="Ahar Vidhi"
description="Food discipline and understanding meal timing, digestion and natural nutrition."
/>

<FrameworkCard
icon={Sun}
title="Dinacharya"
description="Daily routine practices that help regulate the body and mind."
/>

<FrameworkCard
icon={Leaf}
title="Ritucharya"
description="Seasonal lifestyle adjustments for better health balance."
/>

</div>

</div>

</section>


{/* PROGRAMS */}

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-navy text-center">
Programs
</h2>

<div className="grid md:grid-cols-3 gap-10 mt-14">

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


{/* DAILY DISCIPLINE */}

<section className="py-20 bg-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-navy text-center">
Daily Discipline Model
</h2>

<div className="grid md:grid-cols-4 gap-10 mt-14">

{/* Morning */}

<div className="bg-gray-50 p-6 rounded-xl shadow text-center">

<div className="flex justify-center mb-3">
<Sun size={36} className="text-mustard"/>
</div>

<h3 className="font-bold text-lg text-navy">Morning</h3>

<ul className="mt-3 text-gray-600 text-sm space-y-2">
<li>Wake up discipline</li>
<li>Prayer or reflection</li>
<li>Yoga and pranayama</li>
<li>Natural cleansing</li>
</ul>

</div>


{/* Daytime */}

<div className="bg-gray-50 p-6 rounded-xl shadow text-center">

<div className="flex justify-center mb-3">
<Briefcase size={36} className="text-mustard"/>
</div>

<h3 className="font-bold text-lg text-navy">Daytime</h3>

<ul className="mt-3 text-gray-600 text-sm space-y-2">
<li>Balanced work routine</li>
<li>Mindful food habits</li>
<li>Healthy activity</li>
</ul>

</div>


{/* Evening */}

<div className="bg-gray-50 p-6 rounded-xl shadow text-center">

<div className="flex justify-center mb-3">
<Sunset size={36} className="text-mustard"/>
</div>

<h3 className="font-bold text-lg text-navy">Evening</h3>

<ul className="mt-3 text-gray-600 text-sm space-y-2">
<li>Light meal</li>
<li>Reflection and relaxation</li>
</ul>

</div>


{/* Night */}

<div className="bg-gray-50 p-6 rounded-xl shadow text-center">

<div className="flex justify-center mb-3">
<Moon size={36} className="text-mustard"/>
</div>

<h3 className="font-bold text-lg text-navy">Night</h3>

<ul className="mt-3 text-gray-600 text-sm space-y-2">
<li>Sleep discipline</li>
<li>Early rest</li>
</ul>

</div>

</div>

</div>

</section>

{/* WEBINAR */}

<section className="py-20 bg-mustard text-center">

<div className="max-w-3xl mx-auto text-navy">

<h2 className="text-4xl font-bold">
Weekly Health Webinar
</h2>

<p className="mt-4">
Every Sunday — 8:30 AM to 10:30 AM
</p>

<p className="mt-6">
Topics include science of fasting, food awareness, daily routine discipline and natural health principles.
</p>

<div className="mt-8">

<Button text="Register for Webinar"/>

</div>

</div>

</section>


{/* TESTIMONIALS */}

<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-navy text-center">
Participant Experiences
</h2>

<div className="grid md:grid-cols-3 gap-10 mt-14">

{testimonials.map(testimonial => (

<TestimonialCard
key={testimonial.id}
name={testimonial.name}
feedback={testimonial.feedback}
/>

))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 bg-navy text-center text-white">

<h2 className="text-4xl font-bold">
Start Your Health Transformation
</h2>

<p className="mt-4 text-gray-200">
Learn the principles. Implement discipline. Transform your lifestyle.
</p>

<div className="mt-8">

<Link to="/apply">
<Button text="Apply for Program"/>
</Link>

</div>

</section>

</div>

)

}

export default Home