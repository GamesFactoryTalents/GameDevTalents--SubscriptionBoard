
import getSubscriberData from "./getSubscriberData";
import subsriptionsJOSN from "../generated/subscribers.json";

const subsriptions = [...subsriptionsJOSN];

export default function getOneSubscriptionInfo(id: string) {
  const subscriberJSON = subsriptions.find((s) => s.id === id);
  const subscriber = getSubscriberData(subscriberJSON!);

  return subscriber;
}
