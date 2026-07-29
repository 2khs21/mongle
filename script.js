document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.nextElementSibling.textContent;

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "복사됨";
      window.setTimeout(() => {
        button.textContent = "복사";
      }, 1400);
    } catch {
      button.textContent = "복사 실패";
    }
  });
});
