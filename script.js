document.body.addEventListener("keydown", (e) => {
    let keycode = document.querySelector(".keycode")
    keycode.textContent = e.which;

    let event_key = document.querySelector(".event-key");
    event_key.textContent = e.key;

    let event_which = document.querySelector(".event-which");
    console.log(e);
    event_which.textContent = e.which;

    let event_code = document.querySelector(".event-code");
    event_code.textContent = e.code;


})

