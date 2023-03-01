import axios from "axios";

interface ActivityType {
  activity: string;
  type: string;
}

export function getActivity() {
  return axios.get<ActivityType>("https://www.boredapi.com/api/activity/");
}
