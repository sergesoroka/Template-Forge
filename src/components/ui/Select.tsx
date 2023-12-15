// @ts-nocheck
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect({ values }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const renderSelectItems = values.map((item, i) => {
    return (
      <MenuItem key={i} value={item.templateName}>
        {item.templateName}
      </MenuItem>
    );
  });

  return (
    <Box sx={{ minWidth: 400 }}>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-standard-label">
          Choose Template
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {renderSelectItems}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
