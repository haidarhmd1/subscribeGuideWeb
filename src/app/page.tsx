"use client";

import { Greeting } from "components/Greeting";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FcGoogle } from "react-icons/fc";
import { SubscriptionOverviewPrice } from "components/SubscriptionOverviewPrice";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Media & Entertainment",
    "Commune",
    "Leisure",
    "Sports & Recreration",
  ],
  datasets: [
    {
      label: "# of Subscriptions",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderWidth: 2,
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Greeting />
      <div className="py-1">
        <h1 className=" text-lg font-bold">Overview</h1>
        <div className="flex justify-between">
          <div className="my-2 p-4 w-96 h-auto bg-lime-200 rounded-md">
            <h2 className="text-base font-semibold">
              Subscription Category Overview
            </h2>
            <div className="my-4">
              <Doughnut data={data} />
            </div>
          </div>
          <div className="my-2 p-4 w-96 h-auto bg-blue-200 rounded-md">
            <h2 className="text-base font-semibold">Top Subscription Prices</h2>
            <div className="my-4">
              <SubscriptionOverviewPrice />
              <SubscriptionOverviewPrice />
              <SubscriptionOverviewPrice />
              <SubscriptionOverviewPrice />
              <SubscriptionOverviewPrice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
