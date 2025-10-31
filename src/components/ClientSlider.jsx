"use client";

import dynamic from "next/dynamic";

// Lazily load react-slick on the client to avoid shipping the slider code in the initial server bundle.
const ClientSlider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default ClientSlider;
