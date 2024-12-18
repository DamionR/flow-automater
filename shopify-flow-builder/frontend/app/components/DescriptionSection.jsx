import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DescriptionSection({ explanation }) {
  console.log("DescriptionSection - Explanation Received:", explanation);

  if (!explanation || Object.keys(explanation).length === 0) {
    return null;
  }

  return (
    <div className="description-section p-6 bg-white border border-gray-300 rounded-md shadow-sm">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-2">📝</span> Workflow Description
      </h3>

      {/* Trigger */}
      {explanation.trigger && (
        <CollapsibleSection title="Trigger" icon="🚀">
          <p className="text-gray-600">
            <strong>Description:</strong> {explanation.trigger}
          </p>
        </CollapsibleSection>
      )}

      {/* Conditions */}
      {explanation.conditions?.length > 0 && (
        <CollapsibleSection title="Conditions" icon="🔍">
          <ul className="list-disc ml-5 text-gray-600">
            {explanation.conditions.map((cond, index) => (
              <li key={index}>{cond}</li>
            ))}
          </ul>
        </CollapsibleSection>
      )}

      {/* Actions */}
      {explanation.actions?.length > 0 && (
        <CollapsibleSection title="Actions" icon="⚙️">
          <ul className="list-disc ml-5 text-gray-600">
            {explanation.actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </CollapsibleSection>
      )}
    </div>
  );
}

function CollapsibleSection({ title, children, icon }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <button
        className="flex items-center justify-between w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`${title}-content`}
      >
        <div className="flex items-center">
          <span className="mr-2">{icon}</span>
          <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div id={`${title}-content`} className="mt-2 pl-7">
          {children}
        </div>
      )}
    </div>
  );
}
