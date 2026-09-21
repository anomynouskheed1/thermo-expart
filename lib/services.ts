export interface Service {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
    features: string[];
    relatedProjectSlug: string;
    relatedProjectTitle: string;
}

export const services: Service[] = [
    {
        slug: "building-construction",
        title: "Building Construction",
        tagline: "Precision execution from ground-up structural frameworks to final architectural finishes.",
        description: "Our building construction practice delivers commercial, residential, and industrial structures with rigorous adherence to engineering tolerances, safety compliance, and timeline management. We oversee every phase of the construction lifecycle to guarantee structural longevity.",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f864e?q=80&w=1200&auto=format&fit=crop",
        features: [
            "Full-scale site execution & project management",
            "Reinforced concrete and structural steel framing",
            "Advanced foundation engineering and earthworks",
            "Quality assurance & rigorous material stress testing"
        ],
        relatedProjectSlug: "commercial-tower-delta",
        relatedProjectTitle: "Delta Commercial Complex"
    },
    {
        slug: "architectural-design",
        title: "Architectural Design",
        tagline: "Innovative spatial planning combined with structural integrity and modern aesthetics.",
        description: "We translate complex client visions into functional, striking architectural blueprints. Our design philosophy bridges environmental performance with clean structural lines, optimizing spatial flow and long-term usability.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        features: [
            "Concept development and 3D architectural rendering",
            "Detailed technical drawings & municipal compliance docs",
            "Sustainable material and energy efficiency planning",
            "Interior space optimization and layout design"
        ],
        relatedProjectSlug: "residential-villa-kilimani",
        relatedProjectTitle: "Kilimani Executive Residence"
    },
    {
        slug: "civil-engineering",
        title: "Civil Engineering",
        tagline: "Robust infrastructure solutions engineered for heavy-duty performance and public utility.",
        description: "From earthworks and drainage systems to urban infrastructure development, our civil engineering team applies advanced calculation standards to ensure public safety, longevity, and environmental sustainability.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
        features: [
            "Site grading, earthworks, and excavation planning",
            "Stormwater management and subsurface drainage systems",
            "Roadway paving and heavy access infrastructure",
            "Geotechnical site investigation and soil stabilization"
        ],
        relatedProjectSlug: "industrial-park-phase1",
        relatedProjectTitle: "Athi River Industrial Park"
    }
];