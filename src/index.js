import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "emotion-theming";

import App from "./app";

const Index = () => {
  const theme = {
    colors: {
      grey: "#607d8b",
      greyLight: "#8eacbb",
      greyDark: "#34515e",
      primary: "#43a047",
      primaryLight: "#76d275",
      primaryDark: "#00701a",
      secondary: "#e53935",
      secondaryLight: "#ff6f60",
      secondaryDark: "#ab000d",
      primaryText: "#ffffff",
      secondaryText: "#000000",
      danger: "#ab000d",
      success: "#00701a"
    },
    zIndex: {
      base: 0,
      overlay: 1000,
      abovePage: 1001
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

render(<Index />, document.getElementById("react-root"));

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(reg => {
        // on updated version found
        reg.onupdatefound = function() {
          const installingWorker = reg.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case "installed": {
                if (navigator.serviceWorker.controller) {
                  // old content purged and fresh content added to cache
                  //prompt to refresh
                  const updateEvent = new CustomEvent("toast", {
                    detail: {
                      type: "refresh",
                      message: "Update Found"
                    }
                  });
                  window.dispatchEvent(updateEvent);
                } else {
                  const cachedEvent = new CustomEvent("toast", {
                    detail: {
                      type: "dismiss",
                      message: "Content now available offline"
                    }
                  });
                  window.dispatchEvent(cachedEvent);
                }

                break;
              }
              case "redundant": {
                const redundantEvent = new CustomEvent("toast", {
                  detail: {
                    type: "dismiss",
                    message: "Installation became redundant"
                  }
                });
                window.dispatchEvent(redundantEvent);
                break;
              }
              default: {
                // noop
                break;
              }
            }
          };
        };
      })
      .catch(() => {
        const errorEvent = new CustomEvent("toast", {
          detail: {
            type: "dismiss",
            message: "Error installing, please try again later."
          }
        });
        window.dispatchEvent(errorEvent);
      });
  });

  window.addEventListener("appinstalled", function() {
    const installedEvent = new CustomEvent("toast", {
      detail: {
        type: "dismiss",
        message: "You've installed the app!"
      }
    });
    window.dispatchEvent(installedEvent);
  });
}
