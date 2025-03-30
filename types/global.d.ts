interface Window {
  gtag: (command: string, id: string, config?: { page_path: string }) => void;
  dataLayer: Record<string, any>[];
}
