var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [],
    template:
    `
      AJAX!

    `
  })
  .Class({
    constructor: [ng.http.Jsonp, function(jsonp) {
      var vm = this;
      vm.cats = [];
      var url = "http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSON_CALLBACK"
      jsonp.get(url)
        .toPromise()
        .then(function(response) {
          console.log(response.json());
          vm.cats = response.json()
        })
    }]
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [ng.http.JSONP_PROVIDERS])
});

//"http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSON_CALLBACK"

// "http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=JSON_CALLBACK"
