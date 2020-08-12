---
layout: default
title: Mathe - Multiplikation
navcategory: mathe
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
</script>