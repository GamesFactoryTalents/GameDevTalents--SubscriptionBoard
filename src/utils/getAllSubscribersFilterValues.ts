import subsriptionsJOSN from "../generated/subscribers.json";
import skillTree from "../commonSettings/skillTree";
import employmentOptions from "../commonSettings/employmentOptions";

const subsriptions = [...subsriptionsJOSN];

// TODO: add proper types
export default function getAllSubscribersFilterValues(): any {
  const result = {
    skills: employmentOptions.skills,
    category: Array.from(
      new Set(
        subsriptions
          .map((s) => s.category)
          .flat()
          .map((s) => s.split(","))
          .flat()
          .filter((s) => s !== "")
      )
    ),
    specialisations: Array.from(
      new Set(
        subsriptions
          .map((s) => s.specialities)
          .flat()
          .map((s) => s.split(","))
          .flat()
          .filter((s) => s !== "")
      )
    ),
    gameGenres: employmentOptions.gameGenres,
    gameEngines: employmentOptions.gameEngines,
    gamePlatforms: Array.from(
      new Set(
        subsriptions
          .map((s) => s.gamePlatforms)
          .flat()
          .map((s) => s.split(","))
          .flat()
          .filter((s) => s !== "")
      )
    ),

    seniorityLevel: employmentOptions.seniorityLevels,
  };
  return result;
}
