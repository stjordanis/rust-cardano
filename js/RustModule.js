import loadModule from '../target/wasm32-unknown-unknown/release/wallet_wasm.wasm';

let Module = null;

// Ensure we are only creating a single instance of the web assembly module
export const loadRustModule = () => Module ? 
  Promise.resolve(Module)
  :
  loadModule().then((module) => {
    Module = module.instance.exports;
    return Module;
  }
);
