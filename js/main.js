const elUrlShortner = document.querySelector(".url-shortner");//Qisqartirish formasini umumiy 'rab turuvchisini klasini topib olayapdi
const elUrlShortnerForm = document.querySelector(".js-url-shortner-form");//url shortner formni js klasini topib olayapdi
const elUrlShortnerResults = document.querySelector(".url-shortner-results-wrapper");//Url shortner results bo'lim klasi topib olonayapdi

if (elUrlShortnerForm) {//qisqartishish formasini xatolar chiqqanda keyingi amalga o'tib ketishi uchun himoyalab qo'yayapdi
  elUrlShortnerForm.addEventListener('submit', function (evt) {//url shortner formni js klasi submit hodisasiga quloq solayapdi va evt hodisasi kiritilayapdi
    evt.preventDefault();//url shortner forma to'ldirilib button bosilganda kiritilgam ma'luotni yuborishni to'xtatib qo'yayapdi

     elUrlShortnerResults.classList.add('url-shortner-results__open');//yuqoridagi hodisa bajarilganda url shortner formasining clasiga url-shortner-results__open klasii qo'shib qo'yayapdi
   })
}


if (elUrlShortner) {//Agar elUrlShortner elementi bo'lsa
  elUrlShortner.addEventListener('click', function (evt) {//uni click hodisasiga quloq solsin va eventga aloqador ma'lumotlarni qo'shsin
   if (evt.target.matches('.js-url-shortner-copy-button')) {//Agar eventni targeti js-url-shortner-copy-button ga to'g'ri kelsa
   //Change button text
     evt.target.textContent = 'Copied!';//kichkina buttonlarni matnini Copied! matniga o'zgartishish
     //Changr button bgcolor
     evt.target.classList.add('url-shortner-result-copy__button');//Kichkina buttonlarni yrangini 'ozgartirish uchun qo'shimcha url-shortner-result-copy__button klasini qo'shish

     //1 sekunddan keyin buttonni avvalgi holatiga qaytarish
     setTimeout(function () {//vaqt funksiyasi
      evt.target.textContent = 'Copy';//1 sekunddan keyin buttonni matnini avvalgi copy matniga o'zgartirib qo'yadi
      evt.target.classList.remove('url-shortner-result-copy__button');//1 sekunddan keyin rangini o'zgartirish clasini olib tashlayapdi
     }, 1000);
   }
  })
}