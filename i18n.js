const NextI18Next = require("next-i18next").default;
// const LngDetector = require('i18next-browser-languagedetector').default
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const { default: Axios } = require("axios");
const path = require("path");

const option = {
  defaultLanguage: "tr",
  fallbackLng: "tr",
  defaultNS: "common",
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
  serverLanguageDetection: false,
  detection: {
    order: ["cookie"],
    lookupCookie: "lang",
    caches: ["cookie"],
    cookieExpirationDate: new Date().setMonth(new Date().getMonth() + 12),
    cookieSameSite: "strict",
  },
  react: {
    // trigger a rerender when language is changed
    bindI18n: "languageChanged",
    // we're NOT using suspsense to detect when the translations have loaded
    useSuspense: false,
  },
  backend: {
    loadPath: "http://localhost:3000/public/static/locales/tr.json",
    parse: (data) => {
      return data;
    },
    request: (options, url, payload, callback) => {
      Axios.get(url)
        .then((res) => {
          console.log(res.data);
          callback(null, res);
        })
        .catch((err) => {
          console.log(err);
          callback(err, null);
        });
    },
  },
};
module.exports = new NextI18Next(option);
