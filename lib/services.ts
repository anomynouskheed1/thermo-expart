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
            "Professional construction works for quality residential and commercial buildings, from groundwork through completion.",
        description:
            "Professional construction works for quality residential and commercial buildings, from groundwork through completion.",
        image: "/images/services/building-construction.png",
        features: [
            "Groundwork and foundation works",
            "Structural build and framing",
            "Site supervision and quality checks",
            "Completion and handover",
        ],
        relatedProjectSlug: "commercial-development",
        relatedProjectTitle: "Commercial Development",
    },

    {
        slug: "residential-construction",
        number: "02",
        title: "Residential Construction",
        tagline:
            "Construction of homes and residential developments with careful attention to quality, detail and lasting results.",
        description:
            "Construction of homes and residential developments with careful attention to quality, detail and lasting results.",
        image: "/images/services/residential-construction.png",
        features: [
            "New home construction",
            "Residential estate development",
            "Quality finishes and detailing",
            "On-site project coordination",
        ],
        relatedProjectSlug: "residential-development",
        relatedProjectTitle: "Residential Development",
    },

    {
        slug: "commercial-construction",
        number: "03",
        title: "Commercial Construction",
        tagline:
            "Construction solutions for commercial spaces, business premises and developments built for practical use and long-term value.",
        description:
            "Construction solutions for commercial spaces, business premises and developments built for practical use and long-term value.",
        image: "/images/services/commercial-construction.png",
        features: [
            "Commercial premises construction",
            "Business and retail spaces",
            "Practical, durable build standards",
            "Coordinated project delivery",
        ],
        relatedProjectSlug: "commercial-development",
        relatedProjectTitle: "Commercial Development",
    },

    {
        slug: "renovation-remodeling",
        number: "04",
        title: "Renovation & Remodeling",
        tagline:
            "Transforming existing buildings through renovation, remodeling and carefully executed improvement works.",
        description:
            "Transforming existing buildings through renovation, remodeling and carefully executed improvement works.",
        image: "/images/services/renovation-remodeling.png",
        features: [
            "Building renovation and upgrades",
            "Interior and exterior remodeling",
            "Repair and restoration works",
            "Improvement planning and execution",
        ],
        relatedProjectSlug: "residential-development",
        relatedProjectTitle: "Residential Development",
    },

    {
        slug: "general-construction-works",
        number: "05",
        title: "General Construction Works",
        tagline:
            "Reliable construction execution covering a range of building, finishing and site works.",
        description:
            "Reliable construction execution covering a range of building, finishing and site works.",
        image: "/images/services/general-construction-works.png",
        features: [
            "General building works",
            "Site preparation and finishing",
            "Small to mid-scale construction jobs",
            "Flexible, reliable execution",
        ],
        relatedProjectSlug: "commercial-development",
        relatedProjectTitle: "Commercial Development",
    },
];