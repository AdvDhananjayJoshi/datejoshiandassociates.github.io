import { useEffect } from 'react';
import logoImage from '../img/lawfirm.png';

export const useFavicon = () => {
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = logoImage;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);
};
