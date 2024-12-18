import os

# Define the file paths
file_paths = [
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/empty_workflow.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/send_admin_api_request.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_actions.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_conditions.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_get_data_and_syntax.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_liquid_variables.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_metafield_actions.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_prompt.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_send_http_request_action.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_triggers.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/data/shopify_flow_troubleshooting_and_manual_execution.json",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/.env",
    "/Users/damionrashford/shopify-flow-builder/ai-backend/index.js",
]

# Output file
output_file = "/Users/damionrashford/shopify-flow-builder/ai-backend/project_files_content.txt"

# Read and write the contents to a single file
with open(output_file, "w") as outfile:
    for file_path in file_paths:
        if os.path.exists(file_path):
            outfile.write(f"\n--- START OF {file_path} ---\n\n")
            with open(file_path, "r") as infile:
                outfile.write(infile.read())
            outfile.write(f"\n--- END OF {file_path} ---\n\n")
        else:
            outfile.write(f"\n--- {file_path} DOES NOT EXIST ---\n")

print(f"All file contents have been written to: {output_file}")
