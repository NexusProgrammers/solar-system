import { projectsData } from "@/data/data";

export const getProjectsForFilter = (filter) => {
  switch (filter) {
    case "NEWEST":
      return projectsData[0].first;
    case "RESIDENTIAL":
      return projectsData[0].first;
    case "COMMERCIAL":
      return projectsData[0].second;
    case "INDUSTRIAL":
      return projectsData[0].third;
    case "AGRICULTURAL":
      return projectsData[0].fourth;
    case "OFF-GRID":
      return projectsData[0].fifth;
    case "GRID-TIED":
      return projectsData[0].sixth;
    case "EV CHARGING":
      return projectsData[0].eighth;
    case "ROOFTOP":
      return projectsData[0].ninth;
    default:
      return projectsData[0].first;
  }
};
