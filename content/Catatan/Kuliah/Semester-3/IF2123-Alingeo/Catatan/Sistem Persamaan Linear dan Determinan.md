# Matriks
Matriks $A$ dengan $m$ baris dan $n$ kolom, disebut juga matriks $m \times n$ dinotasikan sebagai berikut

$$
A = [a_{ij}] = 
\begin{bmatrix} 
a_{11} && a_{12} && \dots && a_{1n} \\
a_{21} && a_{22} && \dots && a_{2n} \\
\vdots && \vdots && \vdots && \vdots \\
a_{m1} && a_{m2} && \dots && a_{mn} 
\end{bmatrix}
$$

Jika matriks berukuran $m = n$, maka matriks tersebut dinamakan matriks persegi orde $n$.

Diagonal utama matriks persegi berukuran $n \times n$ adalah elemen $a_{ij}$ dengan $i = j$. Matriks $m \times n$ tidak memiliki diagonal utama.

Kegunaan matriks di bidang informatika adalah untuk representasi data, misalkan representasi graf, representasi citra digital, matriks kernel di dalam metode deep learning, serta representasi sistem persamaan linear.

## Operasi pada matriks
### Penjumlahan Matriks
Penjumlahan dua buah matriks dihitung sebagai berikut

$$
C_{m \times n} = A_{m \times n} + B_{m \times n}
$$

Misal, jika $A = [a_{ij}]$ dan $B = [b_{ij}]$, maka 

$$
C = A + B = [c_{ij}],\  c_{ij} = a_{ij} + b_{ij}
$$

dengan $i = 1, 2, \dots, m$ dan $j = 1,2, \dots, n$

Begitu juga dengan pengurangan matriks. 

### Perkalian Matriks

Perkalian dua buah matriks dihitung sebagai berikut
$$
C_{m \times n} = A_{m \times a} \times B_{a \times n}
$$
Misal, jika $A = [a_{ij}]$ dan $B = [b_{ij}]$, maka 
$$
C = A + B = [c_{ij}],\  c_{ij} = a_{i1} \cdot b_{1j} + a_{i2} \cdot b_{2j} + \dots + a_{in} \cdot b{nj}
$$ dengan $i = 1, 2, \dots, m$ dan $j = 1,2, \dots, n$. 
Syarat dari sebuah perkalian matriks adalah jumlah kolom $A$ dengan jumlah baris $B$ bernilai sama.

### Perkalian Matriks dengan Skalar

Misal, jika $A = [a_{ij}]$ dan $c$ adalah skalar, maka 
$$
c A = [c \cdot a_{ij}]
$$ dengan $i = 1, 2, \dots, m$ dan $j = 1,2, \dots, n$. 

### Kombinasi Linear

Perkalian matriks dapat dipandang sebagai kombinasi linear. Misalkan:
$$
A = 

\begin{bmatrix} 
a_{11} && a_{12} && \dots && a_{1n} \\
a_{21} && a_{22} && \dots && a_{2n} \\
\vdots && \vdots && \vdots && \vdots \\
a_{m1} && a_{m2} && \dots && a_{mn} 
\end{bmatrix} 

\textsf{ dan } X = 

\begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n} \\
\end{bmatrix}
$$
Maka, 
$$
A \cdot X = 

\begin{bmatrix} 
a_{11} \cdot x_1 + a_{12} \cdot x_2 + \dots + a_{1n} \cdot x_n \\
a_{21} \cdot x_1 + a_{22} \cdot x_2 + \dots + a_{2n} \cdot x_n \\
\vdots \qquad \qquad \vdots \qquad \qquad \qquad \vdots \\
a_{m1} \cdot x_1 + a_{m2} \cdot x_2 + \dots + a_{mn} \cdot x_n \\
\end{bmatrix} 
$$
Perhatikan bahwa tiap kolomnya sama-sama dikalikan oleh $x$ pada baris yang sama. Oleh karena itu, kita dapat merubah bentuknya menjadi perkalian skalar, seperti:

$$
A \cdot X = 
x_1 \begin{bmatrix}
a_{11} \\
a_{21} \\
\vdots \\
a_{m1} \\
\end{bmatrix}

+
x_1 \begin{bmatrix}
a_{12} \\
a_{22} \\
\vdots \\
a_{m2} \\
\end{bmatrix}

+ \cdots +
x_n \begin{bmatrix}
a_{1n} \\
a_{2n} \\
\vdots \\
a_{mn} \\
\end{bmatrix}
$$

Contoh: 
$$ AB = 
\begin{bmatrix} 1 & 2 & 4 \\ 2 & 6 & 0 \end{bmatrix} 

\begin{bmatrix} 4 & 1 & 4 & 3 \\ 0 & -1 & 3 & 1 \\ 2 & 7 & 5 & 2 \end{bmatrix}

= \begin{bmatrix} 12 & 27 & 30 & 13 \\ 8 & -4 & 26 & 12 \end{bmatrix} $$

$$ \begin{align*} 
\begin{bmatrix} 12 \\ 8 \end{bmatrix} &= 

4\begin{bmatrix} 1 \\ 2 \end{bmatrix} + 0\begin{bmatrix} 2 \\ 6 \end{bmatrix} + 2\begin{bmatrix} 4 \\ 0 \end{bmatrix} \\ \\

\begin{bmatrix} 27 \\ -4 \end{bmatrix} &=

1\begin{bmatrix} 1 \\ 2 \end{bmatrix} - 1\begin{bmatrix} 2 \\ 6 \end{bmatrix} + 7\begin{bmatrix} 4 \\ 0 \end{bmatrix} \\ \\ 

\begin{bmatrix} 30 \\ 26 \end{bmatrix} &= 
4\begin{bmatrix} 1 \\ 2 \end{bmatrix} + 3\begin{bmatrix} 2 \\ 6 \end{bmatrix} + 5\begin{bmatrix} 4 \\ 0 \end{bmatrix} \\ \\ 

\begin{bmatrix} 13 \\ 12 \end{bmatrix} &= 3\begin{bmatrix} 1 \\ 2 \end{bmatrix} + 1\begin{bmatrix} 2 \\ 6 \end{bmatrix} + 2\begin{bmatrix} 4 \\ 0 \end{bmatrix} \end{align*} $$

### Transpose Matriks

Transpose sebuah matriks dihitung sebagai berikut
$$
B = A^{T}
$$
Misal, jika $A = [a_{ij}]$ dan $B = [b_{ij}]$, maka 
$$
b_{ji} = a_{ij}
$$ dengan $i = 1, 2, \dots, m$ dan $j = 1,2, \dots, n$. 

Misalkan: 
$$
A = 

\begin{bmatrix} 
a_{11} && a_{12} && a_{13} && a_{14} \\
a_{21} && a_{22} && a_{23} && a_{24} \\
a_{31} && a_{32} && a_{33} && a_{34} \\
\end{bmatrix}

\textsf{, maka }

A^T = 
\begin{bmatrix} 
a_{11} && a_{21} && a_{31} \\
a_{12} && a_{22} && a_{32} \\
a_{13} && a_{23} && a_{33} \\
a_{14} && a_{24} && a_{34}
\end{bmatrix}
$$Transpose Matriks memilik sifat-sifat sebagai berikut:
$$
\begin{align}
	1) & \ (A^T)^T &&= A \\
	2) & \ (A + B)^T &&= A^T + B^T \\
	3) & \ (A - B)^T &&= A^T - B^T \\
	4) & \ (kA)^T &&= k \cdot A^T \\
	5) & \ (AB)^T &&= B^T \cdot A^T \\
\end{align}
$$

### Trace sebuah Matriks

Jika $A$ adalah matriks persegi, maka trace matriks $A$ (dinotasikan dengan $tr(A)$) adalah jumlah semua elemen pada diagonal utama.
$$
A = 

\begin{bmatrix} 
a_{11} && a_{12} && a_{13} \\
a_{21} && a_{22} && a_{23} \\
a_{31} && a_{32} && a_{33} \\
\end{bmatrix}
$$
Maka, $tr(A) = a_{11} + a_{22} + a_{33}$. Jika $A$ bukan matriks persegi, maka $tr(A)$ tidak terdefinisi,

### Sifat-Sifat Operasi Aritmatika Matriks

$$
\begin{align*}
(a) \quad & A+B=B+A && \text{(Commutative law for addition)} \\
(b) \quad & A+(B+C)=(A+B)+C && \text{(Associative law for addition)} \\
(c) \quad & A(BC)=(AB)C && \text{(Associative law for multiplication)} \\
(d) \quad & A(B+C)=AB+AC && \text{(Left distributive law)} \\
(e) \quad & (B+C)A=BA+CA && \text{(Right distributive law)} \\
(f) \quad & A(B-C)=AB-AC \\
(g) \quad & (B-C)A=BA-CA \\
(h) \quad & a(B+C)=aB+aC \\
(i) \quad & a(B-C)=aB-aC \\
(j) \quad & (a+b)C=aC+bC \\
(k) \quad & (a-b)C=aC-bC \\
(l) \quad & a(bC)=(ab)C \\
(m) \quad & a(BC)=(aB)C=B(aC)
\end{align*}
$$
### Matriks Nol

Matriks nol adalah matriks yang seluruh elemennya bernilai 0. Matriks nol dilambangkan dengan 0. 
$$
\begin{bmatrix}
0 && 0 \\
0 && 0 \\
\end{bmatrix},

\begin{bmatrix}
0 && 0 && 0 \\
0 && 0 && 0 \\
0 && 0 && 0 \\
\end{bmatrix},

\begin{bmatrix}
0 && 0 && 0 \\
0 && 0 && 0 \\
\end{bmatrix},

\begin{bmatrix}
0
\end{bmatrix}
$$
Sifat-sifat matriks nol adalah: 
$$
\begin{align*}
(a) \quad & A + 0 = 0 + A = A \\
(b) \quad & A - 0 = A \\
(c) \quad & A - A = A + (-A) = 0  \\
(d) \quad & 0A = 0 \\
(e) \quad & cA = 0 \implies c = 0 \text{ or } A = 0
\end{align*}
$$

### Matriks Identitas

Matriks Identitas adalah matriks persegi yang semua elemen bernilai 1 pada diagonal utamanya dan bernilai 0 pada posisi lainnya
$$
\begin{bmatrix}
1 && 0 \\
0 && 1 \\
\end{bmatrix},

\begin{bmatrix}
1 && 0 && 0 \\
0 && 1 && 0 \\
0 && 0 && 1 \\
\end{bmatrix},

\begin{bmatrix}
1 && 0 && 0 && 0 \\
0 && 1 && 0 && 0 \\
0 && 0 && 1 && 0 \\
0 && 0 && 0 && 1 \\
\end{bmatrix},

\begin{bmatrix}
1
\end{bmatrix}
$$
Matriks Identitas disimbolkan dengan I.

Matriks identitas memiliki sifat, yaitu $AI = IA = A$

### Matriks Balikan

Matriks Balikan (invers) dari sebuah matriks A adalah matriks B sedemikian sehingga
$$
AB = BA = I
$$

Matriks balikan memiliki sifat, yaitu $A \cdot A^{-1} = A^{-1} \cdot A = I$. Untuk matriks $A$ berukuran $2 \times 2$, maka $A^{-1}$ dihitung sebagai berikut:
$$
A = 
\begin{bmatrix}
a && b \\
c && d \\
\end{bmatrix} \implies 

A^{-1} = \frac{1}{ad-bc} \cdot 
\begin{bmatrix}
d && -b \\
-c && a \\
\end{bmatrix}
$$
dengan syarat $D \ne 0$. $D = ad - bc$. Jika $D = 0$, maka matriks tidak memiliki balikan dan dinamakan matriks singular.


# Matriks Eselon Baris

Matriks eselon baris (*row echelon form*) adalah matriks yang memilik 1 utama (*leading one*) pada setiap baris, kecuali pada baris yang seluruhnya nol.

Matriks eselon baris berbentuk:
$$
\begin{bmatrix}
1 && * && * \\
0 && 1 && * \\
0 && 0 && 1 \\
\end{bmatrix},

\begin{bmatrix}
1 && * && * && * \\
0 && 0 && 1 && * \\
0 && 0 && 0 && 1 \\
0 && 0 && 0 && 0 \\
\end{bmatrix},

\begin{bmatrix}
0 && 1 && * && * && * \\
0 && 0 && 0 && 1 && * \\
0 && 0 && 0 && 0 && 0 \\
0 && 0 && 0 && 0 && 0 \\
\end{bmatrix}
$$
Keterangan: * adalah sembarang nilai

Sifat-sifat matriks eselon baris:
1. Jika sebuah baris tidak terdiri dari seluruhnya nol, maka bilangan tidak nol pertama di dalam baris tersebut adalah 1 (disebut **1 utama**)
2. Jika ada baris yang seluruhnya nol, maka semua baris itu dikumpulkan pada bagian bawah matriks
3. Di dalam dua baris berturutan yang tidak seluruhnya nol, maka 1 utama pada baris yang lebih rendah terdapat lebih jauh ke kanan daripada 1 utama pada baris yang lebih tinggi

Ciri-ciri matriks eselon baris: memiliki semua nilai nol pada kolom di bawah 1 utama.

## Matriks Eselon Baris Tereduksi

Matriks eselon baris tereduksi (*reduce row echelon*) berbentuk:
$$
\begin{bmatrix}
1 && * && 0 && 0 \\
0 && 0 && 1 && 0 \\
0 && 0 && 0 && 1 \\
0 && 0 && 0 && 0 \\
\end{bmatrix},

\begin{bmatrix}
0 && 1 && 0 && 0 && * \\
0 && 0 && 1 && 0 && * \\
0 && 0 && 0 && 1 && * \\
0 && 0 && 0 && 0 && 0 \\
\end{bmatrix}, \textsf{ dst}
$$
Ciri-ciri matriks eselon baris tereduksi: memiliki semua nilai nol pada kolo di bawah dan di atas 1 utama.

Sifat-sifat matriks eselon baris tereduksi sama seperti matris eselon baris, tetapi dengan tambahan:
4. Setiap kolom yang memiliki 1 utama memiliki nol di tempat lain

# Sistem Persamaan Linear (SPL)

## Bentuk Umum SPL

Linear dalam SPL berarti pangkat tertinggi di dalam variabelnya sama dengan 1. Sebuah SPL dengan $m$ buah persamaan dan $n$ variabel $x_1, x_2, \dots, x_n$ berbentuk:
$$
\begin{align}
a_{11} \cdot x_{1} + a_{12} \cdot x_{2} + \cdots + a_{1n} \cdot x_{n} &= b_1  \\

a_{21} \cdot x_{1} + a_{22} \cdot x_{2} + \cdots + a_{2n} \cdot x_{n} &= b_{2} \\

\vdots \qquad \qquad \vdots \qquad \qquad \qquad \vdots \qquad  & \quad \enspace \vdots \\

a_{m1}\cdot x_{1} + a_{m2} \cdot x_{2} + \cdots + a_{mn} \cdot x_{n} &= b_{m} \\

\end{align}
$$
SPL dapat ditulis dalam bentuk matriks sebagai berikut.
$$
\begin{bmatrix}
a_{11} \cdot x_{1} + a_{12} \cdot x_{2} + \cdots + a_{1n} \cdot x_{n} \\

a_{21} \cdot x_{1} + a_{22} \cdot x_{2} + \cdots + a_{2n} \cdot x_{n} \\

\vdots \qquad \qquad \vdots \qquad \qquad \qquad \vdots \qquad \\

a_{m1}\cdot x_{1} + a_{m2} \cdot x_{2} + \cdots + a_{mn} \cdot x_{n} \\
\end{bmatrix} =

\begin{bmatrix}
b_{1} \\
b_{2} \\
\vdots \\
b_{m} \\
\end{bmatrix}
$$
atau dalam bentuk perkalian matrik $Ax = b$
$$
\begin{bmatrix}
a_{11} && a_{12} && \cdots && a_{1n} \\
a_{21} && a_{22} && \cdots && a_{2n} \\
\vdots && \vdots && && \vdots \\
a_{m1} && a_{m2} && \cdots && a_{mn} \\
\end{bmatrix}

\begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{m} \\
\end{bmatrix}

= 

\begin{bmatrix}
b_{1} \\
b_{2} \\
\vdots \\
b_{m} \\
\end{bmatrix}
$$

## Matriks Augmented

SPL dapat dinyatakan secara ringkas dalam bentuk matriks *augmented*:
$$
\begin{bmatrix}
A | b
\end{bmatrix} = 

\begin{bmatrix}
a_{11} && a_{12} && \cdots && a_{1n} && | && b_1\\
a_{21} && a_{22} && \cdots && a_{2n} && | && b_2\\
\vdots && \vdots && && \vdots && | && \vdots\\
a_{m1} && a_{m2} && \cdots && a_{mn} && | && b_m \\
\end{bmatrix}
$$
\*Tidak wajib ada garis antara $A$ dan $b$, karena diketahui bahwa kolom paling kanan pasti merupakan $b$ atau hasil dari persamaan linear.

Contoh: 
$$
\begin{align}
x_1 + 3x_2 - 6x_3 &= 9 \\
2x_1 - 6x_2 + 4x_3&= 7 \\
5x_1 + 2x_2 - 5x_3 &= -2 \\
\end{align} \implies 

\begin{bmatrix}
1 && 3 && -6 && 9 \\
2 && -6 && 4 && 7 \\
5 && 2 && -5 && -2 \\
\end{bmatrix}
$$

## Operasi Baris Elementer (OBE)
Solusi sebuah SPL diperoleh dengan menerapkan OBE pada matriks *augmented* sampai terbentuk matriks eselon baris atau matriks eselon baris tereduksi.

Tiga operasi baris elementer yang legal terhadap matriks *augmented* adalah
1. Kalikan sebuah baris dengan konstanta tidak nol
2. Pertukarkan dua buah baris
3. Tambahkan sebuah baris dengan kelipatan baris lainnya

Jika berakhir para matriks eselon baris, maka metodenya dinamakan metode eliminasi Gauss. Jika berakhir pada matriks eselon baris tereduksi, maka dinamakan metode eliminasi Gauss-Jordan.

## Metode Eliminasi Gauss
Metode eliminasi Gauss dapat digunakan dengan cara:
1. Nyatakan SPL dalam bentuk dalam bentuk matriks *augmented*
2. Terapkan OBE pada matrik *augmented* sampai terbentuk matriks eselon baris
$$
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & b_2 \\
\vdots & \vdots & & \vdots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & b_n
\end{bmatrix}

\overset{\text{OBE}}\sim

\begin{bmatrix}
1 & * & * & \dots & * & * \\
0 & 1 & * & \dots & * & * \\
\vdots & \vdots & \vdots & & \vdots & \vdots \\
0 & 0 & 0 & \dots & 1 & *
\end{bmatrix}
$$
3. Selesaikan persamaan yang berkoresponden pada matriks eselon baris dengan teknik penyulihan mundur (*backward substitusion*)

### Kemungkinan Solusi SPL
Ada tiga kemungkinan solusi yang dapat terjadi pada SPL:
1. mempunyai solusi yang unik/tunggal (seluruh persamaan linear berpotongan tepat di satu titik), 
2. mempunyai banyak/tak hingga solusi (seluruh persamaan linear berpotongan di satu garis/bidang), atau
3. tidak memiliki solusi sama sekali (seluruh persamaan linear tidak berpotongan)

Bentuk akhir matriks setelah eliminasi Gauss untuk ketiga kemungkinan solusi SPL $Ax = b$ dapat digambarkan sebagai berikut
![[Pasted image 20250921013444.png]]

## Metode Eliminasi Gauss-Jordan
Metode ini merupakan pengembangan dari metode eliminasi Gauss. OBE diterapkan pada matriks *augmented* sampai menghasilkan matriks eselon baris tereduksi.
$$
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & b_2 \\
\vdots & \vdots & & \vdots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & b_n
\end{bmatrix}

\overset{\text{OBE}}\sim

\begin{bmatrix}
1 & 0 & 0 & \dots & 0 & * \\
0 & 1 & 0 & \dots & 0 & * \\
\vdots & \vdots & \vdots & & \vdots & \vdots \\
0 & 0 & 0 & \dots & 1 & *
\end{bmatrix}
$$
Pada metode ini, tidak diperlukan lagi substitusi secara mundur untuk memperoleh nilai-nilai variabel. Nilai variabel langsung diperoleh dari matriks *augmented* akhir (jika solusinya unik).

Metode eliminasi Gauss-Jordan terdiri dari dua fase.
1. Fase maju (*forward phase*) atau fase eliminasi Gauss, yaitu menghaslkan nilai-nilai 0 di bawah 1 utama.
2. Fase mundur (*backward phase*), yaitu menghasilkan nilai-nilai 0 di atas satu utama.
Kedua fased apat dilakukan secara bersamaan atau sekuensial.

## Sistem Persamaan Linear Homogen
Sistem persamaan linear homogen berbentuk
$$
\begin{align}
a_{11} \cdot x_{1} + a_{12} \cdot x_{2} + \cdots + a_{1n} \cdot x_{n} &= 0  \\

a_{21} \cdot x_{1} + a_{22} \cdot x_{2} + \cdots + a_{2n} \cdot x_{n} &= 0 \\

\vdots \qquad \qquad \vdots \qquad \qquad \qquad \vdots \qquad  & \quad \enspace \vdots \\

a_{m1}\cdot x_{1} + a_{m2} \cdot x_{2} + \cdots + a_{mn} \cdot x_{n} &= 0 \\

\end{align}
$$
SPL homogen selalu memiliki solusi $x_1 = 0, x_2 = 0, \cdots, x_n = 0$. Jika ini merupakan satu-satunya solusi, solusi nol ini disebut solusi trivial. Jika ada solusi lain selain solusi nol, maka solusi tersebut dinamakan solusi non-trivial.

Di dalam sebuah SPL sembarang $Ax = b$, sebuah SPL disebut konsisten jika ia mempunyai paling sedikit satu solusi (baik solusi tunggal atau solusi banyak). Sebaliknya, sebuah SPL disebut inkonsisten jika ia tidak memiliki solusi.

SPL homogen $Ax = 0$ selalu konsisten karena ia sedikitnya mengandung solusi trivial. Jadi, di dalam SPL homogen berlaku salah satu sifat sebagai berikut:
1. SPL homogen memiliki solusi trivial
2. SPL homogen memiliki tak berhingga solusi

## Menghitung Matriks Balikan
Salah satu cara untuk menghitung matriks balikan dari sebuah matriks persegi $A$ berukuran $n \times n$ adalah menggunakan metode eliminasi Gauss-Jordan (G-J). Balikan matriks $A$ adalah $A^{-1}$ sedemikian sehingga $A \cdot A^{-1} = A^{-1} \cdot A = I$. Matriks balikan dapat dicari dengan cara berikut:
$$
\begin{bmatrix}
A | I
\end{bmatrix}

\overset{G-J}\sim
\begin{bmatrix}
I | A^{-1}
\end{bmatrix}
$$
yang dalam hal ini $I$ adalah matriks identitas berukuran $n \times n$. Metode eliminasi Gauss-Jordan diterapkan secara simultan untuk $A$ maupun $I$.

A memiliki balikan, jika SPL $Ax = b$ solusi unik. Sebaliknya, jika SPL$Ax = b$ tidak memiliki solusi unik, maka A tidak punya balikan (dinamakan **matriks singular**).

Pada SPL homogen $Ax = 0$, SPL hanya memiliki solusi trivial, jika A memiliki balikan. Jika A tidak memiliki balikan, maka SPL memiliki solusi non-trivial. 

### Penyelesaian SPL dengan Matriks Balikan
Misalkan ada SPL $Ax =b$.
$$
\begin{align}
Ax &= b \qquad (\times A^{-1}) \\
(A^{-1}A) &= (A^{-1})b \\
Ix &= A^{-1}b \\
x &= A^{-1}b \\
\end{align}
$$

Jadi solusi dari SPL $Ax = b$ adalah $x = A^{-1} b$.

Metode ini dapat digunakan ketika ingin mencari sejumlah SPL $Ax = b$ dengan $A$ yang sama, tetapi $b$ yang berbeda-beda. Untuk kasus ini, cukup sekali mencari $A^{-1}$ dan setiap SPL dapat dihitung dengan mengalikan $A^{-1}$ pada setiap $b$.

## Aplikasi Metode Eliminasi Gauss di dalam Metode Numerik
Metode numerik adalah cara yang sistematis untuk menyelesaikan persoalan matematika dengan operasi aritmatika ($+, -, *, /$) pada angka.

Dalam persoalan matematika, dapat diselesaikan dengan dua cara:
1. Secara analitik, yaitu penyelesaian yang solusinya eksak (tepat)
2. Secara numerik, yaitu penyelesaian yang solusinya berupa hampiran (aproksimasi)

Penyelesaian secara analitik menggunakan rumus dan teorema yang sudah baku di dalam matematika. Sedangkan, penyelesaian secara numerik menggunakan pendekatan aproksimasi untuk mencari solusi hanya dengan operasi aritmatika biasa.

Solusi dengan metode numerik adalah solusi hampiran terhadap solusi eksak. Oleh karena itu, solusi numerik mengandung galat. Galat ($\epsilon = a - \hat{a}$) adalah perbedaan antara solusi eksak dengan solusi hampiran.

### Interpolasi
Salah satu persoalan di dalam metode numerik adalah interpolasi. Persoalan interpolasi adalah sebagai berikut.

Diberikan $n + 1$ buah titik berbeda, $(x_0, y_0), (x_1, y_1), \cdots, (x_n, y_n)$. Tentukan persamaan polinom $p_n(x)$ yang melalui semua titik-titik tersebut sdemikian sehingga $y_i = p_n(x_i)$ untuk $i = 0, 1, 2, \cdots, n$.

Setelah polinom interpolasi $p_n(x)$ ditemukan, maka $p_n(x)$ dapat digunakan untuk menghitung perkiraan nilai $y$ pada $x = a$, yaitu $y = p_n(a)$.

Solusi dari polinom interpolasi derajat $n$ yang melalui titik-titik $(x_0, y_0), (x_1, y_1), \cdots, (x_n, y_n)$ adalah
$$
p_n(x) = a_0 + a_1 \cdot x + a_2 \cdot x^2 + \cdots + a_n \cdot x^n
$$
#### Interpolasi Linear
Interpolasi linear adalah menginterpolasi dua buah titik dengan sebuah persamaan garis lurus. Misalkan diberikan dua buah titik $(x_0, y_0)$ dan $(x_1, y_1)$. Polinom yang menginterpolasi kedua titik itu adalah
$$
p_1(x) = a_0 + a_1 \cdot x
$$
Sulihkan kedua titik $(x_0, y_0)$ dan $(x_1, y_1)$ ke dalam $p_1(x)$, Lalu, pecahkan SPL ini dengan metode eliminasi Gauss atau Gauss-Jordan.

#### Interpolasi Kuadrat
Misalkan diberikan tiga buah titik $(x_0, y_0)$, $(x_1, y_1)$, dan $(x_2, y_2)$. Polinom yang menginterpolasi ketiga buah titik itu adalah polinom kuadrat yang berbentuk
$$
p_2(x) = a_0 + a_1 \cdot x + a_2 \cdot x^2
$$
Sulihkan ketiga titik $(x_0, y_0)$, $(x_1, y_1)$, dan $(x_2, y_2)$ ke dalam $p_2(x)$. Dari sini diperoleh tiga buah persamaan dengan tiga buah parameter yang tidak diketahui, yaitu $a_0$, $a_1$, dan $a_2$. Lalu, pecahkan SPL ini dengan metode eliminasi Gauss atau Gauss-Jordan.

#### Interpolasi Kubik
Misalkan diberikan empat buah titik $(x_0, y_0)$, $(x_1, y_1)$, $(x_2, y_2)$, dan $(x_3, y_3)$. Polinom yang menginterpolasi keempat buah titik itu adalah polinom kubik yang berbentuk
$$
p_2(x) = a_0 + a_1 \cdot x + a_2 \cdot x^2 + a_3 \cdot x^3
$$
Sulihkan keempat titik ke dalam $p_3(x)$. Dari sini diperoleh tiga buah persamaan dengan tiga buah parameter yang tidak diketahui, yaitu $a_0$, $a_1$, $a_2$, dan $a_3$. Lalu, pecahkan SPL ini dengan metode eliminasi Gauss atau Gauss-Jordan.

### Regresi
Regresi adalah teknik pencocokan kurva untuk data yang berketelitian rendah. Untuk data hasil pengukuran, pencocokan kurva berarti membuat fungi hampiran titik-titik data. Kurva fungsi hampiran tidak perlu melalui semua titik data, tetapi dekat dengannya tanpa perlu menggunakan polinom berderajat tinggi.

Prinsip penting yang harus diketahui dalam mencocokkan kurva untuk data hasil pengukuran adalah:
1. Fungsi mengandung sesedikit mungkin parameter bebas
2. Deviasi fungsi dengan titik data dibuat minimum

Kedua prinsip di atas mendasari metode regresi kuadrat terkecil.

#### Regresi Linear
TODO

## Determinan
Misalkan $A$ adalah matriks berukuran $n \times n$.
$$
A = [a_{ij}] = \begin{bmatrix} 
a_{11} && a_{12} && \dots && a_{1n} \\
a_{21} && a_{22} && \dots && a_{2n} \\
\vdots && \vdots && \vdots && \vdots \\
a_{n1} && a_{n2} && \dots && a_{nn} 
\end{bmatrix}
$$
Determinan matriks A dilambangkan dengan
$$
det(A) = A = [a_{ij}] = 

\begin{vmatrix} 
a_{11} && a_{12} && \dots && a_{1n} \\
a_{21} && a_{22} && \dots && a_{2n} \\
\vdots && \vdots && \vdots && \vdots \\
a_{n1} && a_{n2} && \dots && a_{nn} 
\end{vmatrix}
$$
Untuk matriks $A$ berukuran $2 \times 2$ sebagai berikut
$$
A = 
\begin{bmatrix}
a_{11} && a_{12} \\
a_{21} && a_{22} \\
\end{bmatrix}
$$
maka $det(A) = a_{11} \cdot a_{22} - a_{12} \cdot a_{21}$ 

Untuk matriks $A$ berukuran $3 \times 3$ sebagai berikut
$$
A =
\begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33}
\end{bmatrix}
$$

maka 
$$
\begin{align*}
\det(A) = (a_{11} \cdot a_{22} \cdot a_{33} + a_{12} \cdot a_{21} \cdot a_{31} + a_{13}\cdot a_{21} \cdot a_{32}) \\

- (a_{13} \cdot a_{22} \cdot a_{31} + a_{11} \cdot a_{23} \cdot a_{32} + a_{12} \cdot a_{21} \cdot a_{33})
\end{align*}
$$


Sedangkan untuk matriks segitiga, determinannya adalah
$$
\det(A) = a_{11} \times a_{22} \times \dots \times a_{nn}
$$
Matriks segitiga adalah matriks yang semua elemen di bawah/atas diagonal utama adalah nol.

### Aturan Determinan
Misalkan $A$ adalah matriks $n \times n$. Matriks $B$ adalah matriks yang diperoleh dengan memanipulasi matriks $A$. Maka, determinan $B$ memiliki hubungan dengan determinan $A$ sebagai berikut.
1. Jika sebuah baris dikalikan dengan skala $k$, maka $\det(B) = k \cdot \det(A)$
2. Jika dua baris dipertukarkan, maka $\det(B) = - \det(A)$
3. Jika sebuah baris ditambahkan dengan $k$ kali baris yang lain, maka $\det(B) = \det(A)$

