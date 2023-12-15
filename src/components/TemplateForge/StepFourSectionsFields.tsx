import DynamicFields from "../ui/DynamicFields";

export default function StepFourSectionsFields() {
  return (
    <div>
      <h2 className="font-bold text-xl my-8">
        TEMPLATE: Define fields for the &apos;Sample&apos; section
      </h2>
      <DynamicFields step="4" />
    </div>
  );
}
