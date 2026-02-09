**CSS** atau *cascading style sheet* adalah bahasa yang digunakan untuk mengubah gaya dari masing-masing tag di HTML. CSS menggunakan *key-value pairs* bernama *properties*, sama seperti HTML menggunakan *attribute* untuk mengatur menspesifikasi beberapa pengaturan gayanya.

Salah satu cara untuk mengubah gaya di HTML adalah menggunakan *attribute* `style` yang diletakkan di dalam tag di dokumen HTML. Misal:
``` html
<p style="font-size: large; text-align: center;">
	Hello, world!
</p>
```

Namun, cara yang lebih umum untuk dilakukan adalah dengan memisahkan file HTML dengan file CSS. 

CSS ditulis dengan format selektor dan deklarasi. Contoh:
``` css
h1 { 
	color: blue;
	font-size: 12px;
}
```

Di sini `h1` adalah selektor dari tag mana di HTML yang ingin dikenakan *style*, lalu konten di dalam tanda kurung `{}` adalah gaya yang ingin diubah. 

Selektor dapat berupa:
1. *type selector* yang akan memilih (*select*) tipe tag.
2. *class selector* yang akan memilih elemen HTML yang memiliki kelas spesifik.
3. *id selector* yang akan memilih ID dari suatu elemen spesifik.

Misal: 
```css
/* Type Selector */

body {
	color: blue;
	font-size: 12px;
}

/* Class Selector */
.center { 
	text-align: center;  
	color: red;
}

/* ID Selector */

```

CSS ini dapat ditulis di dalam file HTML secara terpisah dengan diletakkan di bagian `head` sebelum `<title>` dengan tag `<style>` atau diletakkan secara terpisah dengan meng-import file CSS yang ingin diaplikasikan.

``` html
<!DOCTYPE html>

<html lang="en">
    <head>
        <style>
            .centered
            {
                text-align: center;
            }
        </style>
        <title>css</title>
    </head>
    <body>
	    <div class="centered">
			Hello, world!
		</div>
	</body>
</html>
```

atau
```html
<!-- index.html -->
<!DOCTYPE html>

<html lang="en">
    <head>
        <link href="style.css" rel="stylesheet">
        <title>css</title>
    </head>
    <body>
	    <div class="centered">
			Hello, world!
		</div>
	</body>
</html>
```

```css
/* style.css */
.centered {
    text-align: center;
    font-size: 12px;
}
```

## Framework
Pada aplikasinya di industri sekarang, sudah jarang *developer* yang menggunakan *vanilla* HTML dan CSS. Melainkan, mereka menggunakan *framework* untuk menyelesaikan hal-hal yang dianggap kurang signifikan, seperti estetika. *Framework* dapat dipandang seperti *third-party library* yang membantu mempercantik HTML, sehingga desain dari *page* yang kita buat lebih nyaman dipandang.