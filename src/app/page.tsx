'use client'

import AboutExpo from "@/components/AboutExpo";
import BeAPart from "@/components/BeAPart";
import BenifitsExpo from "@/components/BenifitsExpo";
import ExpoGoal from "@/components/ExpoGoal";
import HighlightsExpo from "@/components/HighlightsExpo";
import { MyHome } from "@/components/Home";
import OrganizedBy from "@/components/OrganizedBy";
import WhoJoinExpo from "@/components/WhoJoinExpo";
export default function Home() {
  return (
    <>
    <MyHome />
    <AboutExpo />
    <ExpoGoal />
    <WhoJoinExpo />
    <HighlightsExpo />
    <BenifitsExpo  />
    <OrganizedBy />
    <BeAPart />
    </>
  );
}
