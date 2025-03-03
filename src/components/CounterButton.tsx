import {
  Button,
  Text,
  useToast,
  Flex,
  Container,
  HStack,
} from "@chakra-ui/react";
import { useCounterContext } from "../CounterContext";
import "../index.css";

export function CounterButton() {
  const { currentCount: count, increment } = useCounterContext();
  const toast = useToast();

  const handleIncrement = () => {
    increment();
    toast({
      title: "Incremented",
      description: `Counter is now ${count + 1}`,
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top-right",
      variant: "solid",
      // Add custom toast styling if needed
    });
  };

  return (
    <Container height="100vh">
      <Flex height="100%" justifyContent="center" alignItems="center">
        <HStack spacing={6}>
          <Text fontSize="2xl">Current count {count}</Text>
          <Button onClick={handleIncrement} className="button">
            +1
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}
