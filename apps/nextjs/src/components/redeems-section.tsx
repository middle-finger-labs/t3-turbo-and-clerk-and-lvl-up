import { useAuth } from "@clerk/nextjs";
import { useFireRedeem, useRedeems } from "@lvl-up/react";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

export const RedeemsSection = () => {
  const { userId } = useAuth();
  const { mutate: fireRedeem, error } = useFireRedeem();
  const { redeems, isLoading, isError } = useRedeems();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  const handleRedeem = (redeemId: string) => {
    fireRedeem(redeemId);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="text-lg font-bold">Redeems</div>
      <div className="flex flex-row flex-wrap">
        {redeems.map((redeem) => (
          <div className="flex w-full flex-col" key={redeem.id}>
            <div
              className={classNames(
                "m-4 flex flex-row justify-between rounded-md bg-white p-4 text-black",
                error ? "border-2 border-red-500" : "",
              )}
            >
              <div className="mr-10 flex flex-col">
                <h3 className="text-lg">
                  {redeem.name} - {redeem.points}
                </h3>
                <p className="text-sm">{redeem.description}</p>
              </div>
              {userId && (
                <button
                  className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                  onClick={() => handleRedeem(redeem.id)}
                >
                  Redeem
                </button>
              )}
            </div>
            {error && <div className="text-red-500">{error.message}</div>}
          </div>
        ))}
      </div>
      {!redeems.length && (
        <div className="text-center">
          <div className="text-md">No Redeems</div>
          <div className="text-sm">
            Add Redeems at https://app.lvl-up.xyz/redeems
          </div>
        </div>
      )}
    </div>
  );
};
