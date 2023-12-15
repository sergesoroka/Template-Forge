"use client";
import React from "react";
import BasicTextFields from "../ui/TextField";
import BasicSelect from "../ui/Select";

import DynamicFields from "../ui/DynamicFields";

import { endpoints } from "../../data/endpoints";

export default function StepTwoMethod() {
  return (
    <div>
      <h2 className="font-bold text-xl my-8">Method</h2>
      <DynamicFields step="2" />
    </div>
  );
}
