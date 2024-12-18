import os

# List of all files and directories to include
paths = [
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/DescriptionSection.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/DownloadSection.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/FeedbackButton.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/Header.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/OutputSection.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/PageLayout.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/SearchBar.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/routes",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/routes/_index.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/utils",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/utils/api.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/root.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/tailwind.css",
    "/Users/damionrashford/shopify-flow-builder/frontend/public/index.html",
    "/Users/damionrashford/shopify-flow-builder/frontend/.env",
    "/Users/damionrashford/shopify-flow-builder/frontend/eslint.config.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/package.json",
    "/Users/damionrashford/shopify-flow-builder/frontend/postcss.config.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/tailwind.config.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/tsconfig.json",
    "/Users/damionrashford/shopify-flow-builder/frontend/vite.config.js"
]

# Output file
output_file = "frontend_files_dump.txt"

def write_file_contents(file_paths, output_path):
    """
    Reads the contents of specified files and directories
    and writes them to a single text file, clearly structured.
    """
    with open(output_path, "w", encoding="utf-8") as output:
        for path in file_paths:
            if os.path.exists(path):
                if os.path.isfile(path):
                    # Write file content
                    output.write(f"\n{'='*80}\n")
                    output.write(f"FILE: {path}\n")
                    output.write(f"{'='*80}\n")
                    try:
                        with open(path, "r", encoding="utf-8") as file:
                            output.write(file.read())
                    except Exception as e:
                        output.write(f"Error reading file {path}: {e}\n")
                elif os.path.isdir(path):
                    # Write directory listing
                    output.write(f"\n{'='*80}\n")
                    output.write(f"DIRECTORY: {path}\n")
                    output.write(f"{'='*80}\n")
                    for root, _, files in os.walk(path):
                        for file in files:
                            file_path = os.path.join(root, file)
                            output.write(f"\n--- FILE: {file_path} ---\n")
                            try:
                                with open(file_path, "r", encoding="utf-8") as f:
                                    output.write(f.read())
                            except Exception as e:
                                output.write(f"Error reading file {file_path}: {e}\n")
            else:
                output.write(f"\n{'-'*80}\n")
                output.write(f"Path not found: {path}\n")
                output.write(f"{'-'*80}\n")
    print(f"All file contents have been written to: {output_path}")

if __name__ == "__main__":
    write_file_contents(paths, output_file)
