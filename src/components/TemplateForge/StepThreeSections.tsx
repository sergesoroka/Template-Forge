import React from "react";
import DynamicFields from "../ui/DynamicFields";

import { selectData } from "../../data/selectData";
import BasicTextFields from "../ui/TextField";
import BasicSelect from "../ui/Select";
import Button from "@mui/material/Button";

export default function StepThreeSections() {
  return (
    <div>
      <h2 className="font-bold text-xl my-8">Template: Define Sections</h2>
      <DynamicFields step="3" />
    </div>
  );
}
