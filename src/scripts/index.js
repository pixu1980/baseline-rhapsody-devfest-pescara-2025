import '@pixu-talks/core';

// Men in Black: tiny neuralyzer flash easter egg (accessible and optional)
(() => {
	const overlay = document.createElement('div');
	overlay.className = 'mib-neuralyzer';
	document.addEventListener('DOMContentLoaded', () => {
		document.body.appendChild(overlay);

		const trigger = (ev) => {
			// Press N to trigger the flash
			if (ev.key && ev.key.toLowerCase() !== 'n') return;
			overlay.classList.remove('flash');
			// Force reflow to restart animation
			void overlay.offsetWidth;
			overlay.classList.add('flash');
			// Remove the class after animation ends to keep DOM clean
			overlay.addEventListener(
				'animationend',
				() => overlay.classList.remove('flash'),
				{ once: true },
			);
		};

		// Keyboard: N
		window.addEventListener('keydown', trigger);
		// Click on brand logo as alternative trigger
		document.querySelector('[brand]')?.addEventListener('click', () => trigger({ key: 'n' }));
	});
})();
