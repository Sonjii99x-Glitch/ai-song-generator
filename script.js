async function generateLyrics() {
  const prompt = document.getElementById('prompt').value;
  const output = document.getElementById('output');
  output.textContent = "🎶 Generating song...\n";

  const lines = [
    `Verse 1:\nI'm walking through shadows with hope on my side,`,
    `My heart’s in the fire but I'm learning to fight.`,
    `\nChorus:\nThis pain is a melody, rising in me,`,
    `Turn my tears into harmony, finally free.`,
    `\nBridge:\nEven when I'm breaking, I'm still creating,`,
    `A song from the silence, my soul elevating.`,
  ];

  output.textContent = lines.join('\n');
}
