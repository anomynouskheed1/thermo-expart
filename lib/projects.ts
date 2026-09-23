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
        slug: "house-renovation",
        number: "001",
        title: "House Renovation", // TODO: replace with real project name
        category: "Renovation",
        location: "Nairobi, Kenya", // TODO: confirm
        year: "2026", // TODO: confirm
        image: "/images/projects/1.jpeg",
        gallery: [
            "/images/projects/2.jpeg",
            "/images/projects/3.jpeg",
            "/images/projects/4.jpeg",
            "/images/projects/5.jpeg",
            "/images/projects/6.jpeg",
            "/images/projects/7.jpeg",
            "/images/projects/8.jpeg",
            "/images/projects/9.jpeg",
            "/images/projects/10.jpeg",
            "/images/projects/11.jpeg",
            "/images/projects/12.jpeg",
            "/images/projects/13.jpeg",
            "/images/projects/14.jpeg",
            "/images/projects/15.jpeg",
            "/images/projects/16.jpeg",
        ],
        description:
            "A residential renovation project covering structural upgrades, finishing works and improved living spaces.", // TODO: replace with real description
        overview:
            "This renovation project focused on transforming an existing residential building — improving structural condition, interior finishes and overall functionality while preserving the character of the original home.", // TODO: replace with real overview
        scope: [
            "Structural Assessment",
            "Renovation & Reconfiguration",
            "Finishing & Interior Works",
            "Site Supervision & Handover",
        ], // TODO: confirm actual scope
    },
];