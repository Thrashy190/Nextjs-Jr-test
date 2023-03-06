import LeadsIcons from "@/assets/IconLeads.svg";
import HappyFace from "@/assets/IconHappyFace.svg";
import SadFace from "@/assets/IconSadFace.svg";
import StatsCardProps from "@/interfaces/StatsCardInterface";

export const oportunityCard: StatsCardProps = {
  color: "blue",
  icon: LeadsIcons,
  title: "Opportunity",
  info: [
    { subtitle: "SOLD.com Leads", data: 0 },
    { subtitle: "Customers we promoted you to", data: 0, percetage: 0 },
    { subtitle: "Appointments set with you", data: 0 },
  ],
};

export const winsCard: StatsCardProps = {
  color: "green",
  icon: HappyFace,
  title: "Wins",
  info: [
    { subtitle: "Your signed agreements", data: 0 },
    { subtitle: "Your closings", data: 0 },
  ],
  volume: [
    { subtitle: "Your closed volume", data: 0 },
    { subtitle: "Your commission (est)", data: 0 },
  ],
};

export const lossesCard: StatsCardProps = {
  color: "red",
  icon: SadFace,
  title: "Losses",
  info: [
    { subtitle: "Appointments that signed with another agent", data: 0 },
    { subtitle: "Lost closings", data: 0 },
  ],
  volume: [
    { subtitle: "Lost volume", data: 0 },
    { subtitle: "Lost commission (est)", data: 0 },
  ],
};
