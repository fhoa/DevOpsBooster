interface Theme {
  color: Color;
}

interface Color {
  main: string;
  secoundary: string;
  cancel: string;
  disabled: string;
  background: Background;
  text: Text;
  status: Status;
}

interface Status {
  success: string;
  warning: string;
  alert: string;
}

interface Background {
  main: string;
  layout: string;
  dark: string;
}

interface Text {
  dark: Dark;
  light: Light;
}

interface Dark {
  primary: string;
  disabled: string;
}

interface Light {
  primary: string;
  disabled: string;
}

const Theme: Theme = {
  color: {
    main: '#28666E',
    secoundary: '#7C9885',
    cancel: '#98645D',
    disabled: '#CBCEC5',
    background: {
      main: '#FFFFFF',
      layout: '#F4F4F8',
      dark: '#D3EADD',
    },
    text: {
      dark: {
        primary: '#4d4e4c',
        disabled: 'rgba(77, 78, 76, 0.3)',
      },
      light: {
        primary: '#ffffff',
        disabled: 'rgba(255, 255, 255, 0.3)',
      },
    },
    status: {
      success: '#69B57B',
      warning: '#FEDC97',
      alert: '#D57969',
    },
  },
};

export default Theme;
