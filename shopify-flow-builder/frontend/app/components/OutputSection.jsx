import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

export default function OutputSection({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="empty-state text-gray-500 italic mt-8 text-center">
        No workflow generated yet. Describe your workflow to see results here.
      </div>
    );
  }

  const { trigger, conditions, actions, explanation } = data;

  return (
    <div className="output-section p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Generated Workflow</h2>

      <div className="overflow-auto border border-gray-200 rounded-md shadow-sm bg-white max-h-screen">
        <div className="p-6 space-y-8">

          {/* Trigger Section */}
          {trigger && (
            <Card title="Trigger" icon="🚀">
              <div className="bg-gray-50 p-4 rounded border border-gray-300">
                <p className="text-gray-700 mb-2">
                  <strong>Name:</strong> <span className="text-gray-900">{trigger.name}</span>
                </p>
                {trigger.parameters && (
                  <CodeBlock content={JSON.stringify(trigger.parameters, null, 2)} />
                )}
              </div>
            </Card>
          )}

          {/* Conditions Section */}
          {conditions.length > 0 && (
            <Card title="Conditions" icon="🔍">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded border border-gray-300 mb-2 flex justify-between items-start"
                >
                  <div>
                    <p className="text-gray-700 mb-2">
                      <strong>Name:</strong> <span className="text-gray-900">{condition.name}</span>
                    </p>
                    <CodeBlock content={JSON.stringify(condition.parameters, null, 2)} />
                  </div>
                  <CopyButton content={JSON.stringify(condition.parameters, null, 2)} />
                </div>
              ))}
            </Card>
          )}

          {/* Actions Section */}
          {actions.length > 0 && (
            <Card title="Actions" icon="⚙️">
              {actions.map((action, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded border border-gray-300 mb-2 flex justify-between items-start"
                >
                  <div>
                    <p className="text-gray-700 mb-2">
                      <strong>Name:</strong> <span className="text-gray-900">{action.name}</span>
                    </p>
                    <CodeBlock content={JSON.stringify(action.parameters, null, 2)} />
                  </div>
                  <CopyButton content={JSON.stringify(action.parameters, null, 2)} />
                </div>
              ))}
            </Card>
          )}

          {/* Explanation Section */}
          {explanation && (
            <Card title="Explanation" icon="📝">
              <div className="bg-gray-50 p-4 rounded border border-gray-300">
                {/* Trigger Explanation */}
                {explanation.trigger && (
                  <p className="text-gray-700 mb-2">
                    <strong>Trigger:</strong> {explanation.trigger}
                  </p>
                )}

                {/* Conditions Explanation */}
                {explanation.conditions?.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-semibold mb-1">Conditions</h4>
                    <ul className="list-disc ml-5 text-gray-700">
                      {explanation.conditions.map((cond, index) => (
                        <li key={index}>{cond}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions Explanation */}
                {explanation.actions?.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-semibold mb-1">Actions</h4>
                    <ul className="list-disc ml-5 text-gray-700">
                      {explanation.actions.map((action, index) => (
                        <li key={index}>{action}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ title, children, icon }) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">{icon}</span> {title}
      </h3>
      {children}
    </div>
  );
}

function CodeBlock({ content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      <pre className="bg-gray-100 text-sm p-3 rounded overflow-auto max-h-32 text-gray-800 font-mono">
        {content}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Copy Code"
      >
        {copied ? <ClipboardCheck className="h-5 w-5" /> : <Clipboard className="h-5 w-5" />}
      </button>
    </div>
  );
}

function CopyButton({ content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
      aria-label="Copy to clipboard"
    >
      {copied ? <ClipboardCheck className="h-5 w-5" /> : <Clipboard className="h-5 w-5" />}
    </button>
  );
}
