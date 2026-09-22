export interface Service {
    slug: string;
    number: string;
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
        number: "01",
        title: "Building Construction",
        tagline:
            "Precision execution from ground-up structural frameworks to final architectural finishes.",
        description:
            "We deliver commercial, residential, and industrial structures with rigorous adherence to engineering tolerances, safety compliance, and timeline management. Every phase of the construction lifecycle is overseen to guarantee structural longevity.",
        image:
            "https://images.unsplash.com/photo-1541888946425-d0fbb18f864e?q=80&w=1200&auto=format&fit=crop",
        features: [
            "Full-scale site execution & project management",
            "Reinforced concrete and structural steel framing",
            "Foundation engineering and earthworks",
            "Quality assurance & material stress testing",
        ],
        relatedProjectSlug: "commercial-tower-delta",
        relatedProjectTitle: "Delta Commercial Complex",
    },
    {
        slug: "civil-engineering",
        number: "02",
        title: "Civil Engineering",
        tagline:
            "Robust infrastructure solutions engineered for heavy-duty performance and public utility.",
        description:
            "From earthworks and drainage systems to urban infrastructure development, our civil engineering team applies rigorous engineering standards to ensure public safety, longevity, and environmental sustainability.",
        image:
            "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
        features: [
            "Site grading, earthworks, and excavation planning",
            "Stormwater management and subsurface drainage systems",
            "Roadway paving and heavy access infrastructure",
            "Geotechnical site investigation and soil stabilization",
        ],
        relatedProjectSlug: "industrial-park-phase1",
        relatedProjectTitle: "Athi River Industrial Park",
    },
    {
        slug: "structural-works",
        number: "03",
        title: "Structural Works",
        tagline:
            "Structural systems designed and executed for strength, safety, and long-term stability.",
        description:
            "Our structural works cover the calculation, design, and physical execution of load-bearing systems — from reinforced foundations to steel and concrete framing — ensuring every structure performs exactly as engineered.",
        image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        features: [
            "Structural design and load calculation",
            "Steel and reinforced concrete framing",
            "Retrofitting and structural reinforcement",
            "On-site structural quality inspection",
        ],
        relatedProjectSlug: "commercial-tower-delta",
        relatedProjectTitle: "Delta Commercial Complex",
    },
    {
        slug: "project-management",
        number: "04",
        title: "Project Management",
        tagline:
            "End-to-end oversight keeping every project on schedule, on budget, and to specification.",
        description:
            "We manage the full construction process — coordinating contractors, timelines, procurement, and site safety — so that each project moves from planning to handover without compromise on quality or cost.",
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        features: [
            "Timeline and budget control",
            "Contractor and subcontractor coordination",
            "Site safety and compliance oversight",
            "Procurement and materials logistics",
        ],
        relatedProjectSlug: "residential-villa-kilimani",
        relatedProjectTitle: "Kilimani Executive Residence",
    },
    {
        slug: "renovation-development",
        number: "05",
        title: "Renovation & Development",
        tagline:
            "Transforming existing structures through renovation, upgrades, and redevelopment.",
        description:
            "We assess, reinforce, and modernize existing buildings — extending their usable life and improving performance while preserving structural integrity throughout the renovation process.",
        image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
        features: [
            "Structural assessment and feasibility studies",
            "Renovation and interior reconfiguration",
            "Building upgrades and system modernization",
            "Redevelopment planning and execution",
        ],
        relatedProjectSlug: "residential-villa-kilimani",
        relatedProjectTitle: "Kilimani Executive Residence",
    },
];