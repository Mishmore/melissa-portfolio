/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
