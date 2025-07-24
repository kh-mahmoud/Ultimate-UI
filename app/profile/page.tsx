import CardList from "@/components/CardList";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Path from "@/components/Path";
// import AppLineChart from "@/components/AppLineChart";
import { badges } from "@/constants";
import UserInfo from "@/components/UserInfo";
import AppAvatar from "@/components/AppAvatar";
import { AppLineChart } from "@/components/Charts/AppLineChart";

const page = () => {
  return (
    <div className="">
      <Path />
      {/* CONTAINER */}
      <div className="profile-container">
        {/* LEFT */}
        <div className="profile-left-column">
          {/* USER BADGES CONTAINER */}
          <div className="profile-card">
            <h1 className="title">Badges</h1>
            <div className="profile-badges-container">
              {badges.map((badge) => (
                <HoverCard key={badge.title}>
                  <HoverCardTrigger>
                    <badge.icon
                      size={36}
                      className={`rounded-full ${badge.bgColor} ${badge.borderColor} p-2`}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">{badge.title}</h1>
                    <p className="profile-user-description">
                      {badge.description}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <UserInfo />
          {/* CARD LIST CONTAINER */}
          <div className="profile-card">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="profile-right-column">
          {/* USER CARD CONTAINER */}
          <div className="profile-user-card">
            <div className="profile-user-info">
              <AppAvatar />
              <h1 className="profile-card-header">John Snow</h1>
            </div>
            <p className="profile-user-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              voluptas distinctio ab ipsa commodi fugiat labore quos veritatis
              cum corrupti sed repudiandae ipsum, harum recusandae ratione ipsam
              in, quis quia.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="profile-card">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
