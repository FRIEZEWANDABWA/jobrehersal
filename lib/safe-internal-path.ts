export function safeInternalPath(from: string | null): string {
  if (!from || !from.startsWith("/") || from.startsWith("//")) {
    return "/";
  }
  if (from.startsWith("/login")) {
    return "/";
  }
  return from;
}
