---
layout: default
title: Mathe - Addition und Subtraktion
navcategory: mathe
redirect_from:
  - ../mathe_add_sub.html
canreveal: true
---
## Addition Zahlenraum 1-<span id="max"></span>

**Aufgabe:** Addiere die beiden Zahlen zusammen.

<div id="content" class="group">
</div>

<br/>

## Subtraktion Zahlenraum 1-<span id="max2"></span>

**Aufgabe:** Subtrahiere die beiden Zahlen voneinander.

<div id="content2" class="group">
</div>
<div id="content3" class="group" style="margin-top:40px">
</div>

<script type="text/javascript">
function init() {
    var maxStr = getParameterByName("max");
    var max = 1000;
    var iFormat = new Intl.NumberFormat('de-DE');
    if (maxStr !== null) {
        max = parseInt(maxStr, 10);
    }
    $("#max").html(iFormat.format(max));

    add(max, "#content");

    $("#max2").html(iFormat.format(max));
    sub(max, "#content2");

    if (max <= 20) {
        subWithIcons(Math.min(max, 18), "#content3", 2);
    }
}
</script><noscript>
    <div class="noscript">
        <h2>Bitte aktivieren Sie JavaScript!</h2>

        Die Aufgaben werden zufällig erzeugt, dafür ist JavaScript nötig.
    </div>
</noscript>

