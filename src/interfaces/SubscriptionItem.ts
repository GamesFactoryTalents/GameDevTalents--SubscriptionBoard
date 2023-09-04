export default interface ISubscriptionItem {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  linkCompany: string;
  linkJob: string;
  emailAddress: string;
  jobTitle: string;
  category: string;
  specialities: string | string[];
  skills: string | string[];
  gameGenres: string | string[];
  gameEngines: string | string[];
  gamePlatforms: string | string[];
  seniorityLevel: string;
  employmentOptions: string;
  country: string;
  ip: string;
  user_agent: string;
  referrer: string;
  created_at: string;
  salaryRange: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
  idealAdditions: string;
  aboutStudio: string;
  theirCulture: string;
  reasonsToWork: string;
  logoFile: any;
  workPreferences: string;
}