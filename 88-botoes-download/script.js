document.querySelectorAll(".elemento__botao").forEach((elemento__botao) => {
  let duracao = 3000,
    svg = elemento__botao.querySelector("svg"),
    svgPath = new Proxy(
      {
        y: null,
        smoothing: null,
      },
      {
        set(target, key, value) {
          target[key] = value;
          if (target.y !== null && target.smoothing !== null) {
            svg.innerHTML = getPath(target.y, target.smoothing, null);
          }
          return true;
        },
        get(target, key) {
          return target[key];
        },
      }
    );

  elemento__botao.style.setProperty("--duration", duracao);

  svgPath.y = 20;
  svgPath.smoothing = 0;

  elemento__botao.addEventListener("click", (e) => {
    e.preventDefault();

    if (!elemento__botao.classList.contains("ativacao__carregamento")) {
      elemento__botao.classList.add("ativacao__carregamento");

      gsap.to(svgPath, {
        smoothing: 0.3,
        duration: (duracao * 0.065) / 1000,
      });

      gsap.to(svgPath, {
        y: 12,
        duration: (duracao * 0.265) / 1000,
        delay: (duracao * 0.065) / 1000,
        ease: Elastic.easeOut.config(1.12, 0.4),
      });

      setTimeout(() => {
        svg.innerHTML = getPath(0, 0, [
          [3, 14],
          [8, 19],
          [21, 6],
        ]);
      }, duracao / 2);
    }
  });
});

function getPoint(point, i, a, smoothing) {
  let cp = (current, previous, next, reverse) => {
      let p = previous || current,
        n = next || current,
        o = {
          length: Math.sqrt(
            Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)
          ),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0]),
        },
        angle = o.angle + (reverse ? Math.PI : 0),
        length = o.length * smoothing;
      return [
        current[0] + Math.cos(angle) * length,
        current[1] + Math.sin(angle) * length,
      ];
    },
    cps = cp(a[i - 1], a[i - 2], point, false),
    cpe = cp(point, a[i - 1], a[i + 1], true);
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
  let points = pointsNew
      ? pointsNew
      : [
          [4, 12],
          [12, update],
          [20, 12],
        ],
    d = points.reduce(
      (acc, point, i, a) =>
        i === 0
          ? `M ${point[0]},${point[1]}`
          : `${acc} ${getPoint(point, i, a, smoothing)}`,
      ""
    );
  return `<path d="${d}" />`;
}
