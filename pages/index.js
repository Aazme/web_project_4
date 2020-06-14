//handle pupup show and hide
const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.button_type_edit');
const closeBtn = document.querySelector('.button_type_close');
const form = document.querySelector('.form');
const Username = form.querySelector('.form__input_type_name');
const about = form.querySelector('.form__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');

function togglePopup(){
    popup.classList.toggle('popup_is-opened');
}

editBtn.addEventListener("click", togglePopup);
closeBtn.addEventListener("click", togglePopup);

//edit profile

function onSubmit(event){

    event.preventDefault(); 
    profileName.textContent = Username.value;
    profileAboutMe.textContent = about.value;
    togglePopup();

}
form.addEventListener('submit', onSubmit); 

