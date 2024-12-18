import os

# List of files and directories to process
file_paths = [
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/DescriptionSection.jsx",
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
    "/Users/damionrashford/shopify-flow-builder/frontend/.eslintrc.cjs",
    "/Users/damionrashford/shopify-flow-builder/frontend/tailwind.config.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/tsconfig.json",
    "/Users/damionrashford/shopify-flow-builder/frontend/vite.config.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/package.json",
    "/Users/damionrashford/shopify-flow-builder/frontend/postcss.config.js",
]

# Output file for storing the content
output_file = "frontend_files_content.txt"

def write_content_to_file(file_path, output_handle):
    """Writes the content of a file or directory listing to the output file."""
    if os.path.isdir(file_path):
        # Write directory listing
        output_handle.write(f"Directory: {file_path}\n")
        for item in os.listdir(file_path):
            output_handle.write(f"  - {item}\n")
        output_handle.write("\n")
    elif os.path.isfile(file_path):
        # Write file content
        output_handle.write(f"File: {file_path}\n")
        with open(file_path, "r") as f:
            output_handle.write(f.read())
        output_handle.write("\n" + "=" * 80 + "\n")
    else:
        # If the path is invalid, write a message
        output_handle.write(f"Invalid path: {file_path}\n\n")

def main():
    with open(output_file, "w") as output_handle:
        for file_path in file_paths:
            write_content_to_file(file_path, output_handle)
    print(f"Content written to {output_file}")

if __name__ == "__main__":
    main()
