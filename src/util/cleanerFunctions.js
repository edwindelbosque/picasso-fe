import { colorFormats } from '../util/apiCalls.js';

export const cleanColorName = async (updateColors, palettes) => {
	const colorInfo = await palettes.map(color => colorFormats(color));
	const promiseResolve = await Promise.all(colorInfo);
	const cleanedColorData = promiseResolve.map(colorObj => {
		const { XYZ, cmyk, hex, hsl, hsv, rgb, name } = colorObj;
		return { XYZ, cmyk, hex, hsl, hsv, rgb, name };
	});
	updateColors(cleanedColorData);
};
