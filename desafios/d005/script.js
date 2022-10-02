function gerar() {
  var num = document.getElementById("txtnumero").value;
  var tab = document.getElementById("tabsel");
  if (num == 0) {
    alert("por favor, digite um numero!");
  } else {
    var i = 0;
    tab.innerHTML = ''
    while (i <= 10) {
      var item = document.createElement("option");
      item.text = `${num} X ${i} = ${num * i}`;
      tab.value = `tab{i}`
      tab.appendChild(item);
      i++;
    }
  }
}
