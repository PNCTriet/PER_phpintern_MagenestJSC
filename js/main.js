function solveQuadratic() {  document.getElementById("errorA").textContent = "";
  document.getElementById("errorB").textContent = "";
  document.getElementById("errorC").textContent = "";
  document.getElementById("solutionSteps").textContent = "";
  const a = document.getElementById("a").value.trim();
  const b = document.getElementById("b").value.trim();
  const c = document.getElementById("c").value.trim();
  const aNum = parseFloat(a);
  const bNum = parseFloat(b);
  const cNum = parseFloat(c);
  if (isNaN(aNum)) {
    document.getElementById("errorA").textContent =
      "Hệ số a là bắt buộc, anh/chị nhập số giúp em";
  }
  if (isNaN(bNum)) {
    document.getElementById("errorB").textContent =
      "Hệ số b là bắt buộc, anh/chị nhập số giúp em";
  }
  if (isNaN(cNum)) {
    document.getElementById("errorC").textContent =
      "Hệ số c là bắt buộc, anh/chị nhập số giúp em";
    return;
  }
  const result = document.getElementById("result");
  result.innerHTML = "";
  if (aNum === 0) {
  if (bNum === 0) {
      if (cNum === 0) {
        result.innerHTML =
          "Phương trình vô số nghiệm. Không phải là phương trình bậc hai.";
      } else {
        result.innerHTML =
          "Phương trình vô nghiệm. Không phải là phương trình bậc hai.";
      }
    } else {
      const linearSolution = -cNum / bNum;
      result.innerHTML = `Phương trình bậc nhất, nghiệm là x = ${linearSolution.toFixed(
        2
      )}.`;
    }
  } else {
  const discriminant = bNum ** 2 - 4 * aNum * cNum;

    if (discriminant < 0) {
      result.innerHTML = "Phương trình vô nghiệm.";
    } else if (discriminant === 0) {
      const solution = -bNum / (2 * aNum);
      result.innerHTML = `Phương trình có nghiệm kép x = ${solution.toFixed(
        2
      )}.`;
    } else {
      const sqrtDiscriminant = Math.sqrt(discriminant);
      const x1 = (-bNum + sqrtDiscriminant) / (2 * aNum);
      const x2 = (-bNum - sqrtDiscriminant) / (2 * aNum);
      result.innerHTML = `Phương trình có hai nghiệm phân biệt:<br>x<sub>1</sub> = ${x1.toFixed(
        2
      )}, x<sub>2</sub> = ${x2.toFixed(2)}.`;
    }

  document.getElementById("solutionButton").style.display = "inline-block";
  }
}

function showSolution() {  const aNum = parseFloat(document.getElementById("a").value);
  const bNum = parseFloat(document.getElementById("b").value);
  const cNum = parseFloat(document.getElementById("c").value);
  const discriminant = bNum ** 2 - 4 * aNum * cNum;
  let solutionSteps = "";
  solutionSteps += `<div equation>`;
  solutionSteps += `<div term>Phương trình : (${aNum})x<sup>2</sup> + (${bNum})x + (${cNum}) = 0</div>`;

  if (discriminant > 0) {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const x1 = (-bNum + sqrtDiscriminant) / (2 * aNum);
    const x2 = (-bNum - sqrtDiscriminant) / (2 * aNum);

    solutionSteps += `<div term>Δ = b<sup>2</sup> - 4ac </div>`;
    solutionSteps += `<div term>  = (${bNum})<sup>2</sup> - 4 × (${aNum}) × (${cNum}) =  ${discriminant} > 0 </div>`;
    solutionSteps += `<div fraction>`;
    solutionSteps += `    <div top>-(${bNum}) + √${discriminant}</div>`;
    solutionSteps += `    <div bottom>2 × (${aNum})</div>`;
    solutionSteps += `</div>`;
    solutionSteps += `<div term> = ${x1.toFixed(2)}</div>`;

    solutionSteps += `<div fraction>`;
    solutionSteps += `    <div top>-(${bNum}) - √${discriminant}</div>`;
    solutionSteps += `    <div bottom>2 × (${aNum})</div>`;
    solutionSteps += `</div>`;
    solutionSteps += `<div term> = ${x2.toFixed(2)}</div>`;
  } else if (discriminant === 0) {
    const x = -bNum / (2 * aNum);
    solutionSteps += `<div term>Δ = b<sup>2</sup> - 4ac </div>`;
    solutionSteps += `<div term>  = (${bNum})<sup>2</sup> - 4 × (${aNum}) × (${cNum}) =  ${discriminant} </div>`;
    solutionSteps += `<div fraction>`;
    solutionSteps += `    <div top>-(${bNum})</div>`;
    solutionSteps += `    <div bottom>2 × (${aNum})</div>`;
    solutionSteps += `</div>`;
    solutionSteps += `<div term> = ${x.toFixed(2)}</div>`;
  } else {
    solutionSteps += `<div term>Phương trình vô nghiệm.</div>`;
  }
  solutionSteps += `</div>`;
  document.getElementById("solutionSteps").innerHTML = solutionSteps;
}

document.getElementById("solutionButton").addEventListener("click", function() {
    var solutionSteps = document.getElementById("solutionSteps");
    solutionSteps.classList.toggle("border-visible");
});

