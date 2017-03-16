var html = document.documentElement;
if (sessionStorage.fontsLoaded) {
  html.classList.add('fonts-loaded');
} else {
  var regular = new FontFaceObserver('Source Sans Pro', {
    weight: 400,
    style: 'normal'
  });
  var italic = new FontFaceObserver('Source Sans Pro', {
    weight: 400,
    style: 'italic'
  });
  var light = new FontFaceObserver('Source Sans Pro', {
    weight: 300,
    style: 'normal'
  });
  var lightItalic = new FontFaceObserver('Source Sans Pro', {
    weight: 300,
    style: 'italic'
  });

  Promise.all([regular.load(), light.load(), italic.load(), lightItalic.load()]).then(function() {
    sessionStorage.fontsLoaded = true;
  });
}
