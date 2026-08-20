import vanBox from "@/assets/van-box.jpg";
import vanPanel from "@/assets/van-panel.jpg";
import vanTipper from "@/assets/van-tipper.jpg";
import vanTruck from "@/assets/van-truck.jpg";
import vanCamper from "@/assets/van-camper.jpg";
import type { Vehicle } from "@/components/site/VehicleCard";
import type { TeamMember } from "@/components/site/TeamMemberCard";

export const vehicles: Vehicle[] = [
  {
    title: "3.5T Luton Box Van",
    type: "Box Van",
    image: vanBox,
    specs: ["3.5T GVW", "Tail lift", "Euro 6", "Recent MOT"],
    price: "From £14,995",
  },
  {
    title: "MWB Panel Van",
    type: "Panel Van",
    image: vanPanel,
    specs: ["Medium wheelbase", "Ply-lined", "Air-con", "One owner"],
    price: "From £11,750",
  },
  {
    title: "3.5T Alloy Tipper",
    type: "Tipper",
    image: vanTipper,
    specs: ["Twin-side drop", "Cage optional", "Low miles", "HPI clear"],
    price: "From £16,995",
  },
  {
    title: "18T Curtainside",
    type: "Truck up to 26T",
    image: vanTruck,
    specs: ["18T GVW", "Sleeper cab", "Column tail lift", "PTO"],
    price: "POA",
  },
  {
    title: "LWB High Roof — Camper Ready",
    type: "Camper Base",
    image: vanCamper,
    specs: ["Long wheelbase", "High roof", "Clean body", "Ideal for conversion"],
    price: "From £13,495",
  },
  {
    title: "SWB Panel Van",
    type: "Panel Van",
    image: vanPanel,
    specs: ["Short wheelbase", "City spec", "Bluetooth", "Full service"],
    price: "From £9,995",
  },
];

export const team: TeamMember[] = [
  {
    name: "Daryl Harris",
    role: "Owner",
    bio: "40+ years in the motor trade. Runs the business the way he always has — on his word, and on doing the right thing by the customer.",
  },
  {
    name: "Charlotte",
    role: "Sales",
    bio: "First point of contact for most enquiries. Straight answers, quick callbacks, no pressure.",
  },
  {
    name: "Paul",
    role: "Sales",
    bio: "37 years in commercial vehicles. If it's on wheels and it works for a living, Paul has probably sold one.",
  },
  {
    name: "Alex",
    role: "Sourcing & Logistics",
    bio: "Finds the right van for the right buyer nationwide, and gets it back to Team Valley ready for prep.",
  },
  {
    name: "Scott",
    role: "Vehicle Prep & Hire",
    bio: "Runs prep alongside Nicola. Every vehicle is checked, cleaned and ready before it goes anywhere near a forecourt.",
  },
  {
    name: "Nicola",
    role: "Vehicle Prep & Hire",
    bio: "Handles hire bookings, handovers, and keeps the fleet turning over smoothly.",
  },
  {
    name: "Tyler",
    role: "Apprentice",
    bio: "Learning the trade from the best — and already a proper part of the team.",
  },
  {
    name: "Colin",
    role: "Driver / Helper",
    bio: "The man behind our nationwide delivery. If your van's coming to your door, chances are Colin's bringing it.",
  },
];