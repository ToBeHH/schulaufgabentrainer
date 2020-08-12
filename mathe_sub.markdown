---
layout: default
title: Mathe - Subtraktion
navcategory: mathe
---

## Subtraktion Zahlenraum 1-<span id="max"></span>

**Aufgabe:** Subtrahiere die beiden Zahlen voneinander.

<div id="content" class="group">
</div>
<div id="content2" class="group" style="margin-top:40px">
</div>

<script type="text/javascript">
function init() {
    var maxStr = getParameterByName("max");
    var max = 1000;
    if (maxStr !== null) {
        max = parseInt(maxStr, 10);
    }
    $("#max").html(new Intl.NumberFormat('de-DE').format(max));
    sub(max, "#content");

    if (max <= 20) {
        subWithIcons(Math.min(max, 18), "#content2", 4);
    } else {
        $("#content2").remove();
    }
}
</script>
