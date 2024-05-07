const elUrlShortnerForm = document.querySelector(".js-url-shortner-form");//url shortner formni js klasini topib olayapdi
const elUrlShortnerResults = document.querySelector(".url-shortner-results-wrapper");//Url shortner results bo'lim klasi topib olonayapdi

elUrlShortnerForm.addEventListener('submit', function (evt) {//url shortner formni js klasi submit hodisasiga quloq solayapdi va evt hodisasi kiritilayapdi
 evt.preventDefault();//url shortner forma to'ldirilib button bosilganda kiritilgam ma'luotni yuborishni to'xtatib qo'yayapdi

  elUrlShortnerResults.classList.add('url-shortner-results__open');//yuqoridagi hodisa bajarilganda url shortner formasining clasiga url-shortner-results__open klasii qo'shib qo'yayapdi
})