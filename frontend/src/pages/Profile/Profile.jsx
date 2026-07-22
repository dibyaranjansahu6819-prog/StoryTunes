import ProfileHeader from "./sections/ProfileHeader";
import ListeningStats from "./sections/ListeningStats";
import FavoriteGenres from "./sections/FavoriteGenres";
import FavoriteLanguages from "./sections/FavoriteLanguages";
import RecentHistory from "./sections/RecentHistory";
import RecommendationHistory from "./sections/RecommendationHistory";

export default function Profile() {
  return (
    <div className="space-y-8">

      <ProfileHeader />

      <ListeningStats />

      <div className="grid lg:grid-cols-2 gap-8">

        <FavoriteGenres />

        <FavoriteLanguages />

      </div>

      <RecentHistory />

      <RecommendationHistory />

    </div>
  );
}