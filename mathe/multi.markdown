---
layout: default
title: Mathe - Multiplikation
navcategory: mathe
redirect_from:
  - ../mathe_multi.html
---

## Multiplikation Zahlenraum 1-<span id="max"></span>

**Aufgabe:** Multipliziere die beiden Zahlen miteinander.

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

    multi(max, "#content");
}
</script><noscript>
    <div class="noscript">
        <h2>Bitte aktivieren Sie JavaScript!</h2>

        Die Aufgaben werden zufällig erzeugt, dafür ist JavaScript nötig.
    </div>
</noscript>
