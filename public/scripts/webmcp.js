/**
 * WebMCP — Expose portfolio tools to AI agents
 * Spec: https://github.com/webmachinelearning/webmcp
 */

const profileData = {
  name: "Julien Dhilly",
  title: "Architecte Logiciel & Lead Dev Freelance",
  location: "Rennes, France",
  experience: ">15 ans",
  available: true,
  roles: ["Architecte logiciel", "Lead Dev", "Développeur Freelance"],
  skills: {
    front: ["TypeScript", "VueJS", "Angular", "Svelte", "Vanilla JS"],
    back: ["NestJS", "NodeJS", "Laravel", "PHP"],
    mobile: ["Flutter", "Dart"],
    devops: ["Docker", "CI/CD", "GitHub Actions"],
  },
  social: {
    linkedin: "https://www.linkedin.com/in/julien-dhilly-46979244/",
    github: "https://github.com/jdhilly",
  },
};

const projectsData = [
  { slug: "weproc", title: "Weproc", duration: "Jan. 2023 — en cours", stack: ["NestJS", "Angular", "AWS", "Kubernetes", "Temporal", "Claude Code", "CrewAI"] },
  { slug: "kelbillet", title: "KelBillet", duration: "5 ans (2011-2017)", stack: ["PHP", "Vanilla JS", "Varnish"] },
  { slug: "onestaff", title: "OneStaff", duration: "1 an (2020)", stack: ["Angular", "Laravel", "Docker"] },
  { slug: "industry-4", title: "TrackAdvance 4.0", duration: "18 mois (2020-2021)", stack: ["VueJS", "ElasticSearch", "Docker"] },
  { slug: "groupymarket", title: "Groupy Market", duration: "6 mois (2021-2022)", stack: ["Angular SSR", "NestJS", "PostgreSQL"] },
  { slug: "testo", title: "Testo Check", duration: "4 mois (2021)", stack: ["Flutter", "NestJS", "Firebase"] },
  { slug: "pitch", title: "Pitch — Armada Production", duration: "2021", stack: ["Flutter", "Firebase", "FFmpeg"] },
  { slug: "salaun", title: "Salaün Holidays", duration: "5 mois (2022)", stack: ["Laravel", "Bootstrap"] },
  { slug: "cine35", title: "Ciné35", duration: "2 mois (2021)", stack: ["VueJS", "Bootstrap"] },
];

if ('modelContext' in navigator) {
  // Tool 1: Get full profile
  navigator.modelContext.registerTool({
    name: "getProfile",
    description: "Returns the complete profile of Julien Dhilly: skills, experience, availability, location and contact info.",
    inputSchema: { type: "object", properties: {} },
    handler: async () => profileData,
  });

  // Tool 2: List projects
  navigator.modelContext.registerTool({
    name: "listProjects",
    description: "Returns the list of Julien Dhilly's portfolio projects with their stack and duration.",
    inputSchema: { type: "object", properties: {} },
    handler: async () => projectsData,
  });

  // Tool 3: Check availability
  navigator.modelContext.registerTool({
    name: "checkAvailability",
    description: "Check if Julien Dhilly is currently available for freelance missions.",
    inputSchema: { type: "object", properties: {} },
    handler: async () => ({
      available: true,
      location: "Rennes, France",
      remote: true,
      message: "Disponible pour des missions freelance à Rennes et en remote.",
    }),
  });

  console.log("[WebMCP] 3 tools registered: getProfile, listProjects, checkAvailability");
} else {
  console.log("[WebMCP] navigator.modelContext not available (Chrome 146+ required)");
}
