//handle pupup show and hide
const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.button_type_edit');
const closeBtn = document.querySelector('.button_type_close');
const form = document.querySelector('.form');
const Username = form.querySelector('.form__input_type_name');
const about = form.querySelector('.form__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');

function showpopup(){
    popup.classList.add('popup_is-opened');
    popup.style.display = 'flex'
}
function hidepopup(){
    popup.classList.remove('popup_is-opened');
    popup.style.display = 'none'
}
editBtn.addEventListener("click", showpopup);
closeBtn.addEventListener("click", hidepopup);

//edit profile

function onSubmit(event){

    event.preventDefault(); 
    profileName.textContent = Username.value;
    profileAboutMe.textContent = about.value;
    hidepopup();

}
form.addEventListener('submit', onSubmit); 

