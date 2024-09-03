import { Box, Link, Button, Text } from "@radix-ui/themes";
import Image from "next/image";

const Footer = () => {
  return (
    <Box className="flex items-center px-6 py-4 bg-elevation2">
      <Box className="flex space-x-2">
        <Link href="/" className="">
          <Image
            src="/images/svg/discord.svg"
            alt="Social Icon Discord"
            width={25}
            height={25}
            className="rounded-xl"
          ></Image>
        </Link>
        <Link href="/" className="">
          <Image
            src="/images/svg/x.svg"
            alt="Social Icon X"
            width={25}
            height={25}
            className="rounded-xl"
          ></Image>
        </Link>
        <Link href="/" className="">
          <Image
            src="/images/svg/github.svg"
            alt="Social Icon Github"
            width={25}
            height={25}
            className="rounded-xl"
          ></Image>
        </Link>
      </Box>

      <Box className="flex w-10/12">
        <Button
          className="flex text-textBtn border rounded-2xl border-primary p-2 items-center m-auto"
          style={{
            background:
              "linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 255, 135, 0.1))",
          }}
        >
          <Text className="text-sm font-normal mr-2">Powered by</Text>
          <Image
            src="/images/png/logo.png"
            alt="Logo"
            width={25}
            height={25}
            className="rounded-3xl"
          ></Image>
          <Text className="text-lg font-bold rounded-full ml-1 ">Absinthe</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
