// @ts-nocheck
"use client";
import { useState } from "react";
import * as XLSX from "xlsx";
import { FaFileExcel } from "@react-icons/all-files/fa/FaFileExcel";
// FaThList;

function UploadFile({ setJsonFromFile }) {
  const [fileName, setFileName] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setFileName(file && file.name);
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setJsonFromFile(jsonData);
  };

  return (
    <label
      for="fileUpload"
      className="w-[fit-content] bg-violet-100 flex items-center gap-1 text-slate-700 font-medium rounded-full px-[20px] py-2 cursor-pointer"
    >
      <FaFileExcel />
      {fileName ? fileName : "Upload Exel File"}
      <input
        id="fileUpload"
        className="hidden"
        type="file"
        onChange={(e) => handleFileUpload(e)}
      />{" "}
    </label>
  );
}

export default UploadFile;
