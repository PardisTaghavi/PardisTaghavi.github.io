const canonical = 'https://pardistaghavi.github.io/';
const description = 'Pardis Taghavi is a final-year PhD student at Texas A&M University researching efficient and controllable video generation, world models, sparse attention, and physical AI.';
const portrait = {
  '@type': 'ImageObject', '@id': canonical + '#portrait',
  url: canonical + 'images/pardis-taghavi-headshot.png',
  contentUrl: canonical + 'images/pardis-taghavi-headshot.png',
  width: 498, height: 512, caption: 'Portrait of Pardis Taghavi'
};
const profile = {
  '@context': 'https://schema.org', '@type': 'ProfilePage',
  '@id': canonical + '#profile', url: canonical, name: 'Pardis Taghavi | Video Generation & World Models',
  primaryImageOfPage: portrait,
  mainEntity: {
    '@type': 'Person', '@id': canonical + '#person', name: 'Pardis Taghavi', url: canonical,
    image: { '@id': canonical + '#portrait' }, description,
    jobTitle: 'Graduate Researcher',
    affiliation: {'@type': 'CollegeOrUniversity', name: 'Texas A&M University', url: 'https://www.tamu.edu/'},
    alumniOf: {'@type': 'CollegeOrUniversity', name: 'Politecnico di Torino', url: 'https://www.polito.it/'},
    knowsAbout: ['Video generation', 'World models', 'Sparse attention', 'Physical AI', 'Visual perception'],
    sameAs: [
      'https://scholar.google.com/citations?user=TX9IfGoAAAAJ',
      'https://github.com/PardisTaghavi',
      'https://linkedin.com/in/pardis-taghavi',
      'https://orcid.org/0009-0007-3794-7205',
      'https://dblp.org/pid/372/4110.html',
      'https://openreview.net/profile?id=~Pardis_Taghavi2',
      'https://huggingface.co/PardisTaghavi'
    ]
  }
};
const alt = {
  '/images/sparsepr-dense-vs-sparsepr.gif': 'Matched clownfish videos generated with dense attention and SparsePR, comparing visual quality and generation speed.',
  '/images/SwinMTL.png': 'SwinMTL shared Swin Transformer encoder and decoder jointly predict depth and semantic segmentation, with a critic for adversarial training.',
  '/images/NaviDrive.png': 'NaviDriveVLM separates a frozen large Navigator for scene reasoning from a trainable lightweight Driver that predicts future waypoints.',
  '/images/CAST.png': 'Three-stage distillation pipeline with teacher adaptation, knowledge transfer using labeled and unlabeled images, and student refinement.'
};
const esc = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
function withSeo(html) {
  html = html.replace(/\n?<!-- Identity and sharing metadata -->[\s\S]*?<!-- End identity and sharing metadata -->\n?/g, '\n');
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(description)}">`);
  const extra = `<!-- Identity and sharing metadata -->
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="Pardis Taghavi | Video Generation &amp; World Models">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${canonical}images/pardis-taghavi-headshot.png">
  <meta property="og:image:alt" content="Portrait of Pardis Taghavi">
  <script type="application/ld+json">${JSON.stringify(profile).replaceAll('<', '\\u003c')}</script>
<!-- End identity and sharing metadata -->`;
  html = html.replace('</head>', extra + '\n</head>');
  html = html.replace(/<img\b[^>]*>/g, tag => {
    const src = tag.match(/src="([^"]+)"/)?.[1];
    return alt[src] ? tag.replace(/alt="[^"]*"/, `alt="${esc(alt[src])}"`) : tag;
  });
  return html;
}
module.exports = { withSeo };
if (require.main === module) {
  const fs = require('node:fs');
  const file = process.argv[2];
  fs.writeFileSync(file, withSeo(fs.readFileSync(file, 'utf8')));
}
