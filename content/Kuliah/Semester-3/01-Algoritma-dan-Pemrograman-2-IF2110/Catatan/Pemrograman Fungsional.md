# Paradigma Fungsional
Paradigma Fungsional dasarnya adalah konsep pemetaan dan fungsi di matematika. Paradigma fungsional memiliki pendekatan berpikir melalui fungsi apa yang akan direalisasikan, serta **bebas memori** dan **tidak mementingkan urutan instruksi**. *Programmer* juga tidak dituntut untuk mengetahui bagaimana mesin melakukan eksekusi.

![[Pasted image 20250920041905.png]]

# Ekspresi Dasar
## Operator dan Ekspresi
Komputer memilik *Arithmetic and Logic Unit* (ALU), ini yang mengakibatkan komputer mampu melakukan perhitungan numerik dan logika. Operator hanya dapat beroperasi pada tipe dasar (integer, real, character, dan boolean). 

Ekspresi adalah gabungan dari operan dan operator. Operan dapat berupa suatu nilai yang bertipe sesuai dengan operator atau hasil aplikasi fungsi. Ekspresi pada Paradigma Fungsional adalah ekspresi aritmatika, ekspresi logika, ekspresi kondisional, dan ekspresi rekursif. 

Operator Aritmatika Dasar dari:
- (\*) Kali
- (\/) Bagi
- (\+) Tambah
- (\-) Kurang
- (**mod**) Hasil bagi
- (**div**) Pembagian integer

Operator Relasional terdiri dari $>$, $<$, $=$, $\ge$, $\le$, $\ne$. Terdapat juga Operator Boolean, seperti **and**, **or**, dan **not**.

Ada pula penulisan ekspresi, yaitu infix, prefix, dan postfix. 
- Infix berarti ekspresi terdiri dari \[operan\] \[operator\] \[operan\]
- Prefix berarti ekspersi terdiri dari  \[operator\] \[operan\] \[operan\]
- Postfix berarti ekspresi terdiri dari \[operan\] \[operan\] \[operator\]

![[Pasted image 20250920043257.png]]

## Tipe
Domain dan Range dari sebuah fungsi didefinisikan dalam bentuk tipe. Tipe adalah himpunan nilai dan sekumpulan operator yang terdefinisi terhadap tipe tersebut. Terdapat dua tipe, yaitu tipe dasar dan tipe bentukan. Tipe dasar adalah tipe yang sudah tersedia, termasuk integer, real, character, string, dan boolean. Sedangkan, tipe bentukan adalah tipe yang dibentuk sendiri dari tipe dasar yang sudah disediakan.

## Notasi Fungsional
Template Notasi Fungsional

![[Pasted image 20250920043922.png]]

Dalam Notasi Fungsional, dapat digunakan ekspresi antara untuk mempermudah pembentukan fungsi. Ekspresi antara adalah nama yang digunakan sementara dalam fungsi, hanya berlaku dalam fungsi, tidak di dunia luar. 

![[Pasted image 20250920044118.png]]

## Translasi ke Haskell
Dalam Haskell, penulisannya kurang lebih mirip. Perbedaannya adalah
- **mod** dan **div** adalah sebuah fungsi yang menerima dua integer (jadi penulisannya infix, seperti fungsi lainnya)
- Operator relasional $=$ menjadi `==` dan $\ne$ menjadi `/=`
- Operator boolean **and** menjadi `&&` dan **or** menjadi `||`
- Tipe dasarnya bernama Int, Float, Char, String, dan Bool

Template Notasi Fungsional

```haskell
-- DEFINISI DAN SPESIFIKASI
<Nama-Fungsi>:: <domain> -> <range>
	-- SPESIFIKASI FUNGSI
<Nama-Fungsi> <list-parameter> = <ekspresi-fungsional>
```

# Ekspresi Kondisional
Setiap kasus dalam ekspresi kondisional harus **disjoint** dan analisa kasusnya harus mencakup semua kasus.

Jenis-jenis notasi kondisional:
- `if-then-else` untuk 2 kasus saling komplementer
- `depend on`
- `depend on `dengan else (otherwise)

Notes: Urutan kondisinya tidak penting. Tidak ada notasi `if-then` saja, karena semua kasus harus ada nilainya.

Notasi Fungsional:

 ![[Pasted image 20250920045207.png]]
 
 ![[Pasted image 20250920045216.png]]
 
Haskell:

![[Pasted image 20250920045239.png]]

![[Pasted image 20250920045246.png]]

# Tipe Bentukan
Ada beberapa jenis tipe bentukan tergantung implementasinya:
1. Tipe yang memberikan nama baru atau membatasi domain tipe lain.
		**type** bilbulat: **integer** { Memberikan nama baru pada sebuah tipe }
		**type** IntPost: **integer** > 0 { Membatasi domain integer positif dengan > 0}
2. Tipe yang terdiri atas komponen bertipe lain
		**type** Point: \<x: integer, y: integer\>
3. Tipe bentukan tanpa nama. Domain atau range dari sebuah fungsi.
		HHMMDD: **integer**\[0..99999\] -> \<**integer** >= 0, **integer**\[0..23\], **integer** \[0..59], **integer**\[0..59\]

Dalam konteks fungsional, mendefinisikan sebuah tipe adalah mendefinisikan:
- Nama dan struktur tipe (komponen-komponennya)
- Selektor (Mengakses komponen tipe)
- Konstruktor (Membentuk tipe)
- Predikat (Menentukan karakteristik dan pemeriksaan besaran)
- Fungsi-fungsi lain

Contoh definisi tipe adalah:

![[Pasted image 20250920045950.png]]

![[Pasted image 20250920045957.png]]

Translasi ke Haskell:

```haskell
-- Definisi tipe
data Point = Pt Float Float
```

Pt merupakan konstruktor yang dijadikan internal representation dari tipe bentukan. Jika ingin tipe dapat ditampilkan melalui fungsi print sebagai string, tambahkan `deriving (Show)` di akhir baris

```haskell
-- Konstruktor
makePoint:: Float -> Float -> Point
makePoint x y = Pt x y
```

Di sini fungsi `makePoint` hanya sebagai wrapper atau pembungkus dari konstruktor `Pt`. Menggunakan `Pt` secara langsung juga sah-sah saja secara eksekusi.

```haskell
-- Selektor
absis:: Point -> Float
absis (Pt x _) = x

ordinat:: Point -> Float
ordinat (Pt _ y) = y
```

```haskell
-- Predikat
isOrigin:: Point -> Bool
isOrigin p = absis p == 0 && ordinat p == 0
```

Untuk lebih banyak contoh bisa melihat slide.

# Rekursif
Sebuah entitas dapat disebut rekursif jika pada definisinya terkandung terminologi dirinya sendiri. Ekspresi rekursif direalisasikan dengan membuat fungsi rekursif dan didasari analisis rekurens. 

Solusi dari sebuah permasalahan rekursif terdiri dari dua bagian, yaitu
- Basis, kasus yang menyebabkan fungsi berhenti karena jawaban sudah dapat diperoleh
- Rekurens, mengandung *call* terhadap fungsi tersebut, dengan parameter berubah nilainya menuju basis. 

Solusi rekursif memiliki sekurang-kurangnya satu kasus basis dan satu kasus rekursif. 

Kerangka fungsi rekursif untuk Pemrograman Fungsional adalah menggunakan ekspresi kondisional.

Notasi Fungsional

![[Pasted image 20250920050956.png]]

Haskell

```haskell
<fungsi> <list-parameter> = 
	if <kondisi-basis> then <ekspresi_1> -- basis
	else <fungsi> (<ekspresi_2>) -- kondisi rekurens
```

# List
Melanjutkan dari bab [[Pemrograman Fungsional#Tipe Bentukan]], sebuah tipe bentukan juga dapat berbentuk tipe rekursif. Tipe rekursif adalah tipe yang mengandung referensi terhadap dirinya sendiri. Dengan kata lain, tipe tersebut dibentuk dengan komponen yang merupakan tipenya sendiri. 

List merupakan sebuah tipe rekursif. List adalah sekumpulan elemen yang bertipe sama, atau disebut juga sequence/series. List merupakan tipe rekursif, karena
- Basis 0, list kosong adalah sebuah list
- Rekurens, list terdiri dari sebuah elemen dan sebuah sublist (di mana sublist juga bertipe list)

Dalam konstruktor, List dapat dibentuk dengan menambahkan elemen pada list di depan ataupun di belakang list.

![[Pasted image 20250920052128.png]]


Atau dalam notasi fungsionalnya:

![[Pasted image 20250920052145.png]]

Sedangkan dalam selektornya, kita tidak dapat mengambil elemen di tengah list secara langsung, kita hanya punya akses ke pada elemen pertama (dan sublist berisi sisa elemen setelahnya) atau elemen terakhir (dan sublist berisi sisa elemen sebelumnya). Untuk mengakses elemen list selain yang pertama dan terakhir, kita harus menggunakan rekursif.

Dalam notasi fungsional, selektornya adalah sebagai berikut:

| Fungsi      | Deskripsi                                                        |
| ----------- | ---------------------------------------------------------------- |
| FirstElmt() | Mengembalikan elemen pertama                                     |
| Tail()      | Mengembalikan sublist berisi semua elemen selain elemen pertama  |
| LastElmt()  | Mengembalikan elemen terakhir                                    |
| Head()      | Mengembalikan sublist berisi semua elemen selain elemen terakhir |

### Translasi ke Haskell
List dalam Haskell dinotasikan dengan `[]`. Misalkan:
- List of Integer -> `[Int]`
- List of Char -> `[Char]`

![[Pasted image 20250920053007.png]]

![[Pasted image 20250920053017.png]]

Sedangkan, untuk selektornya memiliki definisi yang berbeda dengan Notasi Fungsional. Notes: Awas terkecoh!!!

![[Pasted image 20250920053055.png]]

Terdapat beberapa operator "bawaan" untuk list dari Notasi Fungsional yang langsung dapat digunakan tanpa perlu diimplementasikan terlebih dahulu:

| Fungsi                                                        | Deskripsi                                                                |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| NbElmt: List -> integer                                       | Menghasilkan banyaknya elemen list                                       |
| isMember: elemen, List -> boolean                             | Mengecek apakah suatu elemen adalah member dari suatu list               |
| Copy: List -> List                                            | Menyalin list                                                            |
| isEqual: 2 List -> boolean                                    | Mengecek apakah l1 dan l2 memiliki elemen yang sama pada posis yang sama |
| Konkat: 2 List -> List                                        | Mengkonkatenasi l1 dengan l2, l2 di belakang l1                          |
| ElmtKeN: integer > 0, List tidak kosong -> elemen             | Mengembalikan elemen ke-N dari list                                      |
| isXElmtkeN: elemen, integer > 0, List tidak kosong -> boolean | Mengecek apakah X merupakan elemen ke N dari sebuah list                 |
