export interface Project {
    slug: string;
    number: string;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    description: string;
    overview: string;
    scope: string[];
}

export const projects: Project[] = [
    {
        slug: "commercial-development",
        number: "001",
        title: "Commercial Development",
        category: "Commercial",
        location: "Nairobi, Kenya",
        year: "2025",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
        description: "Multi-story commercial complex featuring cutting-edge architectural glass and reinforced steel structures.",
        overview: "A premier commercial hub designed to meet modern corporate demands with high energy efficiency and structural longevity.",
        scope: ["Substructure & Foundation", "Structural Steel Framing", "Facade Engineering", "MEP Integration"]
    },
    {
        slug: "residential-development",
        number: "002",
        title: "Residential Development",
        category: "Residential",
        location: "Nairobi, Kenya",
        year: "2025",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1400",
        description: "High-end residential apartment block engineered for sustainable urban living and elite architectural appeal.",
        overview: "Engineered with precision concrete works and contemporary layouts to provide enduring comfort and structural safety.",
        scope: ["Reinforced Concrete Framework", "Interior Finishing", "Landscape Engineering", "Infrastructure Services"]
    },
    {
        slug: "industrial-project",
        number: "003",
        title: "Industrial Complex",
        category: "Industrial",
        location: "Mombasa Road, Kenya",
        year: "2026",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1400",
        description: "Large-scale industrial warehouse and logistics center built with heavy-duty structural steel and reinforced concrete.",
        overview: "Designed for high load-bearing capacity, seamless logistical flow, and long-term operational resilience.",
        scope: ["Heavy Earthworks", "Industrial Slab Pouring", "Steel Truss Erection", "Safety Systems"]
    }
];