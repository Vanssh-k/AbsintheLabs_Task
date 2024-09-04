import { Box, Button, Text } from "@radix-ui/themes";
import { badges } from "../helper";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
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

  const newBadges = setBadges();

  const opacityBadges = (index: number): string => {
    switch (index) {
      case 3:
        return "lg:scale-110 lg:opacity-100 lg:px-8";
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

  return (
    <Box className="md:py-2">
      <Text className="text-textS font-medium" style={{ fontSize: 16 }}>
        Badges
      </Text>
      <Box className="w-full mx-auto flex items-center text-textBtn h-72 py-5">
        <Button
          onClick={handlePrev}
          className="p-2 bg-elevation3 h-48 rounded-full transition-colors duration-300"
        >
          <ChevronLeftIcon className="transition-transform duration-300 h-6 w-6" />
        </Button>

        <Box className="relative md:right-4 lg:right-4 h-full overflow-x-hidden overflow-y-visible rounded-lg shadow-md flex items-center">
          {newBadges.map((badge, index) => (
            <Box
              key={badge.id}
              className={`mx-5 lg:mx-0 ${getBadgeStyle(index)} inset-0`}
            >
              <Badge badge={badge} earned={badge.earned} />
            </Box>
          ))}
        </Box>

        <Button
          onClick={handleNext}
          className="p-2 bg-elevation3 h-48 rounded-full transition-colors duration-300"
        >
          <ChevronRightIcon className="transition-transform duration-300 h-6 w-6" />
        </Button>
      </Box>
    </Box>
  );
};

export default BadgeCarousel;
