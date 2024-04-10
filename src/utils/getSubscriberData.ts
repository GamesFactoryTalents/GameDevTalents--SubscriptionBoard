import ISubscriptionItem from "../interfaces/SubscriptionItem";

export default function getSubscriberData(subscriber: ISubscriptionItem) {
  return {
    firstName: subscriber.firstName,
    lastName: subscriber.lastName,
    companyName: subscriber.companyName,
    linkCompany: subscriber.linkCompany,
    linkJob: subscriber.linkJob,
    emailAddress: subscriber.emailAddress,
    jobTitle: subscriber.jobTitle,
    category: subscriber.category,
    specialities: Array.isArray(subscriber.specialities) ? [] : subscriber.specialities.split(','),
    artAndAnimationStyles: Array.isArray(subscriber.artAndAnimationStyles) ? [] : subscriber.artAndAnimationStyles.split(','),
    skills: Array.isArray(subscriber.skills) ? [] : subscriber.skills.split(','),
    gameGenres: Array.isArray(subscriber.gameGenres) ? [] : subscriber.gameGenres.split(','),
    gameEngines: Array.isArray(subscriber.gameEngines) ? [] : subscriber.gameEngines.split(','),
    gamePlatforms: Array.isArray(subscriber.gamePlatforms) ? [] : subscriber.gamePlatforms.split(','),
    seniorityLevel: subscriber.seniorityLevel.split(','),
    employmentOptions: subscriber.employmentOptions.includes(',') ? subscriber.employmentOptions.split(',') : [subscriber.employmentOptions],
    country: subscriber.country,
    roleLocation: (subscriber.roleLocation.includes(',') ? subscriber.roleLocation.split(',') : [subscriber.roleLocation]) || [],
    ip: subscriber.ip,
    user_agent: subscriber.user_agent,
    referrer: subscriber.referrer,
    created_at: subscriber.created_at,
    id: subscriber.id,
    salaryRange: [subscriber.salaryRange.split(',')[0], subscriber.salaryRange.split(',')[1]],
    responsibilities: subscriber.responsibilities,
    benefits: subscriber.benefits,
    requirements: subscriber.requirements,
    jobDescription: subscriber.jobDescription,
    logoFile: subscriber.logoFile ? JSON.parse(subscriber.logoFile) : {}, /* JSON.parse */
    workPreferences: subscriber.workPreferences.includes(',') ? subscriber.workPreferences.split(',') : [subscriber.workPreferences],
  };
}
