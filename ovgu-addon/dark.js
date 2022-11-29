//init message
println("applying dark theme...");

//basic print utility
function println(t) {
    console.log("[ovgu e-learning addon] " + t);
}

///////////////////
// COLOR DEFINES //
///////////////////

const enableHoverAnimation = true;
const hoverAnimationDuration = 200;

const transparent="rgba(0,0,0,0)";
const boxShadowColor="rgba(0,0,0,0.2)";
const boxShadow="0 0 10px 10px " + boxShadowColor;

const backgroundColor="#202020";
const backgroundColorLight="#202530";

const foregroundColor="#dbdbdb";
const foregroundColorLight="#ffffff";

const accentColor="#708090";

//////////////////////////
// TARGET PAGE ELEMENTS //
//////////////////////////

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
    "nav",
    "nav",
    "nav div",
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
const hoverColorElements = [
    "a",
    "button"
]

////////////////////////
// COLORIZING UTILITY //
////////////////////////

//altering color css classes to unlock color change
$("nav").removeClass("bg-primary");
$("nav").css("box-shadow", boxShadow);
$("[id^=drop-down-menu-]").css("box-shadow", boxShadow);

//ovgu faculty sites
$("div.ubox_linkblock").css("line-height", "1.125rem");
$("div.ubox_linkblock").css("padding", "0.5rem 0.6rem 0.1rem 0.6rem");
$("div.ubox_linkblock").css("display", "inline-block");
$("div.ubox_linkblock").css("width", "100%");
$("div.ubox_linkblock").removeClass("ubox_linkblock");

//recolorize object 'id', 'c' is background, 'd' is foreground
function _css_c(id, c, d) {
    println(id + " --> " + c + ", " + d);

    $(id).css("background", c);
    $(id).css("color", d);

    $("head").append("<style>" + id + "{background:" + c + ";color:" + d + ";}</style>");
}

//recolorize object 'id', 'c' is background, 'd' is foreground, both will be switched on hover
function _css_h(id, c, d) {
    _css_c(id, c, d);

    if(enableHoverAnimation) {
        $(id).attr("onMouseOver", "this.style.transition='all " + hoverAnimationDuration + "ms';this.style.background='" + d + "';this.style.color='" + c + "';this.style.boxShadow='" + boxShadow + "';");
        $(id).attr("onMouseOut", "this.style.transition='all " + hoverAnimationDuration + "ms';this.style.background='" + c + "';this.style.color='" + d + "';this.style.boxShadow='0 0 0 0 " + boxShadowColor + "';");
    }
}

//////////////////
// RECOLOR PAGE //
//////////////////

//apply dark color
defaultElements.map(x => _css_c(x, backgroundColor, foregroundColor));

//apply dark color variation
defaultElementsLight.map(x => _css_c(x, backgroundColorLight, foregroundColorLight));

//apply accent colors
accentColorElements.map(x => _css_c(x, backgroundColor, accentColor));

//apply hover color
hoverColorElements.map(x => _css_h(x, backgroundColorLight, foregroundColorLight));

//finish message
println("dark theme applied!");