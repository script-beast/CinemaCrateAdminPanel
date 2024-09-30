const palette = {
  primary: {
    main: "#5D87FF",
    light: "#ECF2FF",
    dark: "#4570EA",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#49BEFF",
    light: "#E8F7FF",
    dark: "#23afdb",
    contrastText: "#ffffff",
  },
  success: {
    main: "#13DEB9",
    light: "#E6FFFA",
    dark: "#02b3a9",
    contrastText: "#ffffff",
  },
  info: {
    main: "#539BFF",
    light: "#EBF3FE",
    dark: "#1682d4",
    contrastText: "#ffffff",
  },
  error: {
    main: "#FA896B",
    light: "#FDEDE8",
    dark: "#f3704d",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#FFAE1F",
    light: "#FEF5E5",
    dark: "#ae8e59",
    contrastText: "#ffffff",
  },
  cardBackground: {
    main: "#ffffff",
  },
  text: {
    primary: "#2A3547",
    secondary: "#5A6A85",
  },
  divider: "#e5eaef",
  background: {
    default: "#F2F6FA",
  },
  sidebar: {
    background: "#121621",
    color: "#ffffff",
    link: "#b3b9c6",
  },
  dataGrid: {
    headerColor: "#2A3547",
    rowColor: "#2A3547",
    selectedRowColor: "#ffffff",
    selectedRowBackground: "#5D87FF",
    border: "#e5eaef",
  },
};

const typography = {
  fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
  h1: {
    fontSize: "2.5rem",
    fontWeight: 600,
  },
  h2: {
    fontSize: "2.25rem",
    fontWeight: 600,
  },
  h3: {
    fontSize: "2rem",
    fontWeight: 600,
  },
  h4: {
    fontSize: "1.75rem",
    fontWeight: 600,
  },
  h5: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  h6: {
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 600,
  },
};

const typographyComponent = {
  MuiTypography: { styleOverrides: { root: { textTransform: "capitalize" } } },
};

const cardComponent = {
  MuiCard: {
    variants: [
      {
        props: { variant: "mainCard" },
        style: {
          maxWidth: "1440px",
          margin: "auto",
        },
      },
      {
        props: { variant: "loginCard" },
        style: {
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: palette.cardBackground.main,
          padding: "30px 20px 40px 20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.07)",
        },
      },
    ],
  },
};

const cssBaseline = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        fontFamily: typography.fontFamily,
        color: palette.text.primary,
        background: palette.background.default,
        "&::-webkit-scrollbar": {
          width: "7px",
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: palette.primary.main,
          borderRadius: "8px",
        },
      },
    },
  },
};

const inputComponent = {
  MuiInputBase: {
    styleOverrides: { root: { backgroundColor: palette.cardBackground.main } },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: { borderRadius: "7px" },
      input: { padding: "10px" },
    },
  },
};

const buttonComponent = {
  MuiButton: {
    styleOverrides: { root: { textTransform: "none" } },
    variants: [],
  },
};

const drawerComponent = {
  MuiDrawer: {
    styleOverrides: {},
    variants: [
      {
        props: { usage: "sidebar" },
        style: {
          "& .MuiDrawer-paper": {
            backgroundColor: palette.error.main,
            // color: "red",
          },
        },
      },
    ],
  },
};

const listComponent = {
  MuiListItemButton: {
    styleOverrides: {},
    variants: [
      {
        props: { variant: "sidebarLink" },
        style: {
          color: palette.sidebar.link,
          borderRadius: "7px",
          "&:hover": {
            backgroundColor: palette.primary.main,
            color: palette.sidebar.color,
          },
        },
      },
      {
        props: { variant: "sidebarLink", selected: true },
        style: {
          color: palette.sidebar.color,
          "&.Mui-selected": {
            backgroundColor: palette.primary.main,
            "&:hover": {
              backgroundColor: palette.primary.main,
            },
          },
        },
      },
    ],
  },
};

const dataGridComponent = {
  MuiDataGrid: {
    styleOverrides: {
      root: {
        border: `1px solid ${palette.dataGrid.border}`,
        // scrollbar
        "& .MuiDataGrid-main": {
          "&::-webkit-scrollbar": {
            width: "10px",
            backgroundColor: "red",
          },
          "&::-webkit-scrollbar-track": {
            background: palette.background.default,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: palette.primary.main,
            borderRadius: "10px",
          },
        },
        "& .MuiDataGrid-columnsContainer": {
          borderBottom: `1px solid ${palette.dataGrid.border}`,
        },
        "& .MuiDataGrid-cell": {
          color: palette.text.primary,
          "&:focus,&:focus-within": { outline: "none" },
        },
        "& .MuiDataGrid-row": {
          borderBottom: `1px solid ${palette.dataGrid.border}`,
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: 600,
        },
      },
    },
  },
};

const containerComponent = {
  MuiContainer: {
    styleOverrides: {},
    variants: [
      {
        props: { variant: "main" },
        style: {
          maxWidth: "1440px",
          margin: "auto",
          backgroundColor: palette.cardBackground.main,
          borderRadius: "10px",
          marginTop: "20px",
        },
      },
    ],
  },
};

const dailogComponent = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        padding: "10px 20px",
        minWidth: "400px",
        borderRadius: "10px",
      },
    },
    variants: [
      {
        props: { variant: "viewDetails" },
        style: {
          "& .MuiDialog-paper": {
            padding: "20px",
            maxWidth: "min(90vw, 700px)",
          },
        },
      },
      {
        props: { variant: "confirmBox" },
        style: {},
      },
    ],
  },
};

const themeSettings = {
  palette,
  typography,
  components: {
    ...typographyComponent,
    ...cardComponent,
    ...cssBaseline,
    ...inputComponent,
    ...buttonComponent,
    ...drawerComponent,
    ...listComponent,
    ...dataGridComponent,
    ...containerComponent,
    ...dailogComponent,
  },
};

export default themeSettings;
