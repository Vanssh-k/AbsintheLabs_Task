import { Box, Link, Button, Text } from "@radix-ui/themes";
import Image from "next/image";

const Footer = () => {
  return (
    <Box className="md:flex items-center py-3 bg-elevation2 mt-2 md:px-12 px-6">
      <Box className="flex space-x-2 m-3">
        <Box className="flex justify-between items-center">
          <Box
            className="md:collapse flex justify-center rounded-lg w-28 h-8 border-textD border text-textP font-medium items-center "
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              fontSize: 16,
            }}
          >
            <Text>Logo</Text>
          </Box>
          <Box className="flex relative left-20 md:left-0 md:right-full">
            <Link href="/" className="">
              <Image
                src="/images/svg/discord.svg"
                alt="Social Icon Discord"
                width={25}
                height={25}
                className="rounded-xl"
              ></Image>
            </Link>
            <Link
              href="https://x.com/absinthe_labs"
              target="_blank"
              className=""
            >
              <Image
                src="/images/svg/x.svg"
                alt="Social Icon X"
                width={25}
                height={25}
                className="rounded-xl"
              ></Image>
            </Link>
            <Link
              href="https://github.com/AbsintheLabs"
              target="_blank"
              className=""
            >
              <Image
                src="/images/svg/github.svg"
                alt="Social Icon Github"
                width={25}
                height={25}
                className="rounded-xl"
              ></Image>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box className="md:collapse flex justify-between text-sm text-textS font-medium m-3 mt-5 md:m-0 md:mt-0">
        <Link>
          <Text>Docs</Text>
        </Link>
        <Link>
          <Text>Blog</Text>
        </Link>
        <Link>
          <Text>Support</Text>
        </Link>
        <Link>
          <Text>Terms & Conditions</Text>
        </Link>
      </Box>

      <Box className="flex w-full md:w-10/12 md:relative md:right-32 ">
        <Button
          className="flex text-textBtn rounded-none md:border md:rounded-2xl md:border-primary p-2 items-center m-auto"
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
