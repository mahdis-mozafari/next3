
import Posts from "@/component/Posts";
import Recepies from "@/component/Recepies";
import Users from "@/component/Users";
import { Suspense } from "react";

  

export default async function Home() {
  return (
 <main>
  <Suspense fallback={<p>Loading feed...</p>}>
  <Posts/>
  </Suspense>
  <br />
  <Suspense fallback={<p>Loading feed...</p>}>
  <Users/>
  </Suspense>
 <br />
  <Suspense fallback={<p>Loading feed...</p>}>
  <Recepies/>
  </Suspense>

  </main>
  );
}
