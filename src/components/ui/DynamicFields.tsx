// @ts-nocheck
"use client";
import { useState } from "react";
import Button from "@mui/material/Button";

import { selectData } from "../../data/selectData";
import { endpoints } from "../../data/endpoints";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BasicSelect from "./Select";
import BasicTextFields from "./TextField";
import RadioButtonsGroup from "./RadioGroup";
import ShowJson from "./ShowJson";

export default function DynamicFields({ step }) {
  const [value, setValue] = useState("new");
  const [fieldData, setFieldData] = useState([
    {
      method: "",
      template: "",
      sample: "",
      description: "",
      fieldName: "",
      unit: "",
      value: "",
    },
  ]);

  const handleClick = () => {
    setFieldData([
      ...fieldData,
      {
        method: "",
        template: "",
        sample: "",
        description: "",
        fieldName: "",
        unit: "",
        value: "",
      },
    ]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...fieldData];
    onchangeVal[i][name] = value;
    setFieldData(onchangeVal);
  };

  const handleDelete = (i) => {
    const deleteValue = [...fieldData];
    deleteValue.splice(i, 1);
    setFieldData(deleteValue);
  };

  return (
    <div>
      <div>
        {fieldData.map((val, i) => {
          if (step == "1") {
            return (
              <div key={i} className=" mb-8">
                <div className="flex flex-col gap-8">
                  <RadioButtonsGroup value={value} setValue={setValue} />
                  {value == "existing" && <BasicSelect values={endpoints} />}
                </div>
              </div>
            );
          }
          if (step == "2") {
            return (
              <div key={i} className=" mb-8">
                <div className="flex justify-between gap-10 items-center my-10">
                  <TextField
                    className="w-full"
                    id="standard-basic"
                    label="Method"
                    variant="standard"
                    name="method"
                    value={val.method}
                    onChange={(e) => handleChange(e, i)}
                  />
                  <BasicSelect values={endpoints} />
                </div>
                <TextField
                  className="w-full"
                  id="standard-basic"
                  label="Experement description"
                  variant="standard"
                  name="description"
                  value={val.description}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
            );
          }
          if (step == "3") {
            return (
              <div
                key={i}
                className="flex justify-start items-center gap-8 mb-8"
              >
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                  className="w-full flex justify-start items-center gap-8"
                >
                  <TextField
                    id="standard-basic"
                    label="Sample"
                    variant="standard"
                    name="sample"
                    value={val.sample}
                    onChange={(e) => handleChange(e, i)}
                  />
                </Box>
                <BasicSelect values={selectData} />
                <Button
                  className="w-[160px]"
                  variant="outlined"
                  onClick={() => handleDelete(i)}
                >
                  Remove
                </Button>
              </div>
            );
          }
          return (
            <div key={i} className="flex justify-start items-center gap-8 mb-8">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
                className="w-full flex justify-start items-center gap-8"
              >
                <TextField
                  id="standard-basic"
                  label="Field Name"
                  variant="standard"
                  name="fieldName"
                  value={val.fieldName}
                  onChange={(e) => handleChange(e, i)}
                />
                <TextField
                  id="standard-basic"
                  label="Unit"
                  variant="standard"
                  name="unit"
                  value={val.unit}
                  onChange={(e) => handleChange(e, i)}
                />
              </Box>

              <BasicSelect values={selectData} />
              <TextField
                id="standard-basic"
                label="Value"
                variant="standard"
                name="value"
                value={val.value}
                onChange={(e) => handleChange(e, i)}
              />
              <Button
                className="w-[160px]"
                variant="outlined"
                onClick={() => handleDelete(i)}
              >
                Remove
              </Button>
            </div>
          );
        })}
        {step == "3" && (
          <Button variant="outlined" onClick={handleClick}>
            Add Field
          </Button>
        )}
        {step == "4" && (
          <Button variant="outlined" onClick={handleClick}>
            Add Template section
          </Button>
        )}
      </div>

      <ShowJson data={fieldData} />
    </div>
  );
}
