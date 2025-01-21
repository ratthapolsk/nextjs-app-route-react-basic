'use client';
import { ActionIcon, Box, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import React from 'react'

const Navbar = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });
  const isDark: boolean = computedColorScheme === 'dark';
  const toggleColorScheme = () => {
    setColorScheme(isDark ? 'light' : 'dark');
  }
  return (
    <Box className="w-full h-12 bg-[var(--mantine-color-primary-1)] dark:bg-[var(--mantine-color-primary-5)]">
      <ActionIcon variant="filled" aria-label="Settings" onClick={() => { toggleColorScheme() }}>
        <IconAdjustments stroke={1.5} />
      </ActionIcon>
    </Box>
  )
}

export { Navbar }
