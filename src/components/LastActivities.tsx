import { gql, useSubscription } from "@apollo/client";
import { Box, Button, Link, Table, Text } from "@radix-ui/themes";
import Image from "next/image";

const LastActivities = () => {
  const LOGS_SUBSCRIPTION = gql`
    subscription LogsSubscription {
      logs(order_by: { block_timestamp: desc }, limit: 6) {
        transaction_hash
        decoded
        block_timestamp
      }
    }
  `;

  const { data, loading, error } = useSubscription(LOGS_SUBSCRIPTION);

  const logs = data?.logs;
  console.log("data", logs);

  const convertToLocal = (timestamp: any) => {
    const dateObj = new Date(timestamp);
    return [dateObj.toISOString().split("T")[0], dateObj.toLocaleTimeString()];
  };

  const shortenHex = (hex: string) => {
    const shortened = hex.slice(0, 5);
    const lastFour = hex.slice(-4);
    return `${shortened}...${lastFour}`;
  };

  const getAmountDisplay = (decoded: any): string => {
    const amounts = [
      decoded.amount0Out,
      decoded.amount0In,
      decoded.amount1Out,
      decoded.amount1In,
    ];
    const nonZeroAmounts = amounts.filter((amount) => amount !== "0");
    return nonZeroAmounts.length > 0 ? nonZeroAmounts[0].slice(0, 3) : "";
  };

  return (
    <Box className="py-2 collapse md:visible">
      <Box className="mb-4">
        <Text className="text-textS font-medium" style={{ fontSize: 16 }}>
          Last Activities
        </Text>
      </Box>
      <Box className="w-full text-textP overflow-x-auto rounded-xl h-0 md:h-full">
        <Table.Root className="min-w-full border-collapse">
          <Table.Header className="bg-elevation3 text-textS text-xs font-medium h-11 border-collapse">
            <Table.Row>
              <Table.ColumnHeaderCell className="border-none">
                Activities
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="border-none">
                Points
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="border-none">
                Date
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="border-none">
                TXID
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="border-none"></Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {logs?.map((log: any, index: number) => (
              <Table.Row
                key={index}
                className={`h-16 ${
                  index % 2 === 1 ? "bg-elevation2" : "bg-elevation1"
                }`}
              >
                <Table.Cell className="text-textP text-sm font-medium border-none text-center">
                  Transaction
                </Table.Cell>
                <Table.Cell className="text-successMain text-xs font-medium border-none text-center">
                  <Button
                    className="rounded-3xl px-2 py-1 cursor-text"
                    style={{ backgroundColor: "rgba(39, 209, 127, 0.10)" }}
                  >
                    +{getAmountDisplay(log.decoded)}
                  </Button>
                </Table.Cell>
                <Table.Cell className="border-none text-center text-textS text-sm font-normal">
                  {convertToLocal(log.block_timestamp)[0]}
                  <Button className="rounded-3xl px-2 py-1 bg-elevation3 ml-1 text-textS text-sm font-medium cursor-text">
                    {convertToLocal(log.block_timestamp)[1]}
                  </Button>
                </Table.Cell>
                <Table.Cell className="text-textS text-sm font-medium border-none text-center">
                  {shortenHex(log.transaction_hash)}
                  <Button
                    onClick={() =>
                      navigator.clipboard.writeText(log.transaction_hash)
                    }
                    className="rounded-3xl px-2 py-1 bg-elevation3 ml-1"
                  >
                    Copy
                  </Button>
                </Table.Cell>
                <Table.Cell className="border-none text-center">
                  <Link href="/">
                    <Image
                      src="/images/svg/link.svg"
                      alt="link"
                      width={20}
                      height={20}
                      className=""
                    ></Image>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
};

export default LastActivities;
