import { useParams } from "react-router-dom";
import * as subscribers from "../generated/subscribers.json";

const SingleSubscription = () => {
  const { id } = useParams();

  const currentSubscriber = subscribers.default.find(subscriber => subscriber.ip === id);
  console.log('currentSubscriber', currentSubscriber);
  return (
    <div className="">
      <h1>{currentSubscriber.firstName}</h1>
      <h1>{currentSubscriber.lastName}</h1>
      <h1>{currentSubscriber.category}</h1>
      <h1>{currentSubscriber.companyName}</h1>
      <h1>{currentSubscriber.country}</h1>
      <h1>{currentSubscriber.created_at}</h1>
      <h1>{currentSubscriber.emailAddress}</h1>
      <h1>{currentSubscriber.employmentOptions}</h1>
      <h1>{currentSubscriber.gameEngines}</h1>
      <h1>{currentSubscriber.gameGenres}</h1>
      <h1>{currentSubscriber.gamePlatforms}</h1>
      <h1>{currentSubscriber.jobTitle}</h1>
      <h1>{currentSubscriber.linkCompany}</h1>
      <h1>{currentSubscriber.skills}</h1>
      <h1>{currentSubscriber.specialities}</h1>
    </div>
  );
};

export default SingleSubscription;