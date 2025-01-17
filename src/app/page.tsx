// rafce
import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";

type Params = Promise<{ search?: string, category?: string }>
const page = async ({ searchParams }: { searchParams: Params }) => {
  const { search, category } = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};

export default page;
