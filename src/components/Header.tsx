import { Box, Flex, Link, Button, Text } from "@radix-ui/themes";
import Image from "next/image";

const Header = () => {
  return (
    <Box className="flex flex-col lg:flex-row lg:justify-between items-center px-0 md:px-6 pt-6 md:py-6 md:pb-10">
      <Box className="md:flex space-x-16 items-center">
        <Box
          className="relative bottom-2.5 md:bottom-0 flex justify-center rounded-lg w-28 h-8 border-textD border text-textP font-medium items-center md:mr-16"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", fontSize: 16 }}
        >
          <Text>Logo</Text>
        </Box>
        <Flex
          gap="3"
          className="relative top-8 md:top-0 md:static space-x-3 md:space-x-8 lg:w-auto lg:space-y-0 md:w-full space-y-4"
          style={{ margin: 0 }}
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
          <Link href="/" className=" text-textP hover:text-hover">
            Leaderboard
          </Link>
          <Link
            href="/"
            className="relative block md:inline right-3 md:right-0 md:static text-textP hover:text-hover"
          >
            Connections
          </Link>
        </Flex>
      </Box>

      <Box className="flex text-textP text-sm font-semibold items-center space-x-4 md:relative md:left-12">
        <Button className="rounded-3xl border border-hover p-2 md:visible collapse">
          <Text>How It Work</Text>
        </Button>
        <Button className="relative bottom-28 left-9 md:left-0 md:bottom-0 md:static flex items-center bg-elevation2 rounded-3xl px-3 py-2.5 space-x-2">
          <Image
            src="/images/png/profile.jpeg"
            alt="Profile"
            width={25}
            height={25}
            className="rounded-3xl"
          ></Image>
          <Text>vansh.eth</Text>
          <Image
            src="/images/svg/menu.svg"
            alt="Menu"
            width={25}
            height={25}
            className="rounded-3xl md:collapse"
          ></Image>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
