import { useMediaQuery } from 'react-responsive';

export const useDeskScreen = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
  return isBigScreen;
};
