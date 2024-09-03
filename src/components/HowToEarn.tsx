import { Box, Text, Button } from "@radix-ui/themes";
import ActionCard from "./ActionCard";

interface HowToEarnProps {}

const HowToEarn: React.FC<HowToEarnProps> = () => {
  const x = [0, 1, 2];

  return (
    <Box>
      <Box className="flex justify-between p-1">
        <Box className="flex text-sm space-x-1">
          <Text className="text-textP font-semibold">How to Earn: </Text>
          <Text className="text-textS font-normal">
            Complete the actions for the badge, no specific order needed.
          </Text>
        </Box>

        <Box className="flex text-xs font-medium space-x-3">
          <Button className="text-textS bg-elevation3 rounded-3xl">
            <Text>1/3 Completed</Text>
          </Button>
          <Button
            className="text-hover rounded-3xl"
            style={{ background: "rgba(0, 98, 88, 0.20)" }}
          >
            <Text>Total Earnings: 3,000</Text>
          </Button>
        </Box>
      </Box>
      <Box className="flex space-x-12 mt-3">
        {x.map((x) => (
          <ActionCard
            key={x}
            status={true}
            text="Provide at least $50 Liquidity to LINK/ETH"
          />
        ))}
      </Box>
      <Box className="flex space-x-12 mt-3">
        {x.map((x) => (
          <Box key={x} className="bg-green2 rounded-3xl h-1 w-96"></Box>
        ))}
      </Box>
    </Box>
  );
};
export default HowToEarn;
