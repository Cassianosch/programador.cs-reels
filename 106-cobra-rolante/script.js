var elemento__navegacao = document.querySelector(".elemento__navegacao");
var elemento__navegacaoPath = document.querySelector(
  ".elemento__navegacao-cobrinha path"
);
var elemento__navegacaoItems;

// Factor of screen size that the element must cross
// before it's considered visible
var TOP_MARGIN = 0.1,
  BOTTOM_MARGIN = 0.2;

var pathLength;

var lastPathStart, lastPathEnd;

window.addEventListener("resize", drawPath, false);
window.addEventListener("scroll", sync, false);

drawPath();

function drawPath() {
  elemento__navegacaoItems = [].slice.call(
    elemento__navegacao.querySelectorAll("li")
  );

  // Cache element references and measurements
  elemento__navegacaoItems = elemento__navegacaoItems.map(function (item) {
    var anchor = item.querySelector("a");
    var target = document.getElementById(anchor.getAttribute("href").slice(1));

    return {
      listItem: item,
      anchor: anchor,
      target: target,
    };
  });

  // Remove missing targets
  elemento__navegacaoItems = elemento__navegacaoItems.filter(function (item) {
    return !!item.target;
  });

  var path = [];
  var pathIndent;

  elemento__navegacaoItems.forEach(function (item, i) {
    var x = item.anchor.offsetLeft - 5,
      y = item.anchor.offsetTop,
      height = item.anchor.offsetHeight;

    if (i === 0) {
      path.push("M", x, y, "L", x, y + height);
      item.pathStart = 0;
    } else {
      // Draw an additional line when there's a change in
      // indent levels
      if (pathIndent !== x) path.push("L", pathIndent, y);

      path.push("L", x, y);

      // Set the current path so that we can measure it
      elemento__navegacaoPath.setAttribute("d", path.join(" "));
      item.pathStart = elemento__navegacaoPath.getTotalLength() || 0;

      path.push("L", x, y + height);
    }

    pathIndent = x;

    elemento__navegacaoPath.setAttribute("d", path.join(" "));
    item.pathEnd = elemento__navegacaoPath.getTotalLength();
  });

  pathLength = elemento__navegacaoPath.getTotalLength();

  sync();
}

function sync() {
  var windowHeight = window.innerHeight;

  var pathStart = pathLength,
    pathEnd = 0;

  var visibleItems = 0;

  elemento__navegacaoItems.forEach(function (item) {
    var targetBounds = item.target.getBoundingClientRect();

    if (
      targetBounds.bottom > windowHeight * TOP_MARGIN &&
      targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)
    ) {
      pathStart = Math.min(item.pathStart, pathStart);
      pathEnd = Math.max(item.pathEnd, pathEnd);

      visibleItems += 1;

      item.listItem.classList.add("visible");
    } else {
      item.listItem.classList.remove("visible");
    }
  });

  // Specify the visible path or hide the path altogether
  // if there are no visible items
  if (visibleItems > 0 && pathStart < pathEnd) {
    if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
      elemento__navegacaoPath.setAttribute("stroke-dashoffset", "1");
      elemento__navegacaoPath.setAttribute(
        "stroke-dasharray",
        "1, " + pathStart + ", " + (pathEnd - pathStart) + ", " + pathLength
      );
      elemento__navegacaoPath.setAttribute("opacity", 1);
    }
  } else {
    elemento__navegacaoPath.setAttribute("opacity", 0);
  }

  lastPathStart = pathStart;
  lastPathEnd = pathEnd;
}
