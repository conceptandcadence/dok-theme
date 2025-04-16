module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#F7F5EF',
        black: '#000',
        yellow: '#F9C33C',
        deep: '#233644',
        ocean: '#495C6B',
        sand: '#EFEBDF',
        turqoise: '#2C7683',
      },
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
      fontSize: {
        '3xs': [
          '0.625rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1.25',
          },
        ],
        '2xs': [
          '0.75rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1.25',
          },
        ],
        xs: [
          '0.825rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1.2',
          },
        ],
        sm: [
          '0.925rem',
          {
            letterSpacing: '0',
            lineHeight: '1.2',
          },
        ],
        md: [
          '1.125rem',
          {
            letterSpacing: '0',
            lineHeight: '1.2',
          },
        ],
        lg: [
          '1.25rem',
          {
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
          },
        ],
        xl: [
          '1.5rem',
          {
            letterSpacing: '-0.03em',
            lineHeight: '1.125',
          },
        ],
        '2xl': [
          '1.75rem',
          {
            letterSpacing: '-0.0175em',
            lineHeight: '1.1',
          },
        ],
        '3xl': [
          '2rem',
          {
            letterSpacing: '-0.03em',
            lineHeight: '1.25',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            letterSpacing: '-0.03em',
            lineHeight: '1.15',
          },
        ],
        '5xl': [
          '2.5rem',
          {
            letterSpacing: '-0.03em',
            lineHeight: '1.15',
          },
        ],
      },
    },
  },
  plugins: [],
};
