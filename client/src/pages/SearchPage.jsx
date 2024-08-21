import RideCard from "@/components/RideCard";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/useFetch";
import { MoveRight, SlidersHorizontal } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SearchPage = () => {
  const { search } = useLocation();
  const { from, to, date, seat } = Object.fromEntries(
    new URLSearchParams(search)
  );

  const { loading, data } = useFetch(
    `rides/find?from=${from}&to=${to}&seat=${seat}&date=${date}`
  );

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="z-10 flex justify-center items-center border-b bg-white p-8">
        <Search />
        <Dialog>
          <DialogTrigger className="md:hidden border border-lg p-2 bg-white absolute right-0">
            <SlidersHorizontal />
          </DialogTrigger>
          <DialogContent>
            <Sidebar />
          </DialogContent>
        </Dialog>
      </div>
      <div className="container mx-auto p-4 md:p-0 grid md:grid-cols-5 gap-4">
        <div className="hidden md:block md:col-span-1">
          <div className="sticky top-16">
            <Sidebar />
          </div>
        </div>
        <div className="col-span-5 md:col-span-4 lg:border-l">
          <div className="container">
            {loading && (
              <>
                <Skeleton className="h-[200px] w-full my-3 p-4 rounded-xl" />
                <Skeleton className="h-[200px] w-full my-3 p-4 rounded-xl" />
              </>
            )}
            {data && (
              <>
                <h3 className="text-xl font-bold mb-2">
                  {from} <MoveRight className="inline-block" /> {to}
                </h3>
                <p className="text-gray-600 mb-4">
                  {data?.rides.length} rides available
                </p>
                {data.rides.length === 0 ? (
                  <p className="text-lg font-semibold">
                    No rides available based on your search criteria.
                  </p>
                ) : (
                  data.rides.map((ride) => (
                    <Link key={ride._id} to={`/ride/${ride._id}`}>
                      <RideCard details={ride} />
                    </Link>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
