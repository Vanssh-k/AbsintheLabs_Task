import { BadgeType } from "@/helper";
import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";

interface BadgeProps {
  badge: BadgeType
  earned: boolean;
}

const Badge: React.FC<BadgeProps> = ({badge, earned }) => {
  return (
    <Box className={`rounded-xl w-48 font-medium text-xs ${earned && "border-successMain border"}`}>
      <Box className="flex bg-elevation2 rounded-t-xl h-8 px-3 items-center space-x-2">
        <Text className="text-textP">{badge.name}</Text>
        <Text className="text-textS">{badge.actions} Actions</Text>
      </Box>
      <Box className="bg-elevation3 w-full content-center">
        <Image
          src={badge.src}
          alt={badge.alt_name}
          width={65}
          height={65}
          className={`h-20 w-20 ${
            earned && "border-successMain border-4"
          } object-contain ml-auto mr-auto my-6 rounded-full`}
        ></Image>
      </Box>
      <Box
        className="bg-elevation2 px-4 py-3 rounded-b-xl text-successMain text-center"
        style={{ backgroundColor: "rgba(39, 209, 127, 0.10)" }}
      >
        <Text>200 Points</Text>
      </Box>
    </Box>
  );
};
export default Badge;
