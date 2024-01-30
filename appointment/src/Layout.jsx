import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
export default function Layout() {
  return (
    <Flex minH="100vh" direction={"column"} justify={"space-between"}>
      <Navbar />
      <Outlet />
      <Footer />
    </Flex>
  );
}
