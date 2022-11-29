/////////////////
// AUTO-ACCEPT //
/////////////////

//Form button to click: 0 -> deny, 1 -> accept
const acceptButton = 1;

//wait for document to be loaded
$(document).ready(setTimeout(function() {
    var c = 0;

    //remember choice
    $("input#_shib_idp_rememberConsent").click();

    setTimeout(function() {
        //if element check is successful
        if($("input#_shib_idp_rememberConsent").is(":checked")) {
            //loop form inputs
            $("input").each(function() {
                //filter type submit
                if($(this).attr("type") == "submit") {
                    //if button found
                    if(c == acceptButton) {
                        //submit
                        $(this).click();
                    }
                    //increase button counter
                    c++;
                }
            });
        }
    }, 500);
}, 500));