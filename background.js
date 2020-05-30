chrome.omnibox.onInputEntered.addListener(
  function(text) {
    var q = text +  " -site:trthaber.com -site:memurlar.net -site:yeniasir.com.tr -site:t24.com.tr -site:haber7.com -site:sondakika.com -site:yenisafak.com -site:posta.com.tr -site:milligazete.com.tr -site:birgun.net -site:yeniakit.com.tr -site:internethaber.com -site:ensonhaber.com -site:mynet.com -site:star.com.tr -site:takvim.com.tr -site:gazeteduvar.com.tr -site:haberturk.com -site:sozcu.com.tr -site:haberler.com -site:odatv.com -site:hurriyet.com.tr -site:milliyet.com.tr -site:sabah.com.tr -site:cumhuriyet.com.tr -site:cnnturk.com";
    var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(q);
    chrome.tabs.create({ url: newURL });
  });
