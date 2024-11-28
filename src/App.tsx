import React from "react";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Correct imports
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import "./App.css";
import '@mantine/notifications/styles.css';
import { Divider } from "@mantine/core";
import HomePage from "./Pages/HomePage";
import FindeJobs from "./Pages/FindJobs";
import Footer from "./Components/Footer/Footer";
import FindTalents from "./Pages/FindTalents";
import Header from "./Components/Header/Header";
import TalentProfile from "./Pages/TalentProfile";
import PostJobPage from "./Pages/PostJobPage";
import CompanyPage from "./Pages/CompanyPage";
import JobDescPage from "./Pages/JobDescPage";
import ApplyJobPage from "./Pages/ApplyJob";
import PostedJobPage from "./Pages/PostedJobPage";
import JobHistoryPage from "./Pages/JobHistoryPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import Store from "./Components/Store";
import { getItem } from "./Services/LocalStrageService";
import AppRoutes from "./Pages/AppRoutes";

const theme: MantineThemeOverride = {
  colors: {
    "mine-shaft": [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#6d6d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#3d3d3d",
    ] as const,
    cinnamon: [
      "#feffe4",
      "#fcffb8",
      "#f9ff75",
      "#ffff27",
      "#ffef00",
      "#ffd300",
      "#eda000",
      "#bc6f00",
      "#9a5500",
      "#793f01",
    ] as const,
    "bright-sun": [
      "#fffbe6", // 50
      "#fff4bf", // 100
      "#ffe992", // 200
      "#ffd957", // 300
      "#ffcc1a", // 400
      "#ffb800", // 500
      "#e6a600", // 600
      "#b37c00", // 700
      "#805800", // 800
      "#4d3400", // 900
    ] as const,
  },

  fontFamily: `poppinns,sens-serif`,
  primaryColor: "cinnamon",
};


function App() {
  return (
    <Provider store={Store}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Notifications position="top-center" zIndex={10000} />
        <AppRoutes />
      </MantineProvider>
    </Provider>
  );
}

export default App;
