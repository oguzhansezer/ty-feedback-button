const { build } = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json');
const { Generator } = require('npm-dts');
const shared = {
    entryPoints: ['src/index.tsx'],
    bundle: true,
    external: Object.keys(dependencies).concat(Object.keys(peerDependencies))
};

build({
    ...shared,
    outfile: 'dist/index.js',
    minify: true,
    platform: 'node',
    sourcemap: true,
    bundle: true
});

build({
    ...shared,
    outfile: 'dist/index.esm.js',
    format: 'esm',
    minify: true,
    platform: 'node',
    sourcemap: true,
    bundle: true
});

new Generator({
    entry: 'src/index.tsx',
    output: 'dist/index.esm.d.ts',
    minify: true,
    platform: 'node',
    sourcemap: true
}).generate();

new Generator({
    entry: 'src/index.tsx',
    output: 'dist/index.d.ts',
    minify: true,
    platform: 'node',
    sourcemap: true
}).generate();
