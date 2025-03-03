import { extendTheme } from "@chakra-ui/react";

const toastTheme = {
  components: {
    Alert: {
      baseStyle: {
        container: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "16px 24px", // Increased padding for a softer look
          gap: "12px", // More space between icon and text
          background:
            "radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F",
          borderRadius: "12px", // More rounded corners
          boxShadow:
            "0px 8px 16px rgba(116, 200, 152, 0.15), 0px 4px 4px rgba(40, 41, 50, 0.1)", // Soft glowing effect
        },
        icon: {
          width: "24px",
          height: "24px",
          color: "rgba(116, 200, 152, 0.7)",
          display: "flex",
          "margin-top": "13px",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.25rem",
        },
      },
    },
  },
};

export default extendTheme(toastTheme);
