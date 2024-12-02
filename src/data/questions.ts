
/**
 * This file contains the questions data for the quiz.
 */

const questionTypes = {
    1: "Multiple Choice",
    2: "True/False",
    3: "Open Ended"
}

const topics = [
    {
        id: 1,
        topic: "Climate Change and Mitigation Strategies",
        description: "Discover how planting trees, renewable energy, and restoring ecosystems can help fight climate change."
    },
    {
        id: 2,
        topic: "Environmental Issues and Effects",
        description: "Understand issues like pollution, ocean acidification, and the impact of cities on the environment."
    },
    {
        id: 3,
        topic: "Policies and Global Efforts",
        description: "Explore international agreements, policies, and models used to tackle climate and environmental issues."
    }
]

let questions = [
    { 
        question: "Why is planting trees not always a perfect solution to climate change?",
        answer: "Trees take time to grow and absorb carbon, they may not survive in unsuitable climates, and monoculture plantations can harm biodiversity",	
        options: [
            "Planting trees increases atmospheric carbon dioxide levels.",
            "Trees release harmful greenhouse gases like methane during photosynthesis.",
            "Planting trees accelerates global warming by trapping heat in the atmosphere."
        ],
        type: 1,
        points: 20,
        difficulty: "Medium",
        explanation: "While planting trees is beneficial, it's not a silver bullet for climate change. Trees require years to reach their full carbon-sequestration potential, and planting the wrong species can damage ecosystems and reduce biodiversity.",
        topic: "Climate Change and Solutions"
    },
    {
        question: "Why is reducing single-use plastics important for the environment?",
        answer: "Single-use plastics contribute to pollution, harm marine life, and take centuries to decompose.",
        options: [
            "Single-use plastics decompose within a few days.",
            "Reducing single-use plastics increases carbon emissions.",
            "Marine animals benefit from ingesting single-use plastics."
        ],
        type: 1,
        points: 20,
        difficulty: "Easy",
        explanation: "Single-use plastics like straws, bags, and bottles are a major source of pollution in oceans and landfills. They harm marine life, release toxic chemicals, and persist in the environment for hundreds of years.",
        topic: "Environmental Issues and Effects"
    },
    {
        question: "Why is switching to renewable energy beneficial?",
        answer: "Renewable energy reduces greenhouse gas emissions, decreases reliance on fossil fuels, and promotes energy sustainability.",
        options: [
            "Renewable energy increases fossil fuel consumption.",
            "Using renewable energy significantly depletes water resources.",
            "Renewable energy systems cannot produce electricity during sunny or windy conditions."
        ],
        type: 1,
        points: 20,
        difficulty: "Medium",
        explanation: "Renewable energy sources like solar, wind, and hydropower generate electricity without emitting greenhouse gases. They help combat climate change, reduce air pollution, and create a more sustainable energy system.",
        topic: "Climate Change and Solutions"
    },
    {
        question: "Why is water conservation important for environmental sustainability?",
        answer: "Water conservation helps preserve freshwater resources, reduces energy consumption, and ensures availability for future generations.",
        options: [
            "Conserving water leads to droughts in water-rich regions.",
            "Water conservation causes pollution in freshwater ecosystems.",
            "Reducing water usage increases overall environmental damage."
        ],
        type: 1,
        points: 20,
        difficulty: "Easy",
        explanation: "Freshwater is a finite resource. Conserving water helps protect ecosystems, reduces the energy needed to treat and distribute water, and ensures availability in times of scarcity.",
        topic: "Environmental Issues and Effects"
    },
    {
        question: "Why can renewable energy sources still have an environmental impact?",
        answer: "Renewable energy sources, like wind and solar, require large land areas, can disrupt local ecosystems, and rely on materials with mining-related impacts.",
        options: [
            "Renewable energy sources release more carbon dioxide than coal plants.",
            "Solar panels and wind turbines function better in polluted environments.",
            "Using renewable energy depletes non-renewable resources like sunlight and wind."
        ],
        type: 1,
        points: 50,
        difficulty: "Hard",
        explanation: "While renewable energy is cleaner, building solar farms and wind turbines can affect wildlife habitats and require rare materials, which have their own environmental costs during extraction.",
        topic: "Climate Change and Solutions"
    },
    {
        question: "Why is relying solely on electric vehicles (EVs) not a complete solution to reducing carbon emissions?",
        answer: "Producing EV batteries involves high energy consumption, mining for rare materials, and electricity used to charge EVs may still come from fossil fuels.",
        options: [
            "Electric vehicles emit more carbon dioxide than diesel engines during operation.",
            "Switching to EVs increases the atmospheric concentration of harmful ozone gases.",
            "Electric vehicles are less energy-efficient than traditional gasoline cars in all conditions."
        ],
        type: 1,
        points: 50,
        difficulty: "Hard",
        explanation: "While EVs emit less carbon during use, their production and reliance on electricity from non-renewable sources can limit their overall environmental benefits.",
        topic: "Climate Change and Solutions"
    },
    {
        question: "Switching to 100% solar power in urban areas is always more environmentally sustainable than mixed renewable energy sources.",
        answer: false,
        type: 2,
        points: 40,
        difficulty: "Medium",
        explanation: "A mix of renewable energy sources often provides better energy stability and efficiency. Over-relying on solar energy in urban areas can cause challenges like storage issues and inefficient land use.",
        topic: "Climate Change and Solutions"
    },
    {
        question: "Producing electric vehicle batteries has a smaller environmental footprint than producing gasoline for cars, even when considering resource extraction and energy use.",
        answer: false,
        type: 2,
        points: 50,
        difficulty: "Hard",
        explanation: "EV battery production involves mining and processing rare materials, which can have a significant environmental impact. While EVs are cleaner in the long term, their initial footprint is considerable.",
        topic: "Environmental Issues and Effects"
    },
    {
        question: "Reforestation efforts can sometimes lead to a net increase in carbon emissions if native forests are replaced by fast-growing non-native species.",
        answer: true,
        type: 2,
        points: 40,
        difficulty: "Medium",
        explanation: "Replacing native forests with fast-growing monocultures can lead to soil degradation, reduced carbon storage capacity, and harm to local biodiversity, potentially causing more harm than good.",
        topic: "Climate Change and Solutions"
    },
    {
        question: "Hydroelectric power plants have no negative impact on local ecosystems or biodiversity.",
        answer: false,
        type: 2,
        points: 30,
        difficulty: "Easy",
        explanation: "Hydroelectric power can disrupt aquatic ecosystems, alter water flow, and displace wildlife. While renewable, it still has environmental trade-offs.",
        topic: "Environmental Issues and Effects"
    },
    {
        question: "Carbon capture and storage (CCS) technology can reduce greenhouse gas emissions to zero in all industrial processes.",
        answer: false,
        type: 2,
        points: 30,
        difficulty: "Medium",
        explanation: "CCS technology is promising but not perfect. It cannot eliminate all emissions, and implementing it is energy-intensive and costly, making it an incomplete solution.",
        topic: "Policies and Global Efforts"
    },
    {
        question: "The tipping point at which polar ice caps may irreversibly melt, contributing significantly to rising sea levels, is referred to as the ________ threshold.",
        hint: "This term is often associated with a critical limit or boundary in climate systems.",
        type: 3,
        points: 40,
        difficulty: "Medium",
        topic: "Climate Change and Solutions",
        explanation: "The answer is climate or critical. Crossing this threshold could lead to catastrophic changes in global climate patterns and ecosystems."
    },
    {
        question: "The process of capturing carbon dioxide directly from the atmosphere for long-term storage is known as ________ ________ technology.",
        hint: "It involves removing CO2 from the air; think 'direct' and 'removal.'",
        type: 3,
        points: 50,
        difficulty: "Hard",
        topic: "Climate Change and Solutions",
        explanation: "The correct answer is Direct Air Capture. This technology aims to reduce atmospheric CO2 levels but is energy-intensive and costly at current scales."
    },
    {
        question: "The phenomenon where urban areas experience higher temperatures than surrounding rural areas due to human activities is called the ________ ________ effect.",
        hint: "It's named after the intense heat generated in cities, similar to a tropical island.",
        type: 3,
        points: 40,
        difficulty: "Medium",
        topic: "Environmental Issues and Effects",
        explanation: "The answer is Urban Heat Island. This effect results from factors like heat-absorbing surfaces, reduced vegetation, and increased energy use in cities."
    },
    {
        question: "The process by which certain gases, such as methane and nitrous oxide, trap more heat than carbon dioxide on a per molecule basis is called their ________ ________ potential.",
        hint: "Think of the term for how much warming a gas can cause compared to CO2.",
        type: 3,
        points: 50,
        difficulty: "Hard",
        topic: "Environmental Issues and Effects",
        explanation: "The answer is Global Warming Potential. It measures how much heat a gas traps in the atmosphere over a specific timeframe compared to CO2."
    },
    {
        question: "The international mechanism designed to compensate developing countries for reducing emissions from deforestation and forest degradation is known as ________.",
        hint: "It's an acronym that starts with 'Reducing Emissions.'",
        type: 3,
        points: 50,
        difficulty: "Hard",
        topic: "Policies and Global Efforts",
        explanation: "The correct answer is REDD+ (Reducing Emissions from Deforestation and Forest Degradation). It incentivizes sustainable forest management to mitigate climate change."
    },
    {
        question: "The chemical compound ________ ________, primarily emitted by agricultural activities, has a global warming potential approximately 300 times that of carbon dioxide.",
        hint: "It's a gas often associated with fertilizers and manure.",
        type: 3,
        points: 50,
        difficulty: "Hard",
        topic: "Environmental Issues and Effects",
        explanation: "The answer is nitrous oxide. This potent greenhouse gas is released from fertilizers, manure, and other farming practices."
    },
    {
        question: "The process by which the ocean absorbs carbon dioxide from the atmosphere, leading to a decrease in pH levels, is called ________ ________.",
        hint: "Think about what happens to the ocean's chemistry as CO2 dissolves in water.",
        type: 3,
        points: 50,
        difficulty: "Hard",
        topic: "Environmental Issues and Effects",
        explanation: "The answer is ocean acidification. This process harms marine ecosystems, particularly organisms with calcium carbonate shells or skeletons, like corals."
    },
    {
        question: "The practice of restoring ecosystems to their original condition to enhance carbon sequestration is known as ________ ________.",
        hint: "Think of bringing ecosystems back to their natural state.",
        type: 3,
        points: 40,
        difficulty: "Medium",
        topic: "Climate Change and Solutions",
        explanation: "The correct answer is ecological restoration. This involves actions like reforesting degraded lands or rehabilitating wetlands to combat climate change."
    },
    {
        question: "The international protocol aimed at phasing out substances like CFCs that deplete the ozone layer is called the ________ Protocol.",
        hint: "This protocol is named after a city in Canada.",
        type: 3,
        points: 40,
        difficulty: "Medium",
        topic: "Policies and Global Efforts",
        explanation: "The answer is Montreal. This landmark agreement has significantly reduced ozone-depleting chemicals and helped repair the ozone layer."
    },
    {
        question: "The scientific model that predicts climate change impacts by analyzing feedback loops and interactions between the atmosphere, oceans, and land is known as a ________ ________ model.",
        hint: "It's a model that analyzes the entire Earth's systems as they relate to climate.",
        type: 3,
        points: 50,
        difficulty: "Hard",
        topic: "Climate Change and Solutions",
        explanation: "The correct answer is climate system model. These models simulate complex Earth processes to inform climate policy and action."
    }
];


export { questions, questionTypes, topics }