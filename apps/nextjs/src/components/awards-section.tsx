import { useAwards } from "@lvl-up/react";
import Image from "next/image";

export const AwardsSection = () => {
  const { awards, isLoading, isError } = useAwards();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="flex w-full flex-col">
      <div className="text-lg font-bold">Awards</div>
      <div className="grid grid-cols-3">
        {awards.map((award) => (
          <div
            key={award.id}
            className="col-span-1 m-4 flex flex-col items-center justify-center rounded-md bg-white p-4"
          >
            <Image
              src={award.image ?? "/images/award-placeholder.png"}
              alt=""
              height={120}
              width={120}
              className="mb-2"
            />
            <h3 className="text-md text-black">{award.name}</h3>
            <p className="text-sm text-gray-500">{award.description}</p>
          </div>
        ))}
      </div>
      {!awards.length && (
        <div className="text-center">
          <div className="text-md">No Awards</div>
          <div className="text-sm">
            Add Awards at https://app.lvl-up.xyz/awards
          </div>
        </div>
      )}
    </div>
  );
};
