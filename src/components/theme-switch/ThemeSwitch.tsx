'use client';
import { useTheme } from '@/ThemeContext';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { ChangeEvent } from 'react';

export default function ThemeSwitch() {
  const { theme, changeTheme } = useTheme();

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    changeTheme(event.target.checked ? 'dark' : 'light');
  };

  return (
    <>
      <label className="swap swap-rotate">
        <input type="checkbox" value="dark" checked={theme === 'dark'} onChange={handleToggle} />
        <IconMoon className="swap-off fill-current" />
        <IconSun className="swap-on fill-current" />
      </label>
    </>
  );
}
