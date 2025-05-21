import { readable } from "svelte/store";
import { browser } from "$app/environment";

const initialValue = { width: 0, height: 0, isMobile: false };
const mobileThresh = 785;

function getWindowSize() {
	return browser ? { width: window.innerWidth, height: window.innerHeight, isMobile: (window.innerWidth < mobileThresh) } : initialValue;
}

export const windowSize = readable(getWindowSize(), (set) => {
	if (!browser) {
		return () => { }; //No-op for SSR
	}

	function handleResize() {
		set({ width: window.innerWidth, height: window.innerHeight, isMobile: (window.innerWidth < mobileThresh) });
	}

	window.addEventListener('resize', handleResize);

	return () => {
		window.removeEventListener('resize', handleResize);
	};
});






