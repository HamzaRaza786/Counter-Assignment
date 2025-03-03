import { useToast } from "@chakra-ui/toast";
import { useCounterContext } from "../CounterContext";

export function CounterButton() {
  const { currentCount, updateCount } = useCounterContext();
  const toast = useToast();
  const updateCountForToast = (count: number) => {
    updateCount(count);
    toast({
      title: "Count Updated",
      description: `Current Count: ${count}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <div className="flex-container">
      <p >Current Count: {currentCount}</p>
      <button onClick={() => updateCountForToast(currentCount + 1)}>
        +1
      </button>
    </div>
  );
}

