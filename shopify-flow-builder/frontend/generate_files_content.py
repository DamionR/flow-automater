import os

# List of specific files to extract
files_to_extract = [
    "/Users/damionrashford/shopify-flow-builder/frontend/app/components/PageLayout.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/routes/_index.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/utils/api.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/root.jsx",
    "/Users/damionrashford/shopify-flow-builder/frontend/app/tailwind.css",
    "/Users/damionrashford/shopify-flow-builder/frontend/public/index.html",
    "/Users/damionrashford/shopify-flow-builder/frontend/.env",
    "/Users/damionrashford/shopify-flow-builder/frontend/.eslintrc.cjs",
    "/Users/damionrashford/shopify-flow-builder/frontend/.gitignore",
    "/Users/damionrashford/shopify-flow-builder/frontend/eslint.config.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/package.json",
    "/Users/damionrashford/shopify-flow-builder/frontend/postcss.config.js",
    "/Users/damionrashford/shopify-flow-builder/frontend/README.md",
    "/Users/damionrashford/shopify-flow-builder/frontend/tailwind.config.ts",
    "/Users/damionrashford/shopify-flow-builder/frontend/tsconfig.json",
    "/Users/damionrashford/shopify-flow-builder/frontend/vite.config.js",
]

# Output file
output_file = "/Users/damionrashford/shopify-flow-builder/extracted_files.txt"

def extract_files(files, output):
    with open(output, "w") as outfile:
        for file in files:
            if os.path.exists(file):
                outfile.write(f"=== {file} ===\n")
                with open(file, "r") as infile:
                    outfile.write(infile.read())
                outfile.write("\n\n")
            else:
                outfile.write(f"=== {file} ===\n")
                outfile.write("File not found.\n\n")

if __name__ == "__main__":
    extract_files(files_to_extract, output_file)
    print(f"Files extracted to {output_file}")
