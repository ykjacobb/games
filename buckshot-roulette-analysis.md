# Buckshot Roulette - HTML Source Code Analysis

## Full HTML Source Code

The complete HTML source code has been extracted from `https://startmyeducation.net/apps/buckshot-roulette/`

### Key HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>Buckshot Roulette</title>
    <link id="-gd-engine-icon" rel="icon" type="image/png" href="index.icon.png" />
    <link rel="apple-touch-icon" href="index.apple-touch-icon.png"/>
</head>
<body>
    <canvas id="canvas">Your browser does not support the canvas tag.</canvas>
    <div id="status">
        <img id="status-splash" src="index.png" alt="">
        <progress id="status-progress"></progress>
        <div id="status-notice"></div>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

## Game Files and Paths Discovered

### Primary Configuration (from embedded script)

```javascript
const GODOT_CONFIG = {
    "args": [],
    "canvasResizePolicy": 2,
    "ensureCrossOriginIsolationHeaders": false,
    "executable": "index",
    "experimentalVK": false,
    "fileSizes": {
        "index.pck": 345524192,    // ~345 MB
        "index.wasm": 43444261      // ~43 MB
    },
    "focusCanvas": true,
    "gdextensionLibs": []
};
```

### Game File Paths

1. **Main JavaScript Engine**: `index.js`
   - Size: ~317 KB (minified)
   - Contains the Godot Engine loader

2. **WebAssembly Binary**: `index.wasm`
   - Size: 43,444,261 bytes (~43 MB)
   - Full URL: `https://startmyeducation.net/apps/buckshot-roulette/index.wasm`

3. **Game Data Pack**: `index.pck`
   - Size: 345,524,192 bytes (~345 MB)
   - Full URL: `https://startmyeducation.net/apps/buckshot-roulette/index.pck`
   - Contains all game assets, scripts, and resources

4. **Assets**:
   - `index.icon.png` - Favicon
   - `index.apple-touch-icon.png` - iOS icon
   - `index.png` - Splash screen image

### Additional File Patterns Found in index.js

From analyzing the JavaScript engine code, the following file patterns are used:

- `.wasm` files - WebAssembly binaries
- `.side.wasm` files - Side module WebAssembly files
- `.pck` files - Godot packed data files
- Dynamic library loading pattern: `${loadPath}.side.wasm`

## Technology Stack

- **Engine**: Godot Engine (Web Export)
- **Format**: HTML5/WebAssembly
- **Threading**: Disabled (`GODOT_THREADS_ENABLED = false`)
- **Canvas Rendering**: HTML5 Canvas element
- **Total Download Size**: ~388 MB (wasm + pck files)

## File URLs Summary

Base URL: `https://startmyeducation.net/apps/buckshot-roulette/`

- Main HTML: `https://startmyeducation.net/apps/buckshot-roulette/`
- Engine: `https://startmyeducation.net/apps/buckshot-roulette/index.js`
- WASM: `https://startmyeducation.net/apps/buckshot-roulette/index.wasm`
- Data: `https://startmyeducation.net/apps/buckshot-roulette/index.pck`
- Icon: `https://startmyeducation.net/apps/buckshot-roulette/index.icon.png`
- Splash: `https://startmyeducation.net/apps/buckshot-roulette/index.png`
- Touch Icon: `https://startmyeducation.net/apps/buckshot-roulette/index.apple-touch-icon.png`
