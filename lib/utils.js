import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function calculateReadingTime(text) {
  // Assuming an average reading speed of 200 words per minute
  let allText = '';

  if (text.blocks && text.blocks.length > 0) {
    text.blocks.forEach(block => {
      allText += block.text;
    });
  }
  const wordsPerMinute = 200;

  // Calculate the total word count in the articleText
  const wordCount = allText.split(/\s+/).length;

  // Calculate the reading time in minutes
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime  + " min";
}