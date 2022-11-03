import { useEffect } from 'react';

import useLocalStorage from '../useLocalStorage';
import usePrefersDarkMode from '../usePrefersDarkMode';

export interface UseDarkModeProps {
  darkModeClassName?: string;
  storageKey?: string;
  node?: HTMLElement;
}

/**
 *
 * @param {UseDarkModeProps} options
 */
function useDarkMode({
  darkModeClassName = 'dark-mode',
  storageKey = 'prefers-dark-mode',
  node
}: UseDarkModeProps = {}) {
  const prefersDarkMode = usePrefersDarkMode();

  const [isDarkMode, setMode] = useLocalStorage(storageKey, prefersDarkMode);

  const setDarkMode = (isDark: boolean) => {
    const element = node || window.document.body;
    const classAction = isDark ? 'add' : 'remove';
    element.classList[classAction](darkModeClassName);

    setMode(isDark);
  };

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return [isDarkMode, setDarkMode];
}

export default useDarkMode;
