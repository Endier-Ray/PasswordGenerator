import { generatePassword } from '../services/passwords.ts';

const output = document.getElementById('output') as HTMLParagraphElement | null;
const generateButton = document.getElementById('generate') as HTMLButtonElement | null;
const copyButton = document.getElementById('copy') as HTMLButtonElement | null;
const lengthValue = document.getElementById('length-value') as HTMLSpanElement | null;
const lengthInput = document.getElementById('length') as HTMLInputElement | null;
const includeUppercase = document.getElementById('include-uppercase') as HTMLInputElement | null;
const includeLowercase = document.getElementById('include-lowercase') as HTMLInputElement | null;
const includeNumbers = document.getElementById('include-numbers') as HTMLInputElement | null;
const includeSymbols = document.getElementById('include-symbols') as HTMLInputElement | null;

lengthInput?.addEventListener("input", () => {
  if (lengthValue && lengthInput) {
    lengthValue.textContent = lengthInput.value;
  }
});

generateButton?.addEventListener("click", async () => {
  if (
    !output ||
    !lengthInput ||
    !includeUppercase ||
    !includeLowercase ||
    !includeNumbers ||
    !includeSymbols ||
    !generateButton ||
    !copyButton
  ) {
    return;
  }

  output.textContent = "Generating...";
  generateButton.disabled = true;
  copyButton.disabled = true;

  try {
    const password = await generatePassword({
      length: Number(lengthInput.value),
      uppercase: includeUppercase.checked,
      lowercase: includeLowercase.checked,
      numbers: includeNumbers.checked,
      symbols: includeSymbols.checked,
    });

    output.textContent = password;
  } catch (error) {
    output.textContent = error instanceof Error ? `Error: ${error.message}` : "Error unknown";
  } finally {
    generateButton.disabled = false;
    copyButton.disabled = false;
  }
});

copyButton?.addEventListener("click", async () => {
  if (
    output?.textContent &&
    !output.textContent.startsWith("Error:") &&
    output.textContent !== "Generating..."
  ) {
    await navigator.clipboard.writeText(output.textContent);
  }
});