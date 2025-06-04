const scenarios = [
  {
    id: "housing",
    summary: "Guarantee one long-term home and annual travel housing for every resident, using a public, non-profit housing pool. Homes cannot be sold for profit.",
    outcomes: {
      support: "Housing insecurity ends. People live without debt or landlord pressure. Travel becomes accessible to all.",
      oppose: "Rent continues rising. Evictions remain common. Homes sit empty while many sleep in cars or shelters."
    }
  },
  {
    id: "food",
    summary: "Establish a community-run food center where groceries are free for all residents, sourced locally and sustainably.",
    outcomes: {
      support: "Food insecurity disappears. Waste drops. Community growers thrive, and meals become communal, not commercial.",
      oppose: "Grocery prices keep rising. Poor nutrition and food deserts persist. Local farms lose ground to global chains."
    }
  },
  {
    id: "transit",
    summary: "Create a free public transit system including bikes, buses, and self-driving taxis, replacing most private car use.",
    outcomes: {
      support: "Pollution drops. Streets are calmer. Transit becomes a shared, stress-free right of movement.",
      oppose: "Car dependency continues. Traffic and emissions rise. Those without vehicles remain isolated."
    }
  },
  {
    id: "education",
    summary: "Provide lifelong access to free education for all people, regardless of age, income, or background.",
    outcomes: {
      support: "Debt-free learning becomes a norm. Creativity and knowledge spread freely across generations.",
      oppose: "Degrees remain paywalled. Learning becomes a luxury, and opportunity gaps keep growing."
    }
  },
  {
    id: "tools",
    summary: "Create a community tool library where residents can borrow equipment—from drills to 3D printers—at no cost.",
    outcomes: {
      support: "Innovation and DIY culture flourish. Fewer tools gather dust. Skills are shared across neighbors.",
      oppose: "Tools remain unused in garages. Access depends on wealth. Creativity stalls for many."
    }
  },
  {
    id: "internet",
    summary: "Build a free, fast, anonymous internet network owned and managed by the local community.",
    outcomes: {
      support: "Digital freedom thrives. Access becomes universal. No ads, throttling, or surveillance.",
      oppose: "Internet remains pay-to-play. Data gets sold. Marginalized groups stay offline."
    }
  },
  {
    id: "care",
    summary: "Develop a community care system providing free childcare, eldercare, and mental health support.",
    outcomes: {
      support: "Families thrive. Care becomes collaborative, not commercial. Stress and burnout decline.",
      oppose: "Care remains expensive and hard to access. People burn out trying to manage everything alone."
    }
  },
  {
    id: "healthcare",
    summary: "Replace private insurance with a publicly funded healthcare system—free at the point of care for all.",
    outcomes: {
      support: "Care is based on need, not wealth. No one fears medical bills. Doctors serve the public good.",
      oppose: "Insurance remains a maze. Illness continues to bankrupt families. Delayed care leads to preventable harm."
    }
  },
  {
    id: "emergency",
    summary: "Build an automated system to distribute food, water, and shelter during natural disasters or economic crises.",
    outcomes: {
      support: "Disaster response becomes fast and fair. No one is left scrambling or price-gouged.",
      oppose: "Emergencies remain chaotic. Relief comes too late—or not at all—for those in need."
    }
  },
  {
    id: "work",
    summary: "Guarantee everyone's basic survival so people can choose work based on passion—not pressure.",
    outcomes: {
      support: "Work becomes meaningful, not mandatory. Art, care, and creativity thrive without burnout.",
      oppose: "People stay stuck in jobs they hate just to survive. Stress and disconnection grow."
    }
  }
];