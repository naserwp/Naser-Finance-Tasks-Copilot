import {createRequire} from 'node:module';
import {dirname,join} from 'node:path';
import {mkdir,copyFile} from 'node:fs/promises';
const require=createRequire(import.meta.url),out=join(process.cwd(),'public','reader');await mkdir(out,{recursive:true});
const pdf=dirname(require.resolve('pdfjs-dist/package.json')),tess=dirname(require.resolve('tesseract.js/package.json'));const tessRequire=createRequire(join(tess,'package.json'));const core=dirname(tessRequire.resolve('tesseract.js-core/package.json'));const eng=dirname(require.resolve('@tesseract.js-data/eng/package.json'));
for(const [source,name] of [[join(pdf,'build/pdf.min.mjs'),'pdf.min.mjs'],[join(pdf,'build/pdf.worker.min.mjs'),'pdf.worker.min.mjs'],[join(tess,'dist/tesseract.esm.min.js'),'tesseract.mjs'],[join(tess,'dist/worker.min.js'),'worker.min.js'],[join(core,'tesseract-core-lstm.wasm.js'),'tesseract-core-lstm.wasm.js'],[join(core,'tesseract-core-lstm.wasm'),'tesseract-core-lstm.wasm'],[join(eng,'4.0.0_best_int/eng.traineddata.gz'),'eng.traineddata.gz']])await copyFile(source,join(out,name));
console.log('Local PDF and OCR assets ready.');
