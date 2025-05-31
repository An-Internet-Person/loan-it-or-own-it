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
];
