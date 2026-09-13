const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { createRequire } = require('node:module');

const source = path.resolve(process.argv[2]);
const target = path.resolve(process.argv[3]);
const fromSource = createRequire(path.join(source, 'package.json'));
const ts = fromSource('typescript');
const React = fromSource('react');
const { renderToStaticMarkup } = fromSource('react-dom/server');
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'pardis-static-'));
try {
  fs.symlinkSync(path.join(source, 'node_modules'), path.join(temporary, 'node_modules'), 'dir');
  for (const name of ['page.tsx', 'content.ts', 'PaperVideo.tsx']) {
    const result = ts.transpileModule(fs.readFileSync(path.join(source, 'app', name), 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
      fileName: name,
    });
    fs.writeFileSync(path.join(temporary, name.replace(/\.tsx?$/, '.js')), result.outputText);
  }
  const Home = require(path.join(temporary, 'page.js')).default;
  const body = renderToStaticMarkup(React.createElement(Home));
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pardis Taghavi | Video Generation &amp; World Models</title>
  <meta name="description" content="Pardis Taghavi is a final-year PhD student at Texas A&amp;M University researching controllable video world models, sparse attention, efficient inference, and visual perception.">
  <link rel="canonical" href="https://pardistaghavi.github.io/">
  <link rel="icon" href="/images/favicon.svg">
  <link rel="stylesheet" href="/assets/site.css">
  <script src="/assets/site.js" defer></script>
</head>
<body>
${body.replace(/(<\/(?:p|section|article|header|nav|footer|main)>)/g, '$1\n')}
</body>
</html>
`;
  fs.mkdirSync(path.join(target, 'assets'), {recursive:true});
  const cssDir = path.join(source, 'dist/client/_next/static/css');
  const styles = fs.readdirSync(cssDir).filter(name => name.endsWith('.css'));
  if (styles.length !== 1) throw new Error('Expected one compiled stylesheet. Build the source project first.');
  fs.copyFileSync(path.join(cssDir, styles[0]), path.join(target, 'assets/site.css'));
  fs.cpSync(path.join(source, 'public/images'), path.join(target, 'images'), {recursive:true});
  fs.copyFileSync(path.join(source, 'public/resume.pdf'), path.join(target, 'resume.pdf'));
  fs.writeFileSync(path.join(target, 'index.html'), html);
  fs.writeFileSync(path.join(target, '.nojekyll'), '');
  console.log('Exported current page, stylesheet, original media, and resume.');
} finally {
  fs.rmSync(temporary, {recursive:true, force:true});
}
