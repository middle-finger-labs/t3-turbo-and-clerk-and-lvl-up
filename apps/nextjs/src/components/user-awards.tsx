import { useUserAwards } from "@lvl-up/react";
import Image from "next/image";
import { ProgressBar } from "./progress-bar";

export const UserAwardsSection = () => {
  const { userAwards, isLoading, isError } = useUserAwards();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="flex w-full flex-col">
      <div className="text-lg font-bold">User Awards</div>
      <div className="grid grid-cols-3">
        {userAwards.map((award) => (
          <div
            key={award?.id}
            className="col-span-1 m-4 flex flex-col items-center justify-center rounded-md bg-white p-4"
          >
            <Image
              src={award?.award.image}
              alt=""
              height={120}
              width={120}
              className="mb-2"
            />
            <h3 className="text-md text-black">{award?.award.name}</h3>
            <p className="text-sm text-gray-500">{award?.award.description}</p>
            <ProgressBar progress={award?.progress ?? 0} />
          </div>
        ))}
      </div>
      {!userAwards.length && (
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
