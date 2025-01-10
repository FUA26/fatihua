import { useEffect, useState } from 'react';

const useScroll = (): { scrollY: number; isAtTop: boolean } => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setIsAtTop(currentScrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY, isAtTop };
};

export default useScroll;