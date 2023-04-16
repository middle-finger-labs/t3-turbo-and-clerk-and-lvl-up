import { CheckIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const initialSteps = [
  { name: "Step 1", href: "#", status: "upcoming" },
  { name: "Step 2", href: "#", status: "upcoming" },
  { name: "Step 3", href: "#", status: "upcoming" },
  { name: "Step 4", href: "#", status: "upcoming" },
  { name: "Step 5", href: "#", status: "upcoming" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Streak({ streak }: { streak: number }) {
  const [steps, setSteps] = useState(initialSteps);

  useEffect(() => {
    const newSteps = steps.map((step, idx) => {
      if (idx < streak) {
        return { ...step, status: "complete" };
      } else if (idx === streak) {
        return { ...step, status: "current" };
      } else {
        return { ...step, status: "upcoming" };
      }
    });
    setSteps(newSteps);
  }, [streak]);

  return (
    <nav aria-label="Current Streak">
      <h2 className="my-2 text-center text-xl font-medium text-black">
        Current Streak
      </h2>
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pr-8" : "",
              "relative",
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                  <CheckIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            ) : step.status === "current" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
