const addBtn = document.getElementById("addBtn");
const list = document.getElementById("dataList");

addBtn.addEventListener("click", () => {
  const date = document.getElementById("date").value;
  const total = document.getElementById("total").value;
  const defect = document.getElementById("defect").value;

  if (!date || !total || !defect) {
    alert("모든 값을 입력하세요");
    return;
  }

  const defectRate = ((defect / total) * 100).toFixed(2);

  const tr = document.createElement("tr");

  if (defectRate > 5) {
    tr.classList.add("high");
  }

  tr.innerHTML = `
    <td>${date}</td>
    <td>${total}</td>
    <td>${defect}</td>
    <td>${defectRate}%</td>
  `;

  list.appendChild(tr);
});