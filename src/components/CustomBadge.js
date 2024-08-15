"use client";
import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Icon from "@mui/material/Icon";
import { Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { orange, pink, purple, green } from "@mui/material/colors";

const ColorButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[100]),
  backgroundColor: pink[50],

  "&:hover": {
    backgroundColor: green[700],
    "& .MuiIcon-root": {
      color: green[50],
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 8,
    background: orange[400],
    padding: "0 4px",
  },
}));

export default function CustomBadge() {
  return (
    <StyledBadge badgeContent={1}>
      <ColorButton>
        <Icon>shopping_basket</Icon>
      </ColorButton>
    </StyledBadge>
  );
}
