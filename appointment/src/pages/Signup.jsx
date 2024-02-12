import { useState } from "react";
import {
  useToast,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import GetDept from "../helpers/GetDept";
export default function Signup() {
  const toast = useToast();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    staffId: "",
    Departmnet: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleDepartmentChange(department) {
    setValues((prev) => ({
      ...prev,
      Department: department,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const {
      FirstName,
      LastName,
      email,
      PhoneNumber,
      Doctor_StaffID,
      Departmnet,
    } = values;
    try {
      const res = await fetch("http://127.0.0.1:8000/doctor/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FirstName,
          LastName,
          email,
          PhoneNumber,
          Doctor_StaffID,
          Departmnet,
        }),
      });
      console.log(res);
      if (res.status !== 201) {
        toast({
          title: "Error Occured.",
          description: "Something Went Wrong Please Try Again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error Occured.",
        description: "Unable to contact server",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Create account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("#002B56", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack color={"#FFFFFF"} spacing={1}>
            <FormControl id="firstName">
              <FormLabel>First Name</FormLabel>
              <Input onChange={handleChange} name="FirstName" type="text" />
            </FormControl>

            <Flex>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>

                <Input onChange={handleChange} name="LastName" type="text" />
              </FormControl>
            </Flex>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input onChange={handleChange} name="email" type="email" />
            </FormControl>
            <FormControl id="PhoneNumber">
              <FormLabel>Phone Number</FormLabel>
              <Input onChange={handleChange} name="PhoneNumber" type="tel" />
            </FormControl>
            <FormControl id="staffId">
              <FormLabel>Doctor StaffID</FormLabel>
              <Input
                onChange={handleChange}
                name="Doctor_StaffID"
                type="staffId"
              />
            </FormControl>
            <FormControl id="department">
              <FormLabel>Department</FormLabel>
              <GetDept onSelectDepartment={handleDepartmentChange} />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
