import React from "react";
import "./documentList.scss";
import Doc from "../../document";

const allDocuments = [
  { value: Doc.ExecutiveSummary, label: "Executive Summary" },
  { value: Doc.ProjectVision, label: "Project Vision" },
  { value: Doc.FeasibilityStudy, label: "Feasibility Study" },
  { value: Doc.ProjectCharter, label: "Project Charter" },
  { value: Doc.ProofOfConcept, label: "Proof of Concept" },
  {
    value: Doc.Backlog_DOD_DomainModel,
    label: "Product Backlog, Definition of Done and Domain Model",
  },
  {
    value: Doc.ConfigurationManagement,
    label: "Configuration Management",
  },
  { value: Doc.Prototype, label: "Website Prototype" },
  { value: Doc.EnvironmentSetup, label: "Environment Setup" },
  { value: Doc.UserManual, label: "User Manual" },
  { value: Doc.SummaryReport, label: "Summary Report" },
];
const DocumentList = () => {
  return (
    <div className="document">
      {allDocuments.map((doc, index) => (
        <a
          key={doc.label}
          className="document__item"
          href={doc.value}
          target="_blank"
          rel="noreferrer"
        >
          {index + 1}. {doc.label}
        </a>
      ))}
    </div>
  );
};

export default DocumentList;
