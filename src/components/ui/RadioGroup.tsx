// @ts-nocheck
"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ value, setValue }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="new"
          control={<Radio />}
          label="Create new template"
        />
        <FormControlLabel
          value="existing"
          control={<Radio />}
          label="Select existing template"
        />
      </RadioGroup>
    </FormControl>
  );
}
