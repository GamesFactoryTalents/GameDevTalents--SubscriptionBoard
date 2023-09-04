import subsriptionsJOSN from "../generated/subscribers.json";

const subsriptions = [...subsriptionsJOSN];

// TODO: add proper types
export default function getAllSubscribersFilterValues(): any {
  const result = {
    skills: Array.from(
      new Set(
        subsriptions
          .map((s) => s.skills)
          .flat()
          .map((s) => s.split(","))
          .flat()
          .filter((s) => s !== "")
      )
    ),

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
    gameGenres: Array.from(
      new Set(
        subsriptions
          .map((s) => s.gameGenres)
          .flat()
          .map((s) => s.split(","))
          .flat()
          .filter((s) => s !== "")
      )
    ),
    gameEngines: Array.from(
      new Set(
        subsriptions
          .map((s) => s.gameEngines)
          .flat()
          .map((s) => s.split(","))
          .flat()
          .filter((s) => s !== "")
      )
    ),
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

    seniorityLevel: Array.from(
      new Set(
        subsriptions
          .map((s) => s.seniorityLevel)
          .flat()
          .map((s) => s.split(","))
          .flat()
          .filter((s) => s !== "")
      )
    ),
  };
  return result;
}
