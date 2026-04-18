import { Href, Redirect } from "expo-router";

const authRoute = "/auth" as Href;

export default function Index() {
  return <Redirect href={authRoute} />;
}
