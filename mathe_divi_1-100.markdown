---
layout: default
title: Mathe - Division
navcategory: mathe
---

## Division Zahlenraum 1-100

**Aufgabe:** Dividiere die beiden Zahlen voneinander.

<script type="text/javascript">

    var already = new Array();

    for (var i = 0; i < 100; i++) {
        do {
            var a = Math.floor(Math.random() * 10) + 1;
            var b = Math.floor(Math.random() * 10) + 1;
            var key = a + "-" + b;
            /*if (a < b) {
              key = a + "-" + b;
            } else {
              key = b + "-" + a;
            }*/
        } while (already.indexOf(key) != -1);

        document.write("<div class=\"t\">" + (a * b) + " : " + b + " = _______ </div>");
        already.push(key);
    }

</script>


