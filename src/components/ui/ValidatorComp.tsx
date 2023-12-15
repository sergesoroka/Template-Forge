"use client";
import { useState } from "react";
import SelectDemo from "./SelectComp";
import useSWR from "swr";
import ShowJson from "./ShowJson";
import UploadFile from "./UplodFile";
import { fetcher } from "../../../lib/fetcher";

import dataURLs from "../../data/urls.json";

// https://enanomapper.adma.ai/api/templates/definition.json

export default function ValidatorComp() {
  const [assayName, setAssayName] = useState("");
  const [jsonFromFile, setJsonFromFile] = useState(null);
  const [source, setSource] = useState(0);

  // const { data } = useSWR(shouldFetch ? '/api/data' : null, fetcher)
  const { data, error } = useSWR(
    assayName !== "" &&
      `https://enanomapper.adma.ai/assets/dataentry_template/configs/${assayName}.json`,
    fetcher
  );

  return (
    <div className="w-full">
      {/* <div className="flex justify-between items-center"> */}
      <SelectDemo
        urls={dataURLs}
        assayName={assayName}
        setAssayName={setAssayName}
      />
      <div className="mt-6">
        <UploadFile setJsonFromFile={setJsonFromFile} />
      </div>
      {/* </div> */}
      <div className="flex justify-center items-center gap-4 mt-20">
        <button
          onClick={() => setSource(0)}
          className={`${
            source == 0 ? "text-white  bg-violet-900" : "bg-violet-100"
          } rounded-full px-4 py-1 `}
        >
          From API
        </button>
        <button
          onClick={() => setSource(1)}
          className={`${
            source == 1 ? "text-white bg-violet-900" : "bg-violet-100"
          }  rounded-full px-4 py-1 `}
        >
          From File
        </button>
      </div>
      {source == 1 && jsonFromFile && (
        <div className="mt-12 bg-[#fcf9ff] rounded-sm p-4">
          <ShowJson data={jsonFromFile} />
        </div>
      )}
      {source == 0 && data && (
        <div className="mt-12 bg-[#fcf9ff] rounded-sm p-4">
          <ShowJson data={data} />
        </div>
      )}
    </div>
  );
}
