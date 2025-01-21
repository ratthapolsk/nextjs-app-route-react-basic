'use client';
import { generateColors } from '@mantine/colors-generator';
import { MantineProvider, createTheme } from '@mantine/core'
import React, { ReactNode } from 'react'
const theme = createTheme({
  primaryColor: 'primary',
  primaryShade: { light: 3, dark: 9 },
  defaultRadius: 'md',
  colors: {
    primary: generateColors('#F01879'),
    slate: [
      '#f1f5f9',
      '#e2e6ec',
      '#c0ccd9',
      '#9bb1c8',
      '#7c99b9',
      '#688ab0',
      '#5e83ac',
      '#4d7098',
      '#426588',
      '#345779',
    ],
  },
});

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  )
}

export { Provider }
