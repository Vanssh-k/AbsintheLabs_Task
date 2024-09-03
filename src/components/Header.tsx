import { Box, Flex, Link, Button, Text } from "@radix-ui/themes";
import Image from "next/image";

const Header = () => {
  return (
    <Box className="flex flex-col lg:flex-row lg:justify-between items-center px-6 py-4">
      <Box>
        <Flex
          gap="3"
          className="lg:space-x-8 lg:w-auto lg:space-y-0 w-full space-y-4 "
        >
          <Link href="/" className="text-textP hover:text-hover">
            Dashboard
          </Link>
          <Link href="/" className="text-textP hover:text-hover">
            Tasks
          </Link>
          <Link href="/" className="text-hover hover:text-hover">
            Badges
          </Link>
          <Link href="/" className="text-textP hover:text-hover">
            Leaderboard
          </Link>
          <Link href="/" className="text-textP hover:text-hover">
            Connections
          </Link>
        </Flex>
      </Box>

      <Box className="flex text-textP text-sm font-semibold items-center space-x-4">
        <Button className="rounded-3xl border border-hover p-2">
        <Text>How It Work</Text>
        </Button>
        <Button className="flex bg-elevation2 rounded-3xl px-3 py-2.5 space-x-2">
          <Image
            src="/images/png/profile.jpeg"
            alt="Profile"
            width={20}
            height={20}
            className="rounded-3xl"
          ></Image>
          <Text>vansh.eth</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
