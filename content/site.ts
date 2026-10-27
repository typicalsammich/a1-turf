export const origin=(process.env.NEXT_PUBLIC_SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL:'http://localhost:3000')).replace(/\/$/,'');
export const business={name:'A1 Turf & Hardscape LLC',phone:'(303) 874-8895',tel:'+13038748895',instagram:'https://www.instagram.com/a1.turf.hardscape.llc/',nextdoor:'https://nextdoor.com/pages/lawn-guru-bros-denver-co/'};
export const services=[
  {
    "slug": "pavers-patios",
    "name": "Pavers & Patios",
    "short": "A foundation for the good life.",
    "headline": "Beautiful underfoot. Extraordinary all around.",
    "intro": "Give everyday moments a place of their own. A tailored patio, a welcoming walkway, or a thoughtfully patterned driveway can change the way your home feels from the outside in.",
    "image": 12,
    "theme": "stone",
    "kicker": "PATTERN / TEXTURE / PRECISION",
    "sections": [
      {
        "title": "Start with how you live.",
        "text": "Room for a dining table. A comfortable route from the door to the garden. Space to gather without crowding the yard. The layout comes first, so the pattern serves the way you want to use your home."
      },
      {
        "title": "The details beneath the surface.",
        "text": "Ask about excavation, base material, compaction, edge restraint and drainage in your written scope. Colorado freeze-thaw cycles make preparation just as important as the surface you see."
      },
      {
        "title": "Make the pattern your own.",
        "text": "Explore Belgard paver options, contrasting borders, coordinated steps and a scale that suits the architecture. Material availability and the final pattern are confirmed during planning."
      }
    ],
    "options": [
      "Custom patios",
      "Walkways & garden paths",
      "Paver driveways",
      "Contrasting borders"
    ],
    "faqs": [
      [
        "Can you work with an existing patio?",
        "Share photos of the surface and surrounding grades. Replacement, extension or a new layout depends on the existing base and how water moves through the site."
      ],
      [
        "Do you offer Belgard pavers?",
        "The existing A1 website lists Belgard pavers and retaining-wall options. Specific styles, colors and availability are confirmed with your estimate."
      ],
      [
        "What affects the cost?",
        "Area, excavation, access, base preparation, material selection and finishing details affect the written quote."
      ]
    ],
    "images": [
      12,
      19,
      20,
      32
    ]
  },
  {
    "slug": "heated-driveways",
    "name": "Heated Driveways",
    "short": "Plan ahead for colder mornings.",
    "headline": "A warmer welcome. A considered winter plan.",
    "intro": "Exploring snow-melt heating for a driveway? Start with the surface, the slope and the utilities. This is a project that benefits from careful coordination before any paving begins.",
    "image": 28,
    "theme": "winter",
    "kicker": "WINTER / ACCESS / PLANNING",
    "sections": [
      {
        "title": "Consider the complete system.",
        "text": "Electric and hydronic snow-melt systems have different infrastructure, control and operating needs. Discuss the available approach with the team and appropriate qualified trades before selecting a surface."
      },
      {
        "title": "Plan the water’s next move.",
        "text": "Melting snow still needs a safe drainage route. Driveway slope, adjacent paths and the point where heated and unheated surfaces meet belong in the planning conversation."
      },
      {
        "title": "Scope before promises.",
        "text": "Current heated-driveway installation availability needs confirmation. Request a review of service scope, trade coordination, compatible materials and system requirements. Performance depends on weather, sizing, controls and operation."
      }
    ],
    "options": [
      "Surface compatibility",
      "Utility & controls planning",
      "Drainage coordination",
      "Replacement discussion"
    ],
    "faqs": [
      [
        "Is this service confirmed?",
        "Confirm heated-driveway availability directly with A1. This page is a planning guide and inquiry route, not a promise of installation."
      ],
      [
        "Will it stay clear in every storm?",
        "No universal performance guarantee is appropriate. Snowfall, temperature, wind, system capacity and controls affect results."
      ],
      [
        "Are these heated-driveway photos?",
        "No. These supplied photographs show driveway finishes only. Hidden heating systems cannot be verified from the images."
      ]
    ],
    "images": [
      28,
      29,
      31
    ]
  },
  {
    "slug": "turf-putting-greens",
    "name": "Turf & Putting Greens",
    "short": "More play. Less weekend upkeep.",
    "headline": "Your favorite green. Just outside the door.",
    "intro": "A lawn for family life. A putting green that turns ten spare minutes into your favorite part of the day. Shape the yard around what you enjoy.",
    "image": 23,
    "theme": "green",
    "kicker": "PLAY / PRACTICE / EVERYDAY LIVING",
    "sections": [
      {
        "title": "A yard with a purpose.",
        "text": "Choose landscape turf or a dedicated putting surface based on how the space will be used. A practice green needs its own conversation about layout, cup positions and the character of play."
      },
      {
        "title": "Good drainage starts below.",
        "text": "Subgrade, base preparation, seams, edges and drainage routes influence the finished surface. Pet-use areas deserve questions about cleaning, infill and how water leaves the yard."
      },
      {
        "title": "Lower maintenance is still maintenance.",
        "text": "Turf still needs debris removal and occasional grooming or cleaning. Surfaces can get hot in direct sun. Talk through shade, exposure, pets and daily use when choosing a product."
      }
    ],
    "options": [
      "Landscape turf",
      "Backyard putting greens",
      "Pet-use area planning",
      "Turf & paver combinations"
    ],
    "faqs": [
      [
        "Can turf surround a putting green?",
        "The supplied portfolio includes putting surfaces framed by landscape turf. Discuss the footprint, border and access during planning."
      ],
      [
        "Is turf maintenance-free?",
        "No. Debris removal, cleaning and periodic brushing may be needed. Follow the selected product’s care guidance."
      ],
      [
        "What should I send?",
        "Photos, approximate dimensions, sun exposure and how you want to use the space are a helpful start."
      ]
    ],
    "images": [
      11,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "slug": "retaining-walls",
    "name": "Retaining Walls",
    "short": "Give your landscape a new level.",
    "headline": "Purpose in every level. Presence in every line.",
    "intro": "Bring definition to changing grades. Retaining walls, seating edges and terraces create a more useful relationship between your home and the landscape around it.",
    "image": 5,
    "theme": "earth",
    "kicker": "GRADE / STRUCTURE / DEFINITION",
    "sections": [
      {
        "title": "Work with the land.",
        "text": "A slope can become a series of more useful spaces. Start with the height changes, nearby structures, access and what each level needs to accommodate."
      },
      {
        "title": "Water belongs in the design.",
        "text": "Discuss drainage, backfill and how water moves behind and around a wall. These details belong in a site-specific scope rather than being decided from a photograph."
      },
      {
        "title": "The right level of review.",
        "text": "Wall height, loading, soils and local requirements may call for permits or engineering. Confirm the necessary review for your property. No structural engineering credential is implied."
      }
    ],
    "options": [
      "Retaining-wall planning",
      "Landscape terraces",
      "Seating & garden edges",
      "Belgard wall options"
    ],
    "faqs": [
      [
        "Does every wall need engineering?",
        "Requirements depend on height, loading, site conditions and the local authority. Confirm the actual requirements before construction."
      ],
      [
        "Can a wall match my patio?",
        "Coordinated colors, caps and adjacent paving help a landscape read as one design. Ask about available combinations."
      ],
      [
        "What helps with an inquiry?",
        "Photos from above and below, approximate height and length, and nearby fences, structures and drains."
      ]
    ],
    "images": [
      5,
      1,
      22
    ]
  },
  {
    "slug": "concrete",
    "name": "Concrete",
    "short": "Clean lines. Everyday purpose.",
    "headline": "Quietly architectural. Built around your day.",
    "intro": "A generous landing. A crisp set of steps. A direct path from the street to the front door. Concrete gives useful outdoor spaces a calm, coherent foundation.",
    "image": 15,
    "theme": "concrete",
    "kicker": "FORM / FINISH / FUNCTION",
    "sections": [
      {
        "title": "Design the connections.",
        "text": "Think about door thresholds, steps, landings, furniture and the route people take through the space. Those relationships shape a slab just as much as its area."
      },
      {
        "title": "Choose the right expression.",
        "text": "Discuss a straightforward finish or decorative treatment where available. Look at real samples and portfolio details to understand color, texture and neighboring materials."
      },
      {
        "title": "Make room for the conditions.",
        "text": "Drainage, base preparation, joints and curing belong in the practical design. Seasonal weather affects scheduling. Concrete can crack; no crack-free guarantee is implied."
      }
    ],
    "options": [
      "Patios & landings",
      "Walkways",
      "Steps & connections",
      "Driveway inquiries"
    ],
    "faqs": [
      [
        "Can you coordinate concrete and rock?",
        "The supplied projects include concrete paths and steps framed by rock beds and planting. Discuss a coordinated layout in your scope."
      ],
      [
        "When can I use a new surface?",
        "Curing and use restrictions depend on the mix, conditions and application. Follow the project-specific instructions."
      ],
      [
        "Are decorative finishes available?",
        "Ask the team to confirm finishes, examples and availability. The final selection belongs in the written scope."
      ]
    ],
    "images": [
      15,
      16,
      17
    ]
  },
  {
    "slug": "rock-xeriscape",
    "name": "Rock & Xeriscape",
    "short": "A landscape with room to breathe.",
    "headline": "Naturally composed. Thoughtfully Colorado.",
    "intro": "Texture, planting and open space in balance. Decorative rock, boulders and deliberate pathways bring definition to a more water-conscious landscape.",
    "image": 14,
    "theme": "natural",
    "kicker": "TEXTURE / BALANCE / PLACE",
    "sections": [
      {
        "title": "A palette from the landscape.",
        "text": "Consider the scale of the home, the size of the rock, the rhythm of planting and the softness of the edges. Boulders and fine gravel have different roles in the composition."
      },
      {
        "title": "Water-conscious, not water-free.",
        "text": "Plant choices should suit exposure and water needs. Low-water plants still need establishment care. Irrigation planning, mulch and soil conditions matter."
      },
      {
        "title": "Connect the whole garden.",
        "text": "A stepping path or a defined planting bed gives rock areas a purpose. Consider maintenance access and where leaves or runoff will collect."
      }
    ],
    "options": [
      "Decorative rock beds",
      "Boulder accents",
      "Climate-suited planting",
      "Garden transitions"
    ],
    "faqs": [
      [
        "Does xeriscape mean only rock?",
        "No. A water-conscious yard can combine plants, gathering areas, paths, mulch and rock. The balance should suit how you live."
      ],
      [
        "Will it need irrigation?",
        "It may. Establishment and ongoing needs vary with plants, soil and weather. Ask about a site-specific plan."
      ],
      [
        "Can existing plants stay?",
        "Identify the plants you want to preserve. Their health and compatibility with the new layout can be reviewed."
      ]
    ],
    "images": [
      13,
      14,
      15,
      27,
      32
    ]
  },
  {
    "slug": "complete-redesigns",
    "name": "Complete Redesigns",
    "short": "One vision. A whole new outdoors.",
    "headline": "Rethink the space. Rediscover your home.",
    "intro": "When the whole yard needs a fresh perspective, bring the pieces together. Paving, turf, paths and gathering spaces can become one considered outdoor plan.",
    "image": 22,
    "theme": "redesign",
    "kicker": "VISION / CONNECTION / TRANSFORMATION",
    "sections": [
      {
        "title": "Begin with the big picture.",
        "text": "A quiet coffee. Family games. An evening around a table. Start with the experiences before dividing the yard into individual materials."
      },
      {
        "title": "Create a common language.",
        "text": "Repeat colors, align edges and connect routes so the patio, lawn and garden feel related. Plan drainage and irrigation with the layout instead of treating them as afterthoughts."
      },
      {
        "title": "Give it a clear scope.",
        "text": "Discuss priorities, budget, access, timing and whether the work should be phased. Review agreed materials and boundaries in writing before the project begins."
      }
    ],
    "options": [
      "Integrated turf & pavers",
      "Outdoor gathering spaces",
      "Putting-green combinations",
      "Phased property upgrades"
    ],
    "faqs": [
      [
        "Can work be phased?",
        "Discuss priorities and the practical sequence. Some groundwork may need to happen before later surface improvements."
      ],
      [
        "Is the cinematic a completed A1 project?",
        "No. The film is an AI-generated design illustration. The gallery separately presents actual work supplied by the business."
      ],
      [
        "Are before-and-after photos available?",
        "The supplied set includes progress and completed views of a matching pool-side layout. Viewpoints differ; other images are shown as finished work."
      ]
    ],
    "images": [
      2,
      3,
      6,
      22,
      21
    ]
  }
];
export const generalFaqs=[["How do I request a free estimate?","Use the guided planner or call (303) 874-8895. Share your location, project details and photos. Final scope and pricing follow a project review."],["Where do you work?","A1 has a verified Denver, Colorado presence and describes serving Colorado homeowners. Confirm availability for your address; additional cities are not automatically claimed."],["What are your hours?","Monday through Saturday, 6:00 AM–8:00 PM. Closed Sunday."],["Can services be combined?","The existing website offers complete redesigns combining turf, hardscape, irrigation and layout planning."],["Are these real project photos?","Yes. The gallery uses actual work photographs supplied for this website. Unverified project locations and specifications are not assigned."],["Is the homepage film real installation footage?","The film is an AI-generated transformation illustration, enhanced from the supplied video. It is labeled separately from the real project gallery."],["Are package prices guaranteed?","No. Advertised starting prices are reference points. Conditions, access, preparation, materials and the written scope determine your quote."]];
export const pageTitles:Record<string,string>={"":"Colorado Outdoor Living","services":"Services","gallery":"The Outdoor Collection","about":"About A1","get-estimate":"Start Your Transformation","contact":"Contact","service-areas":"Colorado Service Areas","service-areas/denver-co":"Hardscaping & Turf in Denver, CO","special-offers":"Special Offers","faq":"Questions & Answers","privacy-policy":"Privacy Policy","terms":"Website Terms"};
export const pagePaths=['','services',...services.map(s=>'services/'+s.slug),'gallery','about','get-estimate','contact','service-areas','service-areas/denver-co','special-offers','faq','privacy-policy','terms'];