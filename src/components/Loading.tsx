import { Center, ConditionalValue, Spinner } from '@chakra-ui/react';

interface ILoadingProps {
  size?: ConditionalValue<
    'sm' | 'md' | 'lg' | 'xl' | 'xs' | 'inherit' | undefined
  >;
}

const Loading = ({ size = 'lg' }: ILoadingProps) => (
  <Center h="100px">
    <Spinner size={size} />
  </Center>
);

export default Loading;
