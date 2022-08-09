import { Button } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Pricing.module.css";

const BtnComponent = ({ label, sizeGiven, status }) => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.isAuth);

  const handleBtnClick = () => {
    if (label === "Get Started Today" && isAuth) {
      return navigate("/dashboard");
    } else if (label === "Learn More") {
      return navigate("/enterprise");
    } else if (isAuth) {
      return navigate("/payment");
    } else if (!isAuth) {
      navigate("/auth/signup");
    }
    else if(label==="Compare Plan")
    {
      navigate("/pricing")
    }
  };
  return (
    <Button
      _hover={{ backgroundColor: "#5846f6", color: "white" }}
      h={"50px"}
      fontWeight={"400"}
      border={"1px solid blue"}
      borderRadius={"30px"}
      bgColor={label === "Current Plan" ? "#5846f6" : "white"}
      color={label === "Current Plan" ? "white" : "#5846f6"}
      size={sizeGiven === 100 ? "100%" : "lg"}
      disabled={label === "Current Plan"}
      className={status === "active" ? styles.activeBtn : ""}
      onClick={handleBtnClick}
    >
      {label}
    </Button>
  );
};

export default BtnComponent;
