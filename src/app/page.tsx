// rafce
import LoadingCard from "@/components/card/LoadingCard";
// import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
const page = () => {
  // Search
  // const { search, category } = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        {/* <LandmarkContainer search={search} category={category} /> */}
      </Suspense>
    </section>
  );
};
export default page;