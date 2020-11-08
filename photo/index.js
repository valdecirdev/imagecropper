import createCanvas from './Canvas.js'
import setPreview from './Preview.js'
import configLoad from './Load.js'
import createSelectionTool from './SelectionTool.js'
import canCrop from './Crop.js'
import canDownload from './Download.js'

const Photo = {}

createCanvas(Photo)
setPreview(Photo)
configLoad(Photo)
createSelectionTool(Photo)
canCrop(Photo)
canDownload(Photo)

export default Photo