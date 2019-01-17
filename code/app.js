app = {
    init = function () {
        console.log("init");
        $("title").text("New Title");
    }
};
$(document).ready(init);
alert("ciao!");  