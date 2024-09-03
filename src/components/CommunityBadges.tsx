import { Box, Text } from "@radix-ui/themes";
import { badges } from "../helper";
import Badge from "./Badge";

const CommunityBadges = () => {
  return (
    <Box>
      <Box className="text-textP text-xs font-medium mt-10">
        <Text>Community Badges</Text>
      </Box>
      <Box className="w-full overflow-x-auto horizontal-scrollbar mt-4 bg-elevation1 rounded-b-xl py-2 px-4 pb-6 ">
        <Box className="flex space-x-4">
          {badges.map((badge, index) => (
            <Badge key={index} badge={badge} earned={badge.earned} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CommunityBadges;
