/* eslint-disable import-helpers/order-imports */
import { ChakraTheme, extendTheme } from '@chakra-ui/react';

// Foundations
import Colors from '@app/constants/theme/foundations/colors';
import Shadows from '@app/constants/theme/foundations/shadow';
import FontSizes from '@app/constants/theme/foundations/font-sizes';
import Fonts from '@app/constants/theme/foundations/fonts';

// Components
import Button from '@app/constants/theme/components/button';
import Heading from '@app/constants/theme/components/heading';
import Link from '@app/constants/theme/components/link';
import Input from '@app/constants/theme/components/input';
import Avatar from '@app/constants/theme/components/avatar';
import Checkbox from '@app/constants/theme/components/checkbox';
import Divider from '@app/constants/theme/components/divider';
import Textarea from '@app/constants/theme/components/text-area';
import Accordion from '@app/constants/theme/components/accordion';

export const CustomTheme: Partial<ChakraTheme> = {
  colors: Colors,
  shadows: Shadows,
  fontSizes: FontSizes,
  fonts: Fonts,
  components: {
    Button,
    Heading,
    Link,
    Input,
    Avatar,
    Checkbox,
    Divider,
    Textarea,
    Accordion,
  },
} as const;

const Theme = extendTheme(CustomTheme);

export default Theme;
