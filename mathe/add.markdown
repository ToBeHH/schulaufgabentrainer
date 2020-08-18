---
layout: default
title: Mathe - Addition
navcategory: mathe
redirect_from:
  - ../mathe_add.html
---
## Addition Zahlenraum 1-<span id="max"></span>

**Aufgabe:** Addiere die beiden Zahlen zusammen.

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

    add(max, "#content");
}
</script>