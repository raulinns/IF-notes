**HTML** atau *hypertext markup language* merupakan bahasa yang tersusun dari tag dan dapat memiliki atribut yang mendeskripsikan tag tersebut. Tag akan tersusun dari komponen sebagai berikut.
``` html
<tagname> { KONTEN DARI TAG } </tagname>
```

Dokumen HTML harus dimulai dengan deklarasi tipe dokumen `<!DOCTYPE html>`, lalu dilanjutkan dengan *open tag* `<html>` dan diakhiri dengan *close tag* `</html>`, Bagian yang terlihat dalam dokumen HTML akan tertulis di antara tag `<body>`.

Indentasi tidak diperlukan dalam HTML, karena *whitespace* dan indentasi tidak dibaca oleh HTML. Namun, penggunaan indentasi akan membantu menunjukkan hierarki dalam dokumen HTML. 

*Web browser* akan membaca file HTML dari atas ke bawah dan kiri ke kanan. Hierarki dari sebuah HTML direpresentasikan dalam struktur *tree*. 

```html
<!DOCTYPE html>

<html lang="en">
	<head>
		<title>
			hello, title
		</title>
	</head>
	<body>
		hello, body
	</body>
</html>
```

![[Pasted image 20260204151427.png]]

## Sintaks Dasar

### Paragraf
Untuk memulai paragraf baru, kita dapat menggunakan tag `<p>`, karena seperti yang sudah disebutkan HTML tidak dapat membaca *whitespace*. Selain `<p>`, `<div>` juga dapat digunakan untuk mendefinisikan sebuah *division* atau *section* yang berbeda. 

Kita dapat juga menggunakan `<header>`, `<main>`, dan `<footer>` untuk membedakan masing-masing *section* dalam *body*.

### Heading
HTML juga mendukung representasi *heading* yang bertingkat (hingga *heading* 6). Tag yang dapat digunakan adalah `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, dan `<h6>`. Masing-masing tag `<hX>` memiliki ukuran dan ketebalan *font* yang berbeda-beda. Ini akan membantu *browser*, *search engine*, atau bahkan AI untuk membedakan *chapter* atau *section* yang berbeda dalam *web page*. 

### List
HTML juga dapat menampilkan *list* menggunakan `<ul>` untuk *unordered list* (*bullet point*) dan `<ol>` untuk *ordered list* )*numbered list*). Masing-masing *item* dalam *list* dapat dipisahkan dengan tag `<li>` untuk *list item*. 

Tabel juga merupakan salah satu hal yang dapat ditampilkan dalam dokumen HTML menggunakan tag `<table>`. Untuk masing-masing baris/*row* yang ingin dideklarasi, kita dapat menggunakan tag `<tr>` untuk *table row*, lalu untuk masing-masing data di dalam baris, digunakan tag `<td>` untuk *table data* atau kolom.


### Image
Dalam dokumen HTML juga dapat ditampilkan gambar menggunakan tag `<img>`. Namun, selain tag, kita juga harus menambahkan *attribute* file asal dari gambar yang ingin ditambahkan menggunakan atribut `src`. Pada tag `<img>`, kita tidak membutuhkan *close tag*, karena tidak seperti tag-tag lainnya, untuk gambar tidak ada awal dan akhir untuk sebuah gambar. Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>image</title>
    </head>
    <body>
        <img alt="photo of example" src="example.png">
    </body>
</html>
```

Atribut `alt` juga dapat ditambahkan untuk menambahkan *alternative text* untuk membantu pengguna yang tidak dapat melihat gambar secara langsung (baik karena alasan kesehatan atau masalah teknis). 

### Video
Selain gambar, kita juga dapat menampilkan video menggunakan tag `<video>`. 
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>image</title>
    </head>
    <body>
        <video controls muted>
	        <source src="video.mp4" type="video/mp4"
		</video>
    </body>
</html>
```

Ada beberapa atribut yang dapat ditambahkan, seperti `controls` untuk menambahkan kontrol dasar untuk video, seperti tombol *play*, *volume*, dan lain-lain; `muted` untuk membisukan video secara default; `src` path asal dari video yang ingin ditampilkan; dan `type` tipe media dari video yang ingin ditampilkan. 

### Hyperlink
HTML juga mendukung *hyperlink* dalam sebuah *web page* menggunakan tag `<a>` untuk *anchor*. Kita juga perlu menambahkan atribut `href` (*hyper reference*) untuk memasukkan *page* apa yang dituju. Selain itu, kita juga harus memasukkan konten apa yang dijadikan *hyperlink* di antara *open tag* `<a>`dan *close tag* `</a>`.

### Komentar
Untuk menambahkan komentar pada dokumen HTML, kita dapat melakukannya dengan format berikut
```html
<!-- KOMENTAR -->
```

### Contoh
```html
<!doctype html>

<!-- KOMENTAR -->

<html lang="en">
    <head>
        <title>headings</title>
    </head>

    <body>
        <h1>One</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>

        <h2>Two</h2>
        <p>
            Mauris ut dui in eros semper hendrerit. 
        </p>

        <h3>Three</h3>
        <p>
            Aenean venenatis convallis ante a rhoncus. 
        </p>

        <h4>Four</h4>
        <p>
            Integer at justo lacinia libero blandit aliquam ut ut dui. 
        </p>

        <h5>Five</h5>
        <p>
            Suspendisse rutrum vestibulum odio, sed venenatis purus condimentum sed. 
        </p>

        <h6>Six</h6>
        <p>
            Sed quis malesuada mi. 
        </p>

        <ul>
            <li>foo</li>
            <li>bar</li>
            <li>baz</li>
        </ul>

        <ol>
            <li>foo</li>
            <li>bar</li>
            <li>baz</li>
        </ol>

        <table>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>

            <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>

            <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
            </tr>
        </table>

        <img src="DSC.jpg" alt="foto endra">

        <a href="https://www.youtube.com/">Click This</a>
    </body>
</html>
```

### Form
HTML juga dapat menampilkan form. Sangat banyak sintaks dan fitur yang dapat dilakukan oleh form, seperti teks, radio (*multiple choice*), *checkbox*, *submit button*, dan lain-lain. Form dalam HTML menggunakan tag `<form>`, lalu kontennya akan diisi oleh `<input>` dengan menspesifikasikan atribut `type`-nya. 

| Type                      | Description        |
| ------------------------- | ------------------ |
| `<input type="text">`     | *Text Input*       |
| `<input type="radio">`    | *Radio button*     |
| `<input type="checkbox">` | *Checkbox*         |
| `<input type="submit">`   | *Submit button*    |
| `<input type="button">`   | *Clickable Button* |

## ID dan Class
Untuk nantinya menghubungkan HTML dengan [[JavaScript]], kita menggunakan dua atribut yang krusial:
1. ID `id`, dapat diberikan kepada satu elemen saja. ID bersifat unik untuk tiap halaman.
2. Kelas `Class`, dapat diberikan kepada banyak elemen yang dapat dikelompokkan. 

### Regular Expression
*Regular expression* atau **Regex** adalah cara untuk merepresentasikan sebuah pola untuk menentukan sebuah teks atau *string*. 

| Ekspresi   | Deskripsi                                     |
| ---------- | --------------------------------------------- |
| `.`        | *any character* (*except line terminator*)    |
| `*`        | *0 or more time*                              |
| `+`        | *1 or more time*                              |
| `?`        | *0 or 1 time*                                 |
| `{n}`      | *n occurences*                                |
| `{n, m}`   | *at least n occurences, at most m occurences* |
| `[012345]` | *any of the enclosed characters*              |
| `[0-9]`    | *any of the range of characters*              |
| `\d`       | *any digits*                                  |
| `\D`       | *any characters that is not a digit*          |

### Web Browser
Ketika sebuah *web browser* melakukan *request* ke server untuk melihat sebuah *web page*, *browser* akan mendapatkan *copy* dari *web page* dalam bentuk HTML di *browser* ini memungkinkan kita untuk melihat dan "mengubah" isi dari *web page* menggunakan *developer tools* seperti *inspect* dan *view page source* di *web browser* masing-masing. 

Ini mengapa mengubah di *inspect* tidak berefek ke *web page* "asli", karena yang diubah hanyalah *copy* yang kita dapatkan di *web browser*.

## Referensi
- CS50x 2025 : https://www.youtube.com/live/xiWUL3M9D8c
- Reguler Expression (Regex) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
- w3school: https://www.w3schools.com/html/