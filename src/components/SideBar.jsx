import React from "react";
import { Button, Stack } from "@mui/material";

import { categories } from "../utils/constants";
import { useGlobalContext } from "../context/AppContext";


const SideBar = () => {
  const {selectedCategory,setSelectedCategory} =useGlobalContext();

  return (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      mt: { md: 1 },
    }}
  >
    {categories.map((category) => (
        <Button className="category-btn"
          sx={{minWidth:"142px",
          justifyContent:{md:"start",sx:"center"},
          pl:{md:4},
          background: category.name === selectedCategory && "#005DD6",
          color: category.name === selectedCategory ? "white" : "#b0b1b2",
          mb:{md:1},
          ml: { xs: "6px", md: 0 },
          mb: { xs: "10px", md: 2 }
        }} 
        startIcon={category.icon}
        key={category.name}
        size="small"
        onClick={()=>(setSelectedCategory(category.name))}
        >
           {category.name}
        </Button>
    ))}
  </Stack>
  )
};

export default SideBar;
