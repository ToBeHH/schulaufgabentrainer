---
layout: default
title: Mathe - Gleichungen
navcategory: mathe
canreveal: true
---

## Gleichungen

**Aufgabe:** Bestimme *x*.

<script type="text/javascript">

    var already = new Array();

    for (var i = 0; i < 50; i++) {
        const type = Math.floor(Math.random() * 7);
        let key = "";
        let a, b, c, d, x;
        switch (type) {
            case 0:
                do {
                    a = Math.floor(Math.random() * 10) + 1;
                    x = Math.floor(Math.random() * 20) + 1;
                    b = Math.floor(Math.random() * 40) - 20;
                    key = a + "*" + x + "+" + b;
                } while (already.indexOf(key) != -1 && b != 0);

                document.write("<div class=\"t\">" + a + " · <m>x</m> " + ((b > 0)?"+ ":"- ") + Math.abs(b) + " = " + (a*x + b) + " </div>");                
            break;
            case 1:
                do {
                    a = Math.floor(Math.random() * 10) + 1;
                    x = Math.floor(Math.random() * 40) - 20;
                    key = a + "+" + x;
                } while (already.indexOf(key) != -1 && x != 0);

                document.write("<div class=\"t\">" + a + " + <m>x</m> = " + (a+x) + " </div>");                
            break;
            case 2:
                do {
                    a = Math.floor(Math.random() * 10) + 1;
                    x = Math.floor(Math.random() * 40) - 20;
                    key = a + "*" + x;
                } while (already.indexOf(key) != -1);

                document.write("<div class=\"t\">" + a + " · <m>x</m> = " + (a*x) + " </div>"); 
            break;
            case 3:
                do {
                    a = Math.floor(Math.random() * 10) + 1;
                    x = Math.floor(Math.random() * 20) + 1;
                    b = Math.floor(Math.random() * 40) - 20;
                    c = Math.floor(Math.random() * 10) + 1;
                    key = a + "*" + x + "+" + b + "+" + c + "x";
                } while (already.indexOf(key) != -1);

                document.write("<div class=\"t\">" + a + "<m>x</m> " + ((b > 0)?"+ ":"- ") + Math.abs(b) + ((c > 0)?" + ":" - ") + Math.abs(c) + "<m>x</m> = " + (a*x + b + c*x) + " </div>");
            break;               
            case 4:
                do {
                    a = Math.floor(Math.random() * 10) + 1;
                    x = Math.floor(Math.random() * 20) + 1;
                    b = Math.floor(Math.random() * 40) - 20;
                    c = Math.floor(Math.random() * 10) + 1;
                    key = c + "+" + a + "*" + x + "+" + b;
                } while (already.indexOf(key) != -1);

                document.write("<div class=\"t\">" + c + ((a > 0)?" + ":" - ") + Math.abs(a) + "<m>x</m> " + ((b > 0)?"+ ":"- ") + Math.abs(b) + " = " + (c + a*x + b) + " </div>");
            break;                  
            case 5:
                do {
                    a = Math.floor(Math.random() * 20) + 1;
                    x = Math.floor(Math.random() * 20) + 1;
                    b = Math.floor(Math.random() * 40) - 20;
                    c = a*x - b*x;
                    key =  a + "*" + x + "=" + b + "*x";
                } while (already.indexOf(key) != -1 && b != 0);

                document.write("<div class=\"t\">" + a + "<m>x</m> = " + b + "<m>x</m> " + ((c > 0)?" + ":" - ") + Math.abs(c) + " </div>");
            break;                    
            case 6:
                do {
                    a = Math.floor(Math.random() * 20) + 1;
                    x = Math.floor(Math.random() * 20) + 1;
                    b = Math.floor(Math.random() * 40) - 20;
                    c = Math.floor(Math.random() * 40) - 20;
                    d = a*x + b - c*x;
                    key =  a + "*" + x + "=" + b + "*x";
                } while (already.indexOf(key) != -1 && b != 0 && c != 0);

                document.write("<div class=\"t\">" + a + "<m>x</m> " + ((b > 0)?" + ":" - ") + Math.abs(b) + " = " + c + "<m>x</m> " + ((d > 0)?" + ":" - ") + Math.abs(d) + " </div>");
            break;               
        }
        document.write("<div class=\"t\"> <m>x</m> = <span class=\"revealHide\">_______</span><span class=\"reveal\">" + x + "</span> </div>");          
        already.push(key);
    }

</script><noscript>
    <div class="noscript">
        <h2>Bitte aktivieren Sie JavaScript!</h2>

        Die Aufgaben werden zufällig erzeugt, dafür ist JavaScript nötig.
    </div>
</noscript>



