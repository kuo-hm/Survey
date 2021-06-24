import {
  Stack,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  HStack,
} from "@chakra-ui/react";

const Survey = ({ t1, t2, t3, q1 }) => {
  return (
    <HStack>
      <FormControl as="fieldset">
        <FormLabel as="legend">{q1}</FormLabel>
        <RadioGroup defaultValue="test1">
          <Stack>
            <Radio size="lg" name="1" value="test1" colorScheme="red">
              {t1}
            </Radio>
            <Radio size="lg" name="1" value="test2" colorScheme="green">
              {t2}
            </Radio>
            <Radio size="lg" name="1" value="test3" colorScheme="orange">
              {t3}
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </HStack>
  );
};

export default Survey;
