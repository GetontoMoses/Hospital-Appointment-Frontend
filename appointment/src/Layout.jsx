import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Layout() {
  return (
    <Flex minH="100vh" direction={"column"} justify={"space-between"}>
      {/* direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" */}
      <Outlet />
    </Flex>
  );
}
