import { Omit } from 'react-redux';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => <Flex direction="row" {...props} />;
