"use client";
import { useState } from "react";
import useSWR from "swr";
import RadioButtonsGroup from "../ui/RadioGroup";
import BasicSelect from "../ui/Select";
import { fetcher } from "../../../lib/fetcher";
import DynamicFields from "../ui/DynamicFields";

import { endpoints } from "../../data/endpoints";

export default function StepOneTemplate() {
  const [value, setValue] = useState("new");

  const { data, error } = useSWR(
    `https://api.ramanchada.ideaconsult.net/template/4b751796-a7d3-4bb3-9fdc-e111a7bebc27`,
    fetcher
  );

  return (
    <div>
      <h2 className="font-bold text-xl my-8">Templates</h2>
      <DynamicFields step="1" />
    </div>
  );
}
