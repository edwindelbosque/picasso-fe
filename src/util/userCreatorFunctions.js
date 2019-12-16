import { createPalette, saveCatalog } from './apiCalls.js';

export const newUserCatalogAndPalettes = async (
	updateArrayOfColors,
	newUser,
	fetchCatalogs,
	fetchPalettes
) => {
	const arrayOfColors = [
		{
			XYZ: {
				fraction: {
					X: 0.624636862745098,
					Y: 0.6834392156862745,
					Z: 0.7964952941176472
				},
				value: 'XYZ(62, 68, 80)',
				X: 62,
				Y: 68,
				Z: 80
			},
			cmyk: {
				fraction: {
					c: 0.21808510638297884,
					m: 0.03723404255319151,
					y: 0,
					k: 0.26274509803921564
				},
				value: 'cmyk(22, 4, 0, 26)',
				c: 22,
				m: 4,
				y: 0,
				k: 26
			},
			hex: {
				value: '#93B5BC',
				clean: '93B5BC'
			},
			hsl: {
				fraction: {
					h: 0.5284552845528455,
					s: 0.23428571428571443,
					l: 0.6568627450980392
				},
				h: 190,
				s: 23,
				l: 66,
				value: 'hsl(190, 23%, 66%)'
			},
			hsv: {
				fraction: {
					h: 0.5284552845528455,
					s: 0.21808510638297884,
					v: 0.7372549019607844
				},
				value: 'hsv(190, 22%, 74%)',
				h: 190,
				s: 22,
				v: 74
			},
			rgb: {
				fraction: {
					r: 0.5764705882352941,
					g: 0.7098039215686275,
					b: 0.7372549019607844
				},
				r: 147,
				g: 181,
				b: 188,
				value: 'rgb(147, 181, 188)'
			},
			name: {
				value: 'Pewter Blue',
				closest_named_hex: '#8BA8B7',
				exact_match_name: false,
				distance: 428
			}
		},
		{
			XYZ: {
				fraction: {
					X: 0.4909266666666666,
					Y: 0.5129113725490195,
					Z: 0.752076862745098
				},
				value: 'XYZ(49, 51, 75)',
				X: 49,
				Y: 51,
				Z: 75
			},
			cmyk: {
				fraction: {
					c: 0.4043715846994535,
					m: 0.27868852459016386,
					y: 0,
					k: 0.2823529411764706
				},
				value: 'cmyk(40, 28, 0, 28)',
				c: 40,
				m: 28,
				y: 0,
				k: 28
			},
			hex: {
				value: '#6D84B7',
				clean: '6D84B7'
			},
			hsl: {
				fraction: {
					h: 0.6148648648648648,
					s: 0.33944954128440374,
					l: 0.5725490196078431
				},
				h: 221,
				s: 34,
				l: 57,
				value: 'hsl(221, 34%, 57%)'
			},
			hsv: {
				fraction: {
					h: 0.6148648648648648,
					s: 0.40437158469945356,
					v: 0.7176470588235294
				},
				value: 'hsv(221, 40%, 72%)',
				h: 221,
				s: 40,
				v: 72
			},
			rgb: {
				fraction: {
					r: 0.42745098039215684,
					g: 0.5176470588235295,
					b: 0.7176470588235294
				},
				r: 109,
				g: 132,
				b: 183,
				value: 'rgb(109, 132, 183)'
			},
			name: {
				value: 'Ship Cove',
				closest_named_hex: '#788BBA',
				exact_match_name: false,
				distance: 311
			}
		},
		{
			XYZ: {
				fraction: {
					X: 0.42004431372549017,
					Y: 0.46437019607843133,
					Z: 0.7241827450980391
				},
				value: 'XYZ(42, 46, 72)',
				X: 42,
				Y: 46,
				Z: 72
			},
			cmyk: {
				fraction: {
					c: 0.5875706214689266,
					m: 0.28813559322033894,
					y: 0,
					k: 0.3058823529411765
				},
				value: 'cmyk(59, 29, 0, 31)',
				c: 59,
				m: 29,
				y: 0,
				k: 31
			},
			hex: {
				value: '#497EB1',
				clean: '497EB1'
			},
			hsl: {
				fraction: {
					h: 0.581730769230769,
					s: 0.41600000000000004,
					l: 0.49019607843137253
				},
				h: 209,
				s: 42,
				l: 49,
				value: 'hsl(209, 42%, 49%)'
			},
			hsv: {
				fraction: {
					h: 0.581730769230769,
					s: 0.5875706214689266,
					v: 0.6941176470588235
				},
				value: 'hsv(209, 59%, 69%)',
				h: 209,
				s: 59,
				v: 69
			},
			rgb: {
				fraction: {
					r: 0.28627450980392155,
					g: 0.49411764705882355,
					b: 0.6941176470588235
				},
				r: 73,
				g: 126,
				b: 177,
				value: 'rgb(73, 126, 177)'
			},
			name: {
				value: 'Steel Blue',
				closest_named_hex: '#4682B4',
				exact_match_name: false,
				distance: 114
			}
		},
		{
			XYZ: {
				fraction: {
					X: 0.24699725490196078,
					Y: 0.24557019607843134,
					Z: 0.431363137254902
				},
				value: 'XYZ(25, 25, 43)',
				X: 25,
				Y: 25,
				Z: 43
			},
			cmyk: {
				fraction: {
					c: 0.5046728971962616,
					m: 0.42990654205607476,
					y: 0,
					k: 0.580392156862745
				},
				value: 'cmyk(50, 43, 0, 58)',
				c: 50,
				m: 43,
				y: 0,
				k: 58
			},
			hex: {
				value: '#353D6B',
				clean: '353D6B'
			},
			hsl: {
				fraction: {
					h: 0.6419753086419754,
					s: 0.3375,
					l: 0.3137254901960784
				},
				h: 231,
				s: 34,
				l: 31,
				value: 'hsl(231, 34%, 31%)'
			},
			hsv: {
				fraction: {
					h: 0.6419753086419754,
					s: 0.5046728971962616,
					v: 0.4196078431372549
				},
				value: 'hsv(231, 50%, 42%)',
				h: 231,
				s: 50,
				v: 42
			},
			rgb: {
				fraction: {
					r: 0.20784313725490197,
					g: 0.23921568627450981,
					b: 0.4196078431372549
				},
				r: 53,
				g: 61,
				b: 107,
				value: 'rgb(53, 61, 107)'
			},
			name: {
				value: 'Rhino',
				closest_named_hex: '#2E3F62',
				exact_match_name: false,
				distance: 432
			}
		},
		{
			XYZ: {
				fraction: {
					X: 0.09798431372549019,
					Y: 0.09173254901960784,
					Z: 0.2203078431372549
				},
				value: 'XYZ(10, 9, 22)',
				X: 10,
				Y: 9,
				Z: 22
			},
			cmyk: {
				fraction: {
					c: 0.6964285714285715,
					m: 0.607142857142857,
					y: 0,
					k: 0.7803921568627451
				},
				value: 'cmyk(70, 61, 0, 78)',
				c: 70,
				m: 61,
				y: 0,
				k: 78
			},
			hex: {
				value: '#111638',
				clean: '111638'
			},
			hsl: {
				fraction: {
					h: 0.6452991452991452,
					s: 0.5342465753424658,
					l: 0.14313725490196078
				},
				h: 232,
				s: 53,
				l: 14,
				value: 'hsl(232, 53%, 14%)'
			},
			hsv: {
				fraction: {
					h: 0.6452991452991452,
					s: 0.6964285714285715,
					v: 0.2196078431372549
				},
				value: 'hsv(232, 70%, 22%)',
				h: 232,
				s: 70,
				v: 22
			},
			rgb: {
				fraction: {
					r: 0.06666666666666667,
					g: 0.08627450980392157,
					b: 0.2196078431372549
				},
				r: 17,
				g: 22,
				b: 56,
				value: 'rgb(17, 22, 56)'
			},
			name: {
				value: 'Haiti',
				closest_named_hex: '#1B1035',
				exact_match_name: false,
				distance: 801
			}
		}
	];

	const response = await saveCatalog({
		user_id: newUser.id,
		catalogName: 'First Catalog'
	});

	const catalog1 = await response.json();

	await createPalette({
		catalog_id: catalog1.id,
		user_id: newUser.id,
		paletteName: 'First Palette',
		colorsToString: arrayOfColors
	});

	await fetchCatalogs(newUser.id);
	const catalogs = [
		{ id: catalog1.id, user_id: newUser.id }
	];

	return await fetchPalettes(catalogs);
};
