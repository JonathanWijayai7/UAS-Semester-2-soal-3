function hasil() {
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var harga;
  var total = jumlah * harga;
  document.getElementById("total").innerHTML = total;
  var Nama = document.getElementById("Nama").value;

  if (Nama == "Monitor") {
    harga = 500000;
    total = jumlah * harga;
    document.getElementById("harga").innerHTML = harga;
    document.getElementById("total").innerHTML = total;
  } else if (Nama == "Keyboard") {
    harga = 150000;
    total = jumlah * harga;
    document.getElementById("harga").innerHTML = harga;
    document.getElementById("total").innerHTML = total;
  } else {
    harga = 100000;
    total = jumlah * harga;
    document.getElementById("harga").innerHTML = harga;
    document.getElementById("total").innerHTML = total;
  }
}

function hapus() {
  document.getElementById("jumlah").innerHTML = "";
  document.getElementById("harga").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  alert("Data sudah direset, Silahkan pencet tombol reload");
}
