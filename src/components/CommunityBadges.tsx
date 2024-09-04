import { Box, Text } from "@radix-ui/themes";
import { badges } from "../helper";
import Badge from "./Badge";

const CommunityBadges = () => {
  return (
    <Box className="py-2">
      <Box className="text-textP text-xs font-medium mt-10">
        <Text>Community Badges</Text>
      </Box>
      <Box className="w-full overflow-x-auto horizontal-scrollbar mt-4 bg-elevation1 rounded-b-xl py-2 px-4 pb-6 ">
        <Box className="md:flex md:space-x-4 md:gap-0 grid grid-cols-5 gap-x-52 gap-y-3">
          {badges.map((badge, index) => (
            <Badge key={index} badge={badge} earned={badge.earned} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CommunityBadges;
