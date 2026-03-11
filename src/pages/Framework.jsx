import FrameworkCard from "../components/FreamworkCard"

function Framework(){

return(

<section className="max-w-7xl mx-auto py-20 px-6">

<h1 className="text-4xl font-bold text-primary text-center">
Mamarogyam Health Framework
</h1>

<p className="text-center mt-4 text-gray-600">
Learn → Implement → Track → Transform
</p>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

<FrameworkCard
title="Health Education"
description="Understanding how lifestyle habits influence health."
/>

<FrameworkCard
title="Ahar Vidhi"
description="Food discipline and digestion awareness."
/>

<FrameworkCard
title="Dinacharya"
description="Daily routine practices for balance."
/>

<FrameworkCard
title="Ritucharya"
description="Seasonal lifestyle adjustments."
/>

</div>

</section>

)

}

export default Framework