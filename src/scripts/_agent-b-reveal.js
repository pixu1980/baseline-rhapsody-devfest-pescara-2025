// Agent B reveal: typing effect that deletes "Baseline" to leave only "B"
export function setupAgentBReveal() {
  const section = document.querySelector('section[welcome]');
  if (!section) return;

  const mark = section.querySelector('mark');
  if (!mark) return;

  const originalText = 'Baseline';
  let deleteInterval = null;
  let isDeleting = false;

  const startDeleting = () => {
    if (isDeleting) return;
    isDeleting = true;

    setTimeout(() => {
      let currentText = originalText;
      deleteInterval = setInterval(() => {
        if (currentText.length <= 1) {
          clearInterval(deleteInterval);
          deleteInterval = null;
          return;
        }
        currentText = currentText.slice(0, -1);
        mark.textContent = currentText;
      }, 350);
    }, 1500);
  };

  const resetText = () => {
    if (deleteInterval) {
      clearInterval(deleteInterval);
      deleteInterval = null;
    }

    isDeleting = false;

    setTimeout(() => {
      mark.textContent = originalText;
    }, 450);
  };

  const observer = new MutationObserver(() => {
    if (section.classList.contains('present')) {
      startDeleting();
    } else {
      resetText();
    }
  });

  observer.observe(section, {
    attributes: true,
    attributeFilter: ['class'],
  });

  // Check if already present
  if (section.classList.contains('present')) {
    startDeleting();
  }
}
