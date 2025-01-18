require('esbuild').build({
    entryPoints: ['src/index.js'], // Update this with your entry point(s)
    bundle: true,
    outfile: 'public/bundle.js', // Output file path
    loader: {
      '.js': '.jsx', // Set the loader for .js files to jsx
    },
  }).catch(() => process.exit(1));
  