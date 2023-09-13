"use client";

import { useWindowSize } from "utils/useWindowSize";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { MOBILE_BREAKPOINT } from "utils/constants";

export const Navigation = () => {
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < MOBILE_BREAKPOINT;

  const Nav = !isBrowserMobile ? <Desktop /> : <Mobile />;

  return Nav;
};
