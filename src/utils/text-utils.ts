export function truncatedWithDots(text: string, maxLength: number) {
  return text && text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}
