// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 12,
    colorPrimary: "#000",
  },
  components: {
    Tabs: {
      inkBarColor: "transparent",
      itemActiveColor: "black",
    },
  },
};

export default theme;
