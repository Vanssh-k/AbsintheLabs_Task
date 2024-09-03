import { Box, Text } from "@radix-ui/themes";

interface ActionCardProps {
  status: boolean;
  text: string;
}

const ActionCard: React.FC<ActionCardProps> = ({status, text}) => {
  return (
    <Box className="rounded-xl w-96">
      <Box className="flex justify-between items-center text-sm font-medium px-4 py-3 bg-elevation3 border-b border-elevationBack rounded-t-xl">
        <Text className="text-textS">Action</Text>
        {status===true && (
          <Box
            className="rounded-3xl px-2 py-1 text-successMain"
            style={{ backgroundColor: "rgba(39, 209, 127, 0.10)" }}
          >
            Completed
          </Box>
        )}
      </Box>
      <Box className="bg-elevation2 px-4 py-3 rounded-b-xl">
        <Text className="text-textS text-sm font-normal">{text}</Text>
      </Box>
    </Box>
  );
};
export default ActionCard;
