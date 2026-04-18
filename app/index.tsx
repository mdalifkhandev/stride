import { Href, Redirect, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const loginRoute = "/auth" as Href;

  return <Redirect href={loginRoute} />;
}
