/* eslint-disable no-multiple-empty-lines */

// BURGER POPUP START
const burgerOverlay = document.querySelector('.burger-overlay');

const burgerBtn = document.querySelector('.header__burger-btn');
const exitText = burgerBtn.querySelector('.header__burger-btn-text');

const header = document.querySelector('.header');

const headerPhoneNumber = document.querySelector('.header__phone-number');
const headerConsultBtn = document.querySelector('.header__consult-btn');

const togglePopup = () => {
  header.classList.toggle('header_place_burger');
  burgerOverlay.classList.toggle('hidden');
  burgerBtn.classList.toggle('header__burger-btn_type_exit');
  exitText.classList.toggle('hidden');
  headerPhoneNumber.classList.toggle('hidden');
  headerConsultBtn.classList.toggle('hidden');
};

const toggleBurger = () => {
  burgerBtn.classList.add('header__burger-btn_type_exit');
};

const closePopupByOverlayClick = (e) => {
  if (e.target === e.currentTarget) togglePopup();
};

burgerBtn.addEventListener('click', togglePopup);
exitText.addEventListener('click', toggleBurger);
burgerOverlay.addEventListener('click', closePopupByOverlayClick);
// BURGER POPUP END

// FORM POPUP START
const consultForm = document.forms.consultation;
const formPopup = document.querySelector('.form-overlay');
const formExit = formPopup.querySelector('.form-overlay__exit');
const formSubmit = formPopup.querySelector('.form-overlay__submit');

const openFormPopup = () => {
  formPopup.classList.remove('hidden');
  header.classList.add('header_place_popup');
  headerConsultBtn.classList.add('remove-effects');
};

const closeFormPopup = (e) => {
  if (e.type === 'submit') {
    e.preventDefault();
    consultForm.reset();
  }
  formPopup.classList.add('hidden');
  header.classList.remove('header_place_popup');
  headerConsultBtn.classList.remove('remove-effects');
};

const checkFormValidation = (e) => {
  const listClass = formSubmit.classList;
  if (e.currentTarget.checkValidity()) {
    listClass.remove('form-overlay__submit_disabled');
  } else if (!listClass.contains('form-overlay__submit_disabled')) {
    listClass.add('form-overlay__submit_disabled');
  }
};

headerConsultBtn.addEventListener('click', openFormPopup);
consultForm.addEventListener('submit', closeFormPopup);
consultForm.addEventListener('change', checkFormValidation);
formExit.addEventListener('click', closeFormPopup);
// FORM POPUP END

// COPY PHONE NUMBER TO CLIPBOARD
const copied = document.querySelector('.copied-popup');
const copyToClipboard = (e) => {
  // we'll use asyncronous method .writeText
  // since it is async => it returns a promise which we have to resolve
  navigator.clipboard.writeText(e.target.textContent);
  copied.className = 'copied-popup copied-popup_show-animation';
  setTimeout(() => {
    copied.classList.remove('copied-popup_show-animation');
    copied.classList.add('hidden');
  }, 2000);
};

headerPhoneNumber.addEventListener('click', copyToClipboard);
// COPY PHONE NUMBER TO CLIPBOARD   END

const docContainerTemplate = document.querySelector('.docs-n-serts-template').content;
const docsGrid = document.querySelector('.docs-n-serts__docs-grid');
const docsImageOverlay = document.querySelector('.document-overlay');
const docsImageOverlayPic = document.querySelector('.document-overlay__image'); 

function closeDocsImageOverlay(e) {
  if (e.target === e.currentTarget) e.target.classList.add('hidden')
}

docsImageOverlay.addEventListener('click', event => closeDocsImageOverlay(event));

function openDocsImageOverlay(src, alt) {
  docsImageOverlay.classList.remove('hidden')
  docsImageOverlayPic.alt = alt;
  docsImageOverlayPic.src = src;

}

const initialDocsInfo = [
  {
    docType : 'Cертификат',
    docId : '88005553535',
    imageSrc: '../images/docs-n-serts__sertificate.png',
    imageAlt: 'Сертификат 88005553535'
  },
  {
    docType : 'Cертификат',
    docId : '88005553536',
    imageSrc: '../images/docs-n-serts__sertificate.png',
    imageAlt: 'Сертификат 88005553535'
  },
  {
    docType : 'Cертификат',
    docId : '78005553535',
    imageSrc: '../images/docs-n-serts__sertificate.png',
    imageAlt: 'Сертификат 88005553535'
  },
]


function createDocContainer(obj) {
  const docContainer = docContainerTemplate.querySelector('.docs-n-serts__doc-container').cloneNode(true);
  docContainer.addEventListener('click', () => openDocsImageOverlay(obj.imageSrc, obj.imageAlt));
  const docContainerImage = docContainer.querySelector('.docs-n-serts__doc-picture');
  docContainer.querySelector('.docs-n-serts__doc-info_type').textContent = obj.docType;
  docContainer.querySelector('.docs-n-serts__doc-info_id').textContent = obj.docId;
  docContainerImage.src = obj.imageSrc;
  docContainerImage.alt = obj.imageAlt;
  return docContainer;

}

initialDocsInfo.forEach(element => docsGrid.prepend(createDocContainer(element)));