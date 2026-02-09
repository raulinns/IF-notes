Dengan hanya HTML dan CSS, kita sudah dapat membuat sebuah *web page*, tetapi *web page* ini masih bersifat statis. Dalam artian, tidak akan ada perubahan dalam *web page* setelah *web browser* kita mendapatkan hasil *copy*dari server. 

JavaScript adalah salah satu *client-side language* yang memungkinkan untuk *web page* ter-*update* setelah *web browser* mendapatkan hasil *copy* ini. Selain itu, terdapat juga *server-side language*, seperti Python, Go, dan lain-lain yang membantu kedinamisan *web page*. *Later called as frontend and backend.

## Variabel dan Tipe Data
JavaScript modern menggunakan `let` dan `const` untuk mendeklarasikan variabel.
- `let`: Variabel yang nilainya bisa diubah.
- `const`: Konstanta yang nilainya tidak bisa diubah setelah dideklarasikan.

## Fungsi (Functions)

Fungsi digunakan untuk membungkus kode agar bisa digunakan berkali-kali.

``` js
function greet(name) {
    return "Hello, " + name;
}
```

## DOM (Document Object Model) Manipulation
DOM adalah representasi struktur HTML dalam bentuk pohon (_tree_) yang dapat diakses oleh JavaScript.

### 1. Element Selector

| Sintaks                            | Deskripsi                           |
| ---------------------------------- | ----------------------------------- |
| `document.querySelector("#id")`    | Memilih elemen berdasarkan *ID*     |
| `document.querySelector(".class")` | Memilih elemen berdasarkan *Class*  |
| `document.querySelector("tag")`    | Memilih elemen berdasarkan tag HTML |

### 2. Element Modifier

| Sintaks           | Deskripsi                                                                   |
| ----------------- | --------------------------------------------------------------------------- |
| `.innerHTML`      | Mengubah konten di dalam elemen (termasuk tag HTML)                         |
| `.value`          | Mengambil atau mengubah nilai dari elemen input form                        |
| `.style.property` | Mengubah gaya CSS langsung dari JavaScript (misal: `.style.color = "red"`). |

## Event Listeners
Cara terbaik untuk menangani interaksi pengguna adalah dengan `addEventListener`.

``` js
document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("#myButton");
    
    button.addEventListener("click", function() {
        alert("Button Clicked!");
    });
});
```
_Catatan: `DOMContentLoaded` memastikan kode JS berjalan setelah HTML selesai dimuat._

| Nama Event         | Deskripsi                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `click`            | Terjadi saat elemen diklik oleh pengguna.                                                 |
| `submit`           | Terjadi saat sebuah form dikirim (_submitted_).                                           |
| `input`            | Terjadi saat nilai pada elemen `<input>`, `<select>`, atau `<textarea>` berubah.          |
| `change`           | Mirip `input`, tapi biasanya dipicu setelah elemen kehilangan fokus atau pilihan dikunci. |
| `keydown`          | Terjadi saat tombol keyboard ditekan ke bawah.                                            |
| `keyup`            | Terjadi saat tombol keyboard dilepas.                                                     |
| `DOMContentLoaded` | Terjadi saat HTML dasar selesai dimuat (tanpa menunggu gambar/CSS).                       |
| `load`             | Terjadi saat seluruh halaman (termasuk gambar dan gaya) selesai dimuat.                   |
| `mouseover`        | Terjadi saat kursor mouse masuk ke area elemen.                                           |
| `mouseout`         | Terjadi saat kursor mouse keluar dari area elemen.                                        |
| `focus`            | Terjadi saat sebuah elemen (seperti input) mendapatkan fokus.                             |
| `blur`             | Terjadi saat elemen kehilangan fokus.                                                     |
| `resize`           | Terjadi saat ukuran jendela browser berubah.                                              |
| `scroll`           | Terjadi saat pengguna menggulir (_scroll_) halaman atau elemen.                           |
| `contextmenu`      | Terjadi saat pengguna melakukan klik kanan pada elemen.                                   |

## Template Literals
Menggunakan _backticks_ (`` ` ``) untuk menggabungkan string dan variabel dengan lebih mudah.

``` js
let name = "Endra";
console.log(`Hello, ${name}!`); // Hasil: Hello, Endra!
```