// @ts-nocheck
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import { cssCustom } from "../../data/cssCustom";

import { surveyJSON } from "../../data/jsonForms";

const surveyJson = {
  elements: [
    {
      name: "Tamplate Name",
      title: "Enter your Template name:",
      type: "radiogroup",

      choices: [
        "Use the existing Template",
        "Redefine the existing Template",
        "Create a new Template",
      ],
    },
    {
      name: "Tamplate Name",
      title: "Enter your Template name:",
      type: "text",
    },

    {
      type: "dropdown",
      name: "PROTOCOL_TOP_CATEGORY",
      title: "Module",
      defaultValue: "P-CHEM",
      choices: [
        {
          value: "P-CHEM",
          text: "Physico-chemical",
        },
        {
          value: "ECOTOX",
          text: "Ecotox",
        },
        {
          value: "ENV FATE",
          text: "Environmental fate",
        },
        {
          value: "TOX",
          text: "Toxicity",
        },
        {
          value: "EXPOSURE",
          text: "Exposure",
        },
      ],
      placeholder: "P-CHEM",
    },
  ],
};

function FirstForm() {
  const survey = new Model(surveyJSON);

  survey.applyTheme(cssCustom);

  return <Survey model={survey} />;
}

export default FirstForm;
