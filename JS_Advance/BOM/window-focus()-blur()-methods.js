let IG;

function openIG() {
    IG = window.open(
        "https://www.instagram.com",
        "_blank",
        "height=500",
        "width=500"
    );
}

function focusIG() {
    IG.focus();
}

function blurIG() {
    IG.blur();
}