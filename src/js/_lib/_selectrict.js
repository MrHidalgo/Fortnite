

/**
 * @name initSelectric
 *
 * @description
 */
const initSelectric = () => {
	const selectName = $("[selectric-js]");

	selectName.selectric({
		responsive: true,
		inheritOriginalWidth: false,
		disableOnMobile: false
	});
};
