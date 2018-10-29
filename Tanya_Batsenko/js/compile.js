
var templateElement = document.getElementById('entry-template');
var source = templateElement.innerHTML;
var template = Handlebars.compile(source);

// Define data
var data = {
  title: 'hello',
  body: 'body',
  some_shit: 'super usless info'
};

var compiledHTML = template(data);

var parser = new DOMParser();
var convertedHtml = parser.parseFromString(compiledHTML, 'text/xml');
templateElement.parentElement.appendChild(convertedHtml.documentElement);