// app/page.tsx
import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";

// Define proper typing for searchParams
type PageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  // Wait for searchParams to resolve
  const params = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer
          search={params.search}
          category={params.category}
        />
      </Suspense>
    </section>
  );
}