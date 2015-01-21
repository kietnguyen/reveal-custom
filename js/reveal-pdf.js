if (window.location.search.match(/print-pdf/gi)) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '../../lib/reveal.js/css/print/pdf.css';
  document.getElementsByTagName('head')[0].appendChild(link);

  var pdfLink = document.createElement('link');
  pdfLink.rel = 'stylesheet';
  pdfLink.type = 'text/css';
  pdfLink.href = '../../css/pdf-custom.css';
  document.getElementsByTagName('head')[0].appendChild(pdfLink);
}
