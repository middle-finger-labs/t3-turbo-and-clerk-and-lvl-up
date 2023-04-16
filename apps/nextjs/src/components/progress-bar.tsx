const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="flex w-full items-center justify-center pr-2  align-middle">
      <div className="mt-2 mr-1 h-2.5 w-3/5 rounded-full border-gray-100 bg-gray-200">
        <div
          className={`h-2.5 rounded-full ${
            progress === 100 ? "bg-green-500" : "bg-blue-500"
          }`}
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <div className="flex h-2.5 w-1/5  text-black">
        <div className="h-2.5 text-xs">{progress.toFixed(2)}%</div>
      </div>
    </div>
  );
};

export { ProgressBar };
