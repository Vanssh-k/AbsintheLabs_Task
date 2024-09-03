import { gql, useSubscription } from "@apollo/client";
import { Box, Flex, Link, Button, Text } from "@radix-ui/themes";
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

  const {data, loading, error} = useSubscription(LOGS_SUBSCRIPTION);

  console.log("data", data);

  return <Box></Box>;
};

export default LastActivities;
