import { Box, Text, Button } from "@radix-ui/themes";
import ActionCard from "./ActionCard";

interface HowToEarnProps {}

const HowToEarn: React.FC<HowToEarnProps> = () => {
  const actions = [
    { id: 0, text: "Provide at least $50 Liquidity to LINK/ETH", status: true },
    {
      id: 1,
      text: "Provide at least $50 Liquidity to LINK/ETH",
      status: false,
    },
    {
      id: 2,
      text: "Provide at least $50 Liquidity to LINK/ETH",
      status: false,
    },
  ];

  return (
    <Box className="py-2">
      <Box className=" md:flex justify-between p-1">
        <Box className="md:flex text-sm space-x-1">
          <Text className="text-textP font-semibold">How to Earn: </Text>
          <Text className="text-textS font-normal">
            Complete the actions for the badge, no specific order needed.
          </Text>
        </Box>

        <Box className="flex text-xs font-medium space-x-7 md:space-x-3 mt-2  md:mt-0">
          <Button className="text-textS bg-elevation3 rounded-3xl w-1/2 lg:w-28 py-1 md:px-2 md:py-1">
            <Text>1/3 Completed</Text>
          </Button>
          <Button
            className="text-hover rounded-3xl w-1/2 lg:w-36 py-1 md:px-2 md:py-1"
            style={{ background: "rgba(0, 98, 88, 0.20)" }}
          >
            <Text>Total Earnings: 3,000</Text>
          </Button>
        </Box>
      </Box>
      <Box className="lg:flex md:flex space-y-2 lg:space-x-12 md:space-x-12 mt-3">
        {actions.map((action) => (
          <ActionCard
            key={action.id}
            status={action.status}
            text={action.text}
          />
        ))}
      </Box>
      <Box className="flex space-x-7 mt-4">
        {actions.map((action) => (
          <Box
            key={action.id}
            className={`${
              action.status ? "bg-green2" : "bg-elevation3"
            }  rounded-3xl h-1`}
            style={{ width: 400 }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};
export default HowToEarn;
