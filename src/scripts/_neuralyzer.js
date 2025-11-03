// Neuralyzer controller: handles sequence, triggers and integration with Reveal
export function setupNeuralyzer() {
  const overlay = document.querySelector('.mib-neuralyzer');
  const device = document.querySelector('.mib-device');
  if (!overlay || !device) return;

  // Track which containers have been swapped
  const swappedContainers = new Set();
  let pendingCoverContainer = null;
  let pendingSubtitle = null;
  let documentTitleSwapped = false;

  const performCoverSwapIfPending = () => {
    if (!pendingCoverContainer || swappedContainers.has(pendingCoverContainer)) return;
    try {
      console.debug('[neuralyzer] performing cover crossfade, container:', pendingCoverContainer);
      pendingCoverContainer.classList.add('swap-active');
      swappedContainers.add(pendingCoverContainer);
      console.debug('[neuralyzer] cover crossfade triggered');
    } catch (e) {
      console.warn('Failed to trigger cover crossfade:', e);
    }
    pendingCoverContainer = null;
  };

  const performSubtitleSwapIfPending = () => {
    if (!pendingSubtitle) return;
    try {
      console.debug('[neuralyzer] swapping subtitle text');
      const mark = pendingSubtitle.querySelector('mark');
      if (mark) {
        mark.textContent = 'MIB file';
      }
    } catch (e) {
      console.warn('Failed to swap subtitle:', e);
    }
    pendingSubtitle = null;
  };

  const performDocumentTitleSwap = () => {
    if (documentTitleSwapped) return;
    try {
      console.debug('[neuralyzer] swapping document title');
      document.title = 'Men in Baseline - A MIB file of Style and Motion';
      documentTitleSwapped = true;
    } catch (e) {
      console.warn('Failed to swap document title:', e);
    }
  };

  const flash = () => {
    overlay.classList.remove('flash');
    void overlay.offsetWidth;
    overlay.classList.add('flash');
    overlay.addEventListener('animationend', () => overlay.classList.remove('flash'), { once: true });
  };

  const playNeuralyzerSound = () => {
    try {
      const audio = new Audio(new URL('../assets/audio/neuralyzer.mp3', import.meta.url).href);
      audio.volume = 0.6;
      audio.play().catch((e) => console.debug('[neuralyzer] audio playback prevented:', e));
    } catch (e) {
      console.debug('[neuralyzer] audio not available:', e);
    }
  };

  const runSequence = () => {
    playNeuralyzerSound(); // Play sound immediately when sequence starts
    device.classList.add('enter');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReduced ? 100 : 1000; // 1 second for audience to recognize the device
    setTimeout(() => {
      flash();
      overlay.addEventListener(
        'animationend',
        () => {
          performCoverSwapIfPending();
          performSubtitleSwapIfPending();
          performDocumentTitleSwap();
        },
        { once: true }
      );
      setTimeout(
        () => {
          performCoverSwapIfPending();
          performSubtitleSwapIfPending();
          performDocumentTitleSwap();
        },
        prefersReduced ? 220 : 700
      );
      setTimeout(() => device.classList.remove('enter'), prefersReduced ? 250 : 1800); // Keep device visible longer
    }, delay);
  };

  const tryMarkCoverForSwap = (ev) => {
    if (!ev || ev.type !== 'keydown' || ev.key?.toLowerCase() !== 'n') return;
    const deck = window.Reveal;
    const current = deck?.getCurrentSlide?.() || document.querySelector('.reveal .slides section.present');
    const container = current?.querySelector('.cover-crossfade');
    console.debug('[neuralyzer] tryMarkCoverForSwap: found container', container, 'on current slide', current);
    if (container && !swappedContainers.has(container)) {
      pendingCoverContainer = container;
    }
  };

  const trigger = (ev) => {
    if (ev.key && ev.key.toLowerCase() !== 'n') return;
    tryMarkCoverForSwap(ev);
    runSequence();
  };

  window.addEventListener('keydown', trigger);

  // Intercept navigation from neuralyzer section
  let hasTriggeredFromNeuralyzer = false;

  const handleNeuralyzerNext = (ev) => {
    const currentSlide = window.Reveal.getCurrentSlide();
    // If we're on a section with the 'neuralyzer' attribute
    const neuralyzerSection = currentSlide.matches('section[neuralyzer]') ? currentSlide : null;
    if (!neuralyzerSection) return;
    // if the section does not have the class 'present', do nothing
    if (!neuralyzerSection.classList.contains('present')) return;

    // Check if this is a next navigation key
    const isNextKey = !ev.shiftKey && (ev.key === 'ArrowRight' || ev.key === 'ArrowDown' || ev.key === ' ' || ev.key === 'PageDown' || ev.key === 'Enter');

    if (!isNextKey) return;

    console.debug('[neuralyzer] intercept next on neuralyzer section');
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation();

    // Mark the cover for swap
    const container = neuralyzerSection.querySelector('.cover-crossfade');
    if (container && !swappedContainers.has(container)) {
      pendingCoverContainer = container;
    }

    // Mark the subtitle for swap
    const subtitle = neuralyzerSection.querySelector('.neuralyzer-subtitle');
    if (subtitle) {
      pendingSubtitle = subtitle;
    }

    // Run the neuralyzer sequence
    runSequence();

    // After the full sequence, navigate to next slide
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const totalDuration = prefersReduced ? 450 : 4000; // Slightly longer to ensure everything completes

    setTimeout(() => {
      console.debug('[neuralyzer] navigating to next slide');
      window.Reveal.next();
    }, totalDuration);
  };

  window.addEventListener('keydown', handleNeuralyzerNext, { capture: true });
}
