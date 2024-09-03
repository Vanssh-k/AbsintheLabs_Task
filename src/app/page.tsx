import ActionCard from "@/components/ActionCard";
import Badge from "@/components/Badge";
import CommunityBadges from "@/components/CommunityBadges";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowToEarn from "@/components/HowToEarn";
import { Theme } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <Theme>
      <Header />
      <Box className="px-32 py-2">
        <HowToEarn />
        <CommunityBadges />
      </Box>
      <Footer />
    </Theme>
  );
}
