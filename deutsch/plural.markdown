---
layout: default
title: Deutsch - Plural
navcategory: deutsch
redirect_from:
  - ../deutsch_plural.html
---

## Deutsch Plural

**Aufgabe:** Schreibe den Plural auf, also z.B. „die Frau / die Frauen“.

<script src="../js/deutsch.js"></script>
<script type="text/javascript">

    var already = new Array();

    for (var i = 0; i < 27; i++) {
        do {
            var a = Math.floor(Math.random() * wortschatz_klasse3.length);
            var key = a;
        } while (already.indexOf(key) != -1 || !wortschatz_klasse3[a][2] /* has no plural*/);

        document.write("<div class=\"deutschTest\"><i>[</i>");
        document.write(writeWord(wortschatz_klasse3[a][0] + " " + wortschatz_klasse3[a][1], true));

        for (var j = 0; j < 100; j++) {
            document.write("  <i>_</i>");
        }
        document.write("  <i>]</i>");

        document.write("</div>");
        already.push(key);
    }
</script><noscript>
    <div class="noscript">
        <h2>Bitte aktivieren Sie JavaScript!</h2>

        Die Aufgaben werden zufällig erzeugt, dafür ist JavaScript nötig.
    </div>
</noscript>

