//Selectors 
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');
const resultlist = document.querySelector('#SuraList');
const phoneimg = document.querySelector('.phone-img');
const Phonename = document.querySelector('.Phone-name');
const brandname = document.querySelector('.brand-name');
const slugname = document.querySelector('.slug-name');
let value = searchInput.value;

const displayList = (objOfRes) =>{
  const PhoneArr =objOfRes.data.phones 

  const filterPhone = PhoneArr.filter(ele =>{
   return ele.phone_name.toLocaleLowerCase().startsWith(value)
  });

  filterPhone.forEach(phone => {
    let dropdownOption = document.createElement('option');
    dropdownOption.value = phone.phone_name;
    resultlist.appendChild(dropdownOption);
  });
}

 searchInput.addEventListener('keyup', XMLRequest('GET', `/phone`, null, displayList));

searchBtn.addEventListener('click',()=>{
  let value2 = searchInput.value;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const restext = JSON.parse(xhr.responseText)
      const resresp = JSON.parse(restext)
      const phonedet = resresp.data.phones
      phonedet.forEach(eles =>{
        Phonename.textContent = eles.phone_name;
        brandname.textContent = eles.brand;
        phoneimg.src = eles.image;
        slugname.textContent = eles.slug;
      })
    }
  };

  xhr.open('GET',`/search/${value2}`,true);
  xhr.send(); 
})


