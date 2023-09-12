import skillTree from "../commonSettings/skillTree";
import countries from "../commonSettings/countries";
import employmentOptions from "../commonSettings/employmentOptions";

const config =  {
  "skillTree": skillTree,
  "countries": countries,
  "employmentOptions": employmentOptions,
  formRecruitFieldMapping: {
    "firstName": "First Name",
    "lastName": "Last Name",
    "phone": "Phone",
    "emailAddress": "Email",
    "jobTitle": "Job Title",
    "experienceYears": "Experience in Years",
		"gamesIndustryYears" : "Experience in Games industry",
    "seniorityLevel": "Seniority Level 2",
    "category": "CATEROGRY",
    "specialities": "Specialities 2",
    "skills": "SKILLS",
    "workExperience": "Work Experience",
    "salaryExpectations": "Expected Salary",
    "linkedInLink": "LinkedIn profile",
    "gitHubLink": "GitHub, portfolio",
    "location": "Location",
    "employmentOptions": "Type of Employment",
    "additionalInfo": "Additional Info",
    "country" : "Country",
    "city" : "City",
    "readyToRelocate": "Relocation",
    "agreeToJoinBoard": "Interested to join Talent Board",
    "dateAppliedyyyymmdd": "Date Applied",
    "source": "Source",
    "artAndAnimationStyles": "Art Styles",
		"titlesAndThingsToBeProudOf": "Titles and personal achievements",
        "gameTitles": "Published Game Titles or Apps",
        "motivation": "Motivation",
        "expectations": "Expectations of the Team and Company",
        "dreamJob": "Dream Job",
        "tasks": "Tasks",
        "achievements": "Achievements",
		"gameGenres": "Genres",
		"gameEngines": "Engines",
		"gamePlatforms": "Platforms",
		"associatedTags": "Associated Tags",
		"addCandidate": "Allow publish profile on Talent Board"
    // "termsAcceptance": ""
  },
  tagToAssociateWithSubmissions: "",
  cvFileFetchTimeout: 5000, // up to 5 sec for fetching the cv file from network
  maxCVFileSizeMB: 5 // in MB, has to be integer
};

export default config;
