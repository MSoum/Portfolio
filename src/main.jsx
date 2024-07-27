import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector'; // Make sure this is installed
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap/dist/css/bootstrap.min.css'

import "./index.css";
import App from "./App.jsx";

import "@fontsource/outfit";
import "@fontsource/roboto";

// Initialize i18n
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(languageDetector) // Use language detector
  .use(HttpApi)
  .init({
    supportedLngs: ['es','en','fr'],
    fallbackLng: "en",
    detection: {
      order: ['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  })

// Ensure there's a root element with ID 'root' in your HTML file
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
