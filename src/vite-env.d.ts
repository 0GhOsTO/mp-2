interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_API_URI?: string;  // Add this line
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
