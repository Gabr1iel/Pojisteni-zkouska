const wrap = document.querySelector(`.login-wrap`);


function popupAppear() {
    wrap.classList.add(`active-popup`);
}

function popupRemove() {
    wrap.classList.remove(`active-popup`);
}

function popupRegisterAppear() {
    wrap.classList.add(`active-popup`, `active-login`);
}

function popupRegisterRemove() {
    wrap.classList.remove(`active-login`, `active-popup`);
}

function registerLink() {
    wrap.classList.remove(`active-login`);
}

function loginLink() {
    wrap.classList.add(`active-login`);
}
