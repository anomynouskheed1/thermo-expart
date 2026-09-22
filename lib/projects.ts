export interface Project {
    slug: string;
    number: string;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    gallery: string[];
    description: string;
    overview: string;
    scope: string[];
}

export const projects: Project[] = [
    {
        slug: "commercial-development",
        number: "001",
        title: "Commercial Development", // TODO: replace with real project name
        category: "Commercial", // TODO: confirm
        location: "Nairobi, Kenya", // TODO: confirm
        year: "2025", // TODO: confirm
        image: "/images/projects/1.jpeg",
        gallery: [
            "/images/projects/2.jpeg",
            "/images/projects/3.jpeg",
            "/images/projects/4.jpeg",
        ],
        description:
            "Multi-story commercial complex featuring structural steel framing and modern architectural finishes.", // TODO: replace with real description
        overview:
            "A commercial development designed to meet modern demands with high structural performance and long-term durability.", // TODO: replace with real overview
        scope: [
            "Substructure & Foundation",
            "Structural Steel Framing",
            "Facade Engineering",
            "MEP Integration",
        ], // TODO: confirm actual scope
    },
    {
        slug: "residential-development",
        number: "002",
        title: "Residential Development", // TODO: replace with real project name
        category: "Residential", // TODO: confirm
        location: "Nairobi, Kenya", // TODO: confirm
        year: "2025", // TODO: confirm
        image: "/images/projects/5.jpeg",
        gallery: [
            "/images/projects/6.jpeg",
            "/images/projects/7.jpeg",
            "/images/projects/8.jpeg",
        ],
        description:
            "Residential development engineered for durability, comfort, and long-term structural safety.", // TODO: replace with real description
        overview:
            "Built with precision concrete work and contemporary layouts designed for lasting residential quality.", // TODO: replace with real overview
        scope: [
            "Reinforced Concrete Framework",
            "Interior Finishing",
            "Landscape Engineering",
            "Infrastructure Services",
        ], // TODO: confirm actual scope
    },
    {
        slug: "industrial-project",
        number: "003",
        title: "Industrial Complex", // TODO: replace with real project name
        category: "Industrial", // TODO: confirm
        location: "Nairobi, Kenya", // TODO: confirm
        year: "2026", // TODO: confirm
        image: "/images/projects/9.jpeg",
        gallery: [
            "/images/projects/10.jpeg",
            "/images/projects/11.jpeg",
            "/images/projects/12.jpeg",
        ],
        description:
            "Large-scale industrial facility built with heavy-duty structural steel and reinforced concrete.", // TODO: replace with real description
        overview:
            "Designed for high load-bearing capacity and long-term operational resilience.", // TODO: replace with real overview
        scope: [
            "Heavy Earthworks",
            "Industrial Slab Pouring",
            "Steel Truss Erection",
            "Safety Systems",
        ], // TODO: confirm actual scope
    },
    {
        slug: "renovation-project",
        number: "004",
        title: "Renovation Project", // TODO: replace with real project name
        category: "Renovation", // TODO: confirm
        location: "Nairobi, Kenya", // TODO: confirm
        year: "2026", // TODO: confirm
        image: "/images/projects/13.jpeg",
        gallery: [
            "/images/projects/14.jpeg",
            "/images/projects/15.jpeg",
            "/images/projects/16.jpeg",
        ],
        description:
            "Structural renovation and modernization of an existing building, upgraded for improved performance.", // TODO: replace with real description
        overview:
            "Reinforced and modernized while preserving structural integrity throughout the renovation process.", // TODO: replace with real overview
        scope: [
            "Structural Assessment",
            "Renovation & Reconfiguration",
            "System Modernization",
            "Redevelopment Execution",
        ], // TODO: confirm actual scope
    },
];