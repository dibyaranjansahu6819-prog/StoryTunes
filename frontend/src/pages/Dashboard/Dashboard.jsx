import DashboardHeader from "./sections/DashboardHeader";
import StatsCards from "./sections/StatsCards";

import RecommendationHub from "../../components/recommendation/RecommendationHub";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <DashboardHeader />

      <StatsCards />

      <RecommendationHub />

    </div>
  );
}