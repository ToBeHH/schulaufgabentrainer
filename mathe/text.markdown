---
layout: default
title: Mathe - Textaufgaben
navcategory: mathe
canreveal: true
---
## Textaufgaben Zahlenraum 1-<span id="max"></span>

**Aufgabe:** Notiere die Rechenaufgaben und löse sie.

<div id="content">
</div>

<script type="text/javascript">
function init() {
    var maxStr = getParameterByName("max");
    var max = 1000;
    if (maxStr !== null) {
        max = parseInt(maxStr, 10);
    }
    $("#max").html(new Intl.NumberFormat('de-DE').format(max));

    var already = new Array();
    let lastType = -1;
    let type;


    for (var i = 0; i < 26; i++) {
        do {
            type = Math.floor(Math.random() * 8);
        } while (type === lastType);
        lastType = type;
        let key = "";
        let a, b;
        switch (type) {
            case 0:
                do {
                    a = Math.floor(Math.random() * max) + 1;
                    b = Math.floor(Math.random() * (max - a)) + 1;
                    key = a + "+" + b;
                } while (already.indexOf(key) !== -1 || a === max);

                $("#content").append("<div class=\"t3\">Addiere " + iFormat.format(a) + " und " + iFormat.format(b) + ".</div>");
                $("#content").append("<div class=\"t\"><span class=\"revealHide\">______________________________</span><span class=\"reveal\">" + iFormat.format(a) + " + " + iFormat.format(b) + " = " + iFormat.format(a+b) + "</span> </div>");             
            break;
            case 1:
                do {
                    a = Math.floor(Math.random() * max) + 1;
                    b = Math.floor(Math.random() * (max - a)) + 1;
                    key = a + "+" + b;
                } while (already.indexOf(key) !== -1 || a === max);

                $("#content").append("<div class=\"t3\">" + ((Math.random() < 0.5)?"Bilde":"Berechne") + " die Summe von " + iFormat.format(a) + " und " + iFormat.format(b) + ".</div>");
                $("#content").append("<div class=\"t\"><span class=\"revealHide\">______________________________</span><span class=\"reveal\">" + iFormat.format(a) + " + " + iFormat.format(b) + " = " + iFormat.format(a+b) + "</span> </div>");             
            break;
            case 2:
                do {
                    a = Math.floor(Math.random() * max * 0.9) + (max * 0.1);
                    b = Math.floor(Math.random() * (a - (max * 0.01))) + 1;
                    key = a + "-" + b;
                    if (a === b) {
                        already.push(key);
                    }
                } while (already.indexOf(key) !== -1 || a === max);

                $("#content").append("<div class=\"t3\">Subtrahiere " + iFormat.format(b) + " von " + iFormat.format(a) + ".</div>");
                $("#content").append("<div class=\"t\"><span class=\"revealHide\">______________________________</span><span class=\"reveal\">" + iFormat.format(a) + " - " + iFormat.format(b) + " = " + iFormat.format(a-b) + "</span> </div>");             
            break;
            case 3:
                do {
                    a = Math.floor(Math.random() * max * 0.9) + (max * 0.1);
                    b = Math.floor(Math.random() * (a - (max * 0.01))) + 1;
                    key = a + "-" + b;
                    if (a === b) {
                        already.push(key);
                    }
                } while (already.indexOf(key) !== -1 || a === max);

                $("#content").append("<div class=\"t3\">" + ((Math.random() < 0.5)?"Bilde":"Berechne") + " die Differenz von " + iFormat.format(b) + " und " + iFormat.format(a) + ".</div>");
                $("#content").append("<div class=\"t\"><span class=\"revealHide\">______________________________</span><span class=\"reveal\">" + iFormat.format(a) + " - " + iFormat.format(b) + " = " + iFormat.format(a-b) + "</span> </div>");             
            break;
            case 4:
                do {
                    a = Math.floor(Math.random() * max / 10) + 1;
                    b = Math.floor(Math.random() * max / 10) + 1;
                    key = a + "*" + b;
                } while (a * b > max || already.indexOf(key) !== -1);

                $("#content").append("<div class=\"t3\">Multipliziere " + iFormat.format(a) + " und " + iFormat.format(b) + ".</div>");
                $("#content").append("<div class=\"t\"><span class=\"revealHide\">______________________________</span><span class=\"reveal\">" + iFormat.format(a) + " · " + iFormat.format(b) + " = " + iFormat.format(a*b) + "</span> </div>");             
            break;
            case 5:
                do {
                    a = Math.floor(Math.random() * max / 10) + 1;
                    b = Math.floor(Math.random() * max / 10) + 1;
                    key = a + "*" + b;
                } while (a * b > max || already.indexOf(key) !== -1);

                $("#content").append("<div class=\"t3\">" + ((Math.random() < 0.5)?"Bilde":"Berechne") + " das Produkt von " + iFormat.format(a) + " und " + iFormat.format(b) + ".</div>");
                $("#content").append("<div class=\"t\"><span class=\"revealHide\">______________________________</span><span class=\"reveal\">" + iFormat.format(a) + " · " + iFormat.format(b) + " = " + iFormat.format(a*b) + "</span> </div>");             
            break;
            case 6:
                do {
                    a = Math.floor(Math.random() * 10) + 1;
                    b = Math.floor(Math.random() * 10) + 1;
                    key = a + "/" + b;
                } while (a != b && already.indexOf(key) !== -1);

                $("#content").append("<div class=\"t3\">Dividiere " + iFormat.format(a*b) + " durch " + iFormat.format(b) + ".</div>");
                $("#content").append("<div class=\"t\"><span class=\"revealHide\">______________________________</span><span class=\"reveal\">" + iFormat.format(a*b) + " : " + iFormat.format(b) + " = " + iFormat.format(a) + "</span> </div>");             
            break;  
            case 7:
                do {
                    a = Math.floor(Math.random() * 10) + 1;
                    b = Math.floor(Math.random() * 10) + 1;
                    key = a + "/" + b;
                } while (a != b && already.indexOf(key) !== -1);

                $("#content").append("<div class=\"t3\">" + ((Math.random() < 0.5)?"Bilde":"Berechne") + " die Division zwischen " + iFormat.format(a*b) + " und " + iFormat.format(b) + ".</div>");
                $("#content").append("<div class=\"t\"><span class=\"revealHide\">______________________________</span><span class=\"reveal\">" + iFormat.format(a*b) + " : " + iFormat.format(b) + " = " + iFormat.format(a) + "</span> </div>");             
            break;         
        }
    }
}
</script><noscript>
    <div class="noscript">
        <h2>Bitte aktivieren Sie JavaScript!</h2>

        Die Aufgaben werden zufällig erzeugt, dafür ist JavaScript nötig.
    </div>
</noscript>
