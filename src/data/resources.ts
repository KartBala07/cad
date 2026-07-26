export interface ResourceLink {
  title: string;
  url: string;
  description: string;
}

export interface ResourceGroup {
  heading: string;
  links: ResourceLink[];
}

export const RESOURCE_GROUPS: ResourceGroup[] = [
  {
    heading: "FRCDesign.org",
    links: [
      {
        title: "FRCDesign.org home",
        url: "https://frcdesign.org/",
        description:
          "An education partner of Onshape built specifically for FRC — learning course, design concept reference wiki, mechanism examples, and best practices, all from a competitive-robot perspective.",
      },
      {
        title: "FRC Design Learning Course",
        url: "https://frcdesign.org/learning-course/",
        description:
          "The full self-paced course this app's curriculum is structured after — takes you from zero to modeling a complete robot through staged, FRC-relevant projects.",
      },
      {
        title: "Design Resources & Wiki",
        url: "https://frcdesign.org/resources/",
        description:
          "Reference material on design concepts, mechanism breakdowns, and Onshape modeling best practices for FRC.",
      },
      {
        title: "Learning Course · Stage 1 introduction",
        url: "https://frcdesign.org/learning-course/stage1/introduction/",
        description:
          "Where FRCDesign.org's own course begins: box tubes, gussets, and two-stage gearboxes.",
      },
      {
        title: "Learning Course · Layout sketches",
        url: "https://www.frcdesign.org/learning-course/stage1/1D/layout-sketch/",
        description:
          "The top-down layout sketch technique this app covers in Stage 3 — straight from the source.",
      },
      {
        title: "Learning Course · Stage 4",
        url: "https://www.frcdesign.org/learning-course/stage4/",
        description:
          "Advanced workflow, collaboration, and strategic design — mirrors this app's final stage.",
      },
      {
        title: "Educator's Guide overview",
        url: "https://www.frcdesign.org/educators-guide/stage1/",
        description:
          "For mentors: how FRCDesign.org's course is meant to be taught and paced with a team.",
      },
    ],
  },
  {
    heading: "Onshape official",
    links: [
      {
        title: "Onshape Learning Center",
        url: "https://learn.onshape.com/",
        description:
          "Onshape's own free, official courses on sketching, part modeling, assemblies, drawings, and more.",
      },
      {
        title: "FeatureScript documentation",
        url: "https://cad.onshape.com/FsDoc/",
        description:
          "Full reference for writing custom FeatureScript features, covered in this app's Pro Workflow stage.",
      },
      {
        title: "Onshape blog: onboarding a FIRST team",
        url: "https://www.onshape.com/en/blog/how-to-onboard-your-first-robotics-team",
        description:
          "Onshape's own guidance for getting a new FRC team set up in the platform.",
      },
    ],
  },
];
