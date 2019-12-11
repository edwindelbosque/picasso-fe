import { colorFormats} from '../util/apiCalls.js'

export const cleanColorName = async (updateArrayOfColors, palettes) => {
    const colorInfo = await palettes.map(color => colorFormats(color))
    const promiseREsolve = await Promise.all(colorInfo)
    updateArrayOfColors(promiseREsolve)
}