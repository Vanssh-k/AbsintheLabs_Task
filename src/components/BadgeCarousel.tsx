import { Box, Button, Text } from "@radix-ui/themes";
import { badges } from "../helper";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Badge from "./Badge";

const BadgeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const setBadges = () => {
    let newBadges = [];
    for (let i = -3; i <= 3; i++) {
      newBadges.push(badges[(activeIndex + i + badges.length) % badges.length]);
    }
    return newBadges;
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % badges.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + badges.length) % badges.length);
  };

  const handleBadgeClick = (index: number) => {
    setActiveIndex(index);
    const newBadges = setBadges();
    if (newBadges[index] && !newBadges[index].earned) {
      handleNext();
    }
  };

  const newBadges = setBadges();

  const opacityBadges = (index: number): string => {
    switch (index) {
      case 3:
        return "lg:scale-105 lg:opacity-100 lg:px-7";
      case 2:
      case 4:
        return "lg:scale-90 lg:opacity-50";
      case 1:
      case 5:
        return "lg:scale-75 lg:opacity-50";
      default:
        return "lg:scale-50 lg:opacity-50";
    }
  };

  const getBadgeStyle = (index: number): string => {
    return `${opacityBadges(index)} transition-opacity duration-300`;
  };

  let value: number = -1;
  if (typeof window !== "undefined") {
    value = window.innerWidth < 600 ? 0 : 3;
  } else {
    value = 3
  }

  return (
    <Box className="md:py-2">
      <Text className="text-textS font-medium" style={{ fontSize: 16 }}>
        Badges
      </Text>
      <Box
        className="w-full mx-auto flex items-center text-textBtn py-5"
        style={{ height: 350 }}
      >
        <Button
          onClick={handlePrev}
          className="p-2 bg-elevation3 h-5/6 rounded-full transition-colors duration-300"
        >
          <ChevronLeftIcon className="transition-transform duration-300 h-6 w-6" />
        </Button>

        <Box className="relative md:right-4 lg:right-4 h-full overflow-x-hidden overflow-y-visible rounded-lg shadow-md flex items-center">
          {newBadges.map((badge, index) => (
            <Box
              key={badge.id}
              className={`mx-5 lg:mx-0 ${getBadgeStyle(
                index
              )} inset-0 cursor-pointer`}
              onClick={() => handleBadgeClick(index)}
            >
              <Badge badge={badge} earned={badge.earned} />
              {index === value && (
                <Box className="text-xs font-medium text-center px-5 py-2 bg-elevation3 rounded-xl mt-2">
                  <Text className="text-textP block">Reward Details</Text>
                  <Text className="text-textS block">
                    Liquidity Provision to ETH/USDC
                  </Text>
                </Box>
              )}
            </Box>
          ))}
        </Box>

        <Button
          onClick={handleNext}
          className="p-2 bg-elevation3 h-5/6 rounded-full transition-colors duration-300"
        >
          <ChevronRightIcon className="transition-transform duration-300 h-6 w-6" />
        </Button>
      </Box>
    </Box>
  );
};

export default BadgeCarousel;
