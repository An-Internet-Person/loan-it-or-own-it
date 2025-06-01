const scenarios = [
  {
    text: "Would you rather:\n1. Own a car and deal with gas, insurance, traffic, and solo commutes\nOR\n2. Use a free, clean, public transit system with bikes, buses, and self-driving taxis?",
    choices: ["Own a car", "Access shared transit"],
    prosCons: [
      {
        pros: [
          "Personal control over schedule",
          "Privacy",
          "Familiar experience"
        ],
        cons: [
          "Expensive upkeep",
          "Pollutes the environment",
          "Stress from traffic",
          "Isolated commuting"
        ]
      },
      {
        pros: [
          "Free, eco-friendly travel",
          "No insurance, gas, or repairs",
          "Connects you with the community",
          "Less stress and more freedom"
        ],
        cons: [
          "You may have to share space with strangers",
          "Limited customization of your ride"
        ]
      }
    ]
  },

  {
    text: "Would you rather:\n1. Struggle to pay rent to a slumlord with the slim chance of homeownership\nOR\n2. Have a long-term home + a short-term travel home every year, both free of charge?",
    choices: ["Rent from slumlord", "Access housing for life"],
    prosCons: [
      {
        pros: [
          "Possible property ownership (someday)",
          "Familiar private market system"
        ],
        cons: [
          "Rent increases regularly",
          "Eviction risk with job loss or illness",
          "Predatory landlords",
          "Massive financial stress"
        ]
      },
      {
        pros: [
          "Total housing security",
          "No rent or mortgage",
          "Free travel housing",
          "No risk of foreclosure"
        ],
        cons: [
          "No resale profit",
          "Community-managed housing (not private)"
        ]
      }
    ]
  },

  {
    text: "Would you rather:\n1. Buy expensive groceries from a wasteful chain store\nOR\n2. Access a community-run food center that’s always free and fresh?",
    choices: ["Buy from chain store", "Use community food center"],
    prosCons: [
      {
        pros: [
          "Wide selection year-round",
          "No need for interaction"
        ],
        cons: [
          "Rising prices",
          "Massive food waste",
          "Poor worker treatment",
          "Profits leave your town"
        ]
      },
      {
        pros: [
          "Nutritious food always available",
          "Supports local growers",
          "Zero waste system",
          "Food is a right, not a product"
        ],
        cons: [
          "Less exotic food out of season",
          "Might involve talking to a neighbor"
        ]
      }
    ]
  },

  {
    text: "Would you rather:\n1. Take out $60K in student loans and pay them off for decades\nOR\n2. Learn anything you want, anytime, totally free?",
    choices: ["Debt-based college", "Access free lifelong learning"],
    prosCons: [
      {
        pros: [
          "Accredited degree recognized by employers",
          "Familiar education model"
        ],
        cons: [
          "Massive debt burden",
          "Limited access based on income",
          "Curriculum often tied to market demand"
        ]
      },
      {
        pros: [
          "No debt, no gatekeeping",
          "Learn at your own pace and interest",
          "Knowledge-sharing with others builds community"
        ],
        cons: [
          "Some employers may be stuck in the old system",
          "You may fall in love with medieval poetry and become unhirable (but happy)"
        ]
      }
    ]
  },

  {
    text: "Would you rather:\n1. Buy tools you only use a few times a year\nOR\n2. Access a free tool library with everything from drills to 3D printers?",
    choices: ["Own tools", "Access shared tool library"],
    prosCons: [
      {
        pros: [
          "Tools are always on hand",
          "No need to ask anyone"
        ],
        cons: [
          "Expensive for limited use",
          "Takes up space",
          "Most tools sit unused"
        ]
      },
      {
        pros: [
          "Free access to high-quality tools",
          "Less waste + more collaboration",
          "You might learn new skills"
        ],
        cons: [
          "Might have to wait for popular tools",
          "Slight risk of bonding with neighbors over a circular saw"
        ]
      }
    ]
  },

  {
    text: "Would you rather:\n1. Pay monthly for internet that’s bundled with ads, throttled speeds, and corporate surveillance\nOR\n2. Use free, fast, anonymous public internet managed by your local community?",
    choices: ["Pay for private internet", "Access free public net"],
    prosCons: [
      {
        pros: [
          "Familiar service providers",
          "Bundles with other utilities"
        ],
        cons: [
          "Expensive and inconsistent speeds",
          "Data sold to advertisers",
          "Low-income communities often excluded"
        ]
      },
      {
        pros: [
          "Free for everyone",
          "Fast, uncapped, ad-free",
          "Privacy protected by the community"
        ],
        cons: [
          "You might have to see an announcement about the community bake sale before loading TikTok"
        ]
      }
    ]
  }
  ,
{
  text: "Would you rather:\n1. Rely on expensive, patchy systems for childcare, eldercare, and mental health\nOR\n2. Be part of a community care commons—free access to trusted, trained caregivers for all ages?",
  choices: ["Go it alone with care", "Join the community care system"],
  prosCons: [
    {
      pros: [
        "Private, individualized service",
        "Choose your own providers"
      ],
      cons: [
        "Expensive and inconsistent quality",
        "Burnout from juggling everything",
        "Waitlists and inaccessibility"
      ]
    },
    {
      pros: [
        "Trusted, shared care workers",
        "Care is a right, not a luxury",
        "Reduced stress for families and caregivers"
      ],
      cons: [
        "Shared scheduling and decision-making",
        "You may bond deeply with a neighbor’s grandma"
      ]
    }
  ]
},

{
  text: "Would you rather:\n1. See a doctor, pay a copay, then get surprise-billed months later\nOR\n2. Get care from community-paid health workers—no bills, no insurance drama?",
  choices: ["Navigate the private health system", "Access community-based care"],
  prosCons: [
    {
      pros: [
        "Familiar providers and networks",
        "Choice of specialists"
      ],
      cons: [
        "Surprise bills, insurance nightmares",
        "Inaccessible for many",
        "Financial stress tied to illness"
      ]
    },
    {
      pros: [
        "All care is prepaid by the community",
        "Focus on health, not paperwork",
        "No cost at the point of service"
      ],
      cons: [
        "Shared planning for community health needs",
        "No one profits from your illness"
      ]
    }
  ]
},

{
  text: "Would you rather:\n1. In an emergency, fend for yourself or buy supplies at 3x markup\nOR\n2. Live in a system where food, water, housing, and care auto-distribute to those in crisis?",
  choices: ["Stockpile and scramble", "Rely on a shared disaster response system"],
  prosCons: [
    {
      pros: [
        "Full control over your own prep",
        "Independent choices"
      ],
      cons: [
        "Expensive, unpredictable, isolating",
        "Price gouging during crisis",
        "No safety net"
      ]
    },
    {
      pros: [
        "Built-in resilience and community support",
        "No one is left behind",
        "Solidarity in the face of chaos"
      ],
      cons: [
        "Shared decision-making on resource allocation",
        "You might have to share your backup chili with Bob next door"
      ]
    }
  ]
}
,
{
  text: "Would you rather:\n1. Spend most of your waking life doing paid labor just to afford basic survival\nOR\n2. Live in a world where survival is guaranteed and you’re free to contribute however you choose?",
  choices: ["Work to survive", "Live, then choose your work"],
  prosCons: [
    {
      pros: [
        "Familiar system with clear expectations",
        "Your income reflects market value"
      ],
      cons: [
        "Must work to live, even in jobs you hate",
        "Burnout, stress, and little time for creativity or rest",
        "Limited by availability of jobs, not passion"
      ]
    },
    {
      pros: [
        "Everyone’s basic needs are covered—housing, food, care",
        "People contribute based on passion, not pressure",
        "Work becomes meaningful, not mandatory"
      ],
      cons: [
        "You may not 'own' your success the same way",
        "Some people might choose to contribute less (and be annoying about it)"
      ]
    }
  ]
}
];
