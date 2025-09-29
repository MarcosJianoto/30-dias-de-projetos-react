// preload.js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { contextBridge } = require('electron');
const process = require('process');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});
 