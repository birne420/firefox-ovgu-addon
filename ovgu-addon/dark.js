function println(t) {
    console.log("[ovgu e-learning addon] " + t);
}

println("applying dark theme...");

$("nav").removeClass("bg-primary");

const transparent="rgba(0,0,0,0)";
const foregroundColor="#dbdbdb";
const foregroundColorLight="#ffffff";
const backgroundColor="#202020";
const backgroundColorLight="#303030";
const accentColor="#708090";
const accentColorLight="#8090a0";

function _css_bg(id, c) {
    println("background: " + id + " --> " + c);
    $(id).css("background", c);
    $("head").append("<style>" + id + "{background:" + c + "}</style>");
}

function _css_fg(id, c) {
    println("color: " + id + " --> " + c);
    $(id).css("color", c);
    $("head").append("<style>" + id + "{color:" + c + "}</style>");
}

const defaultElements = [
    "html",
    "body",
    "div",
    "section",
    "p",
    "ul li",
    "td",
    "td span",
    "font",
    "fieldset legend"
];
const defaultElementsLight = [
    "select",
    "input",
    "button",
    "nav",
    "nav span",
    "nav div",
    "a",
    "a:hover",
    "pre"
];
const accentColorElements = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "th",
    "strong",
    "b"
]

defaultElements.map(x => _css_bg(x, backgroundColor));
defaultElements.map(x => _css_fg(x, foregroundColor));

defaultElementsLight.map(x => _css_bg(x, backgroundColorLight));
defaultElementsLight.map(x => _css_fg(x, foregroundColorLight));

accentColorElements.map(x => _css_bg(x, backgroundColor));
accentColorElements.map(x => _css_fg(x, accentColor));

println("dark theme applied!");