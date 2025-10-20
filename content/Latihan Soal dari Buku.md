Tentu, berikut adalah kumpulan semua soal "True-False Exercises" dari Bab 1 hingga Bab 4 buku *Elementary Linear Algebra* (Howard Anton & Chris Rorres, Edisi ke-10) yang Anda berikan, beserta jawaban dan penjelasan singkat berdasarkan buku tersebut.

**Catatan:** Buku ini di bagian kunci jawaban hanya memberikan jawaban "True" atau "False". Penjelasan yang lebih mendalam mengenai mengapa suatu pernyataan benar atau salah diharapkan dari pembaca sebagai latihan.

---

## Exercise Set 1.1

(a) Sistem linear yang semua persamaannya homogen pasti konsisten.
[cite_start]**Answer:** True [cite: 1901]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Sistem homogen selalu memiliki solusi trivial x=0).

(b) Mengalikan persamaan linear dengan nol adalah operasi baris elementer yang dapat diterima.
[cite_start]**Answer:** False [cite: 1902]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Operasi baris elementer mensyaratkan pengali tak-nol).

(c) Sistem linear $x-y=3$, $2x-2y=k$ tidak mungkin memiliki solusi unik, terlepas dari nilai k.
[cite_start]**Answer:** True [cite: 1904]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Persamaan kedua adalah kelipatan dari yang pertama; garisnya sejajar atau berimpit).

(d) Satu persamaan linear dengan dua atau lebih variabel yang tidak diketahui harus selalu memiliki tak hingga banyaknya solusi.
[cite_start]**Answer:** True [cite: 1905]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Selalu ada variabel bebas).

(e) Jika jumlah persamaan dalam sistem linear melebihi jumlah variabel yang tidak diketahui, maka sistem tersebut pasti tidak konsisten.
[cite_start]**Answer:** False [cite: 1906]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Bisa saja konsisten, contohnya sistem dengan persamaan redundant).

(f) Jika setiap persamaan dalam sistem linear yang konsisten dikalikan dengan konstanta c, maka semua solusi sistem baru dapat diperoleh dengan mengalikan solusi dari sistem asli dengan c.
[cite_start]**Answer:** False [cite: 1907]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini hanya berlaku jika c ≠ 0 dan sistemnya homogen).

(g) Operasi baris elementer mengizinkan satu persamaan dalam sistem linear dikurangkan dari persamaan lain.
[cite_start]**Answer:** True [cite: 1908]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini sama dengan menambahkan kelipatan -1 dari satu persamaan ke persamaan lain).

(h) Sistem linear dengan matriks augmented yang bersesuaian $[\begin{smallmatrix}2 & -1 & 4 \\ 0 & 0 & -1\end{smallmatrix}]$ adalah konsisten.
[cite_start]**Answer:** False [cite: 1910]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Baris terakhir menyatakan 0x + 0y = -1, yang tidak mungkin).

---

## Exercise Set 1.2

(a) Jika sebuah matriks dalam bentuk eselon baris tereduksi, maka matriks tersebut juga dalam bentuk eselon baris.
[cite_start]**Answer:** True [cite: 2148]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Bentuk eselon baris tereduksi memenuhi semua kriteria bentuk eselon baris).

(b) Jika operasi baris elementer diterapkan pada matriks yang dalam bentuk eselon baris, matriks yang dihasilkan akan tetap dalam bentuk eselon baris.
[cite_start]**Answer:** False [cite: 2149]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: menambahkan kelipatan baris bawah ke baris atas dapat merusak properti nol di bawah leading 1).

(c) Setiap matriks memiliki bentuk eselon baris yang unik.
[cite_start]**Answer:** False [cite: 2150]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Bentuk eselon baris *tereduksi* yang unik, bukan bentuk eselon baris biasa).

(d) Sistem linear homogen dalam n variabel yang matriks augmentednya memiliki bentuk eselon baris tereduksi dengan r buah leading 1 memiliki $n-r$ variabel bebas.
[cite_start]**Answer:** True [cite: 2151]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jumlah variabel dikurangi jumlah leading variable adalah jumlah free variable).

(e) Semua leading 1 dalam matriks bentuk eselon baris harus terletak di kolom yang berbeda.
[cite_start]**Answer:** True [cite: 2152]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah bagian dari definisi bentuk eselon baris).

(f) Jika setiap kolom dari matriks bentuk eselon baris memiliki leading 1, maka semua entri yang bukan leading 1 adalah nol.
[cite_start]**Answer:** False [cite: 2153]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini hanya berlaku untuk bentuk eselon baris *tereduksi*).

(g) Jika sistem linear homogen dari n persamaan dalam n variabel memiliki matriks augmented yang bersesuaian dengan bentuk eselon baris tereduksi yang mengandung n leading 1, maka sistem linear tersebut hanya memiliki solusi trivial.
[cite_start]**Answer:** True [cite: 2154]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Bentuk eselon baris tereduksinya adalah $I_n$, sehingga $x=0$ adalah satu-satunya solusi).

(h) Jika bentuk eselon baris tereduksi dari matriks augmented untuk sistem linear memiliki satu baris nol, maka sistem tersebut harus memiliki tak hingga banyaknya solusi.
[cite_start]**Answer:** False [cite: 2155]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Sistem bisa jadi tidak konsisten jika ada baris [0 0 ... | 1]).

(i) Jika sistem linear memiliki lebih banyak variabel daripada persamaan, maka sistem tersebut harus memiliki tak hingga banyaknya solusi.
[cite_start]**Answer:** False [cite: 2156]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Sistem tersebut bisa jadi tidak konsisten).

---

## Exercise Set 1.3

(a) Matriks $[\begin{smallmatrix}1 & 2 & 3 \\ 4 & 5 & 6\end{smallmatrix}]$ tidak memiliki diagonal utama.
[cite_start]**Answer:** True [cite: 2380]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Diagonal utama hanya didefinisikan untuk matriks persegi).

(b) Matriks $m \times n$ memiliki m vektor kolom dan n vektor baris.
[cite_start]**Answer:** False [cite: 2381]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Memiliki n vektor kolom dan m vektor baris).

(c) Jika A dan B adalah matriks $2 \times 2$, maka $AB=BA$.
[cite_start]**Answer:** False [cite: 2382]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Perkalian matriks pada umumnya tidak komutatif).

(d) Vektor baris ke-i dari perkalian matriks AB dapat dihitung dengan mengalikan A dengan vektor baris ke-i dari B.
[cite_start]**Answer:** False [cite: 2383]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Vektor baris ke-i dari AB adalah vektor baris ke-i dari A dikalikan B).

(e) Untuk setiap matriks A, berlaku $(A^T)^T=A$.
[cite_start]**Answer:** True [cite: 2385]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Mentranspos dua kali mengembalikan ke matriks asli).

(f) Jika A dan B adalah matriks persegi dengan ordo yang sama, maka $tr(AB)=tr(A)tr(B)$.
[cite_start]**Answer:** False [cite: 2386]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Tidak ada properti seperti ini untuk trace).

(g) Jika A dan B adalah matriks persegi dengan ordo yang sama, maka $(AB)^T=A^TB^T$.
[cite_start]**Answer:** False [cite: 2387]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Properti yang benar adalah $(AB)^T=B^TA^T$).

(h) Untuk setiap matriks persegi A, berlaku $tr(A^T)=tr(A)$.
[cite_start]**Answer:** True [cite: 2388]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Diagonal utama tidak berubah saat ditranspos).

(i) Jika A adalah matriks $6 \times 4$ dan B adalah matriks $m \times n$ sedemikian sehingga $B^TA^T$ adalah matriks $2 \times 6$, maka $m=4$ dan $n=2$.
[cite_start]**Answer:** True [cite: 2389]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Dimensi harus cocok: $B^T$ adalah $n \times m$, $A^T$ adalah $4 \times 6$. Agar $B^TA^T$ terdefinisi, $m=4$. Hasilnya berukuran $n \times 6$. Karena hasilnya $2 \times 6$, maka $n=2$).

(j) Jika A adalah matriks $n \times n$ dan c adalah skalar, maka $tr(cA)=c \cdot tr(A)$.
[cite_start]**Answer:** True [cite: 2390]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Trace adalah jumlah elemen diagonal, dan setiap elemen diagonal dikalikan c).

(k) Jika A, B, dan C adalah matriks dengan ukuran yang sama sedemikian sehingga $A-C=B-C$, maka $A=B$.
[cite_start]**Answer:** True [cite: 2392]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Tambahkan C ke kedua sisi).

(l) Jika A, B, dan C adalah matriks persegi dengan ordo yang sama sedemikian sehingga $AC=BC$, maka $A=B$.
[cite_start]**Answer:** False [cite: 2393]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini hanya berlaku jika C invertibel).

(m) Jika $AB+BA$ terdefinisi, maka A dan B adalah matriks persegi dengan ukuran yang sama.
[cite_start]**Answer:** True [cite: 2394]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Agar AB dan BA terdefinisi dan dapat dijumlahkan, A dan B harus persegi dan berukuran sama).

(n) Jika B memiliki satu kolom nol, maka AB juga demikian jika perkalian ini terdefinisi.
[cite_start]**Answer:** True [cite: 2395]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Kolom ke-j dari AB adalah A dikalikan kolom ke-j dari B. Jika kolom ke-j dari B adalah nol, hasilnya adalah vektor nol).

(o) Jika B memiliki satu kolom nol, maka BA juga demikian jika perkalian ini terdefinisi.
[cite_start]**Answer:** False [cite: 2396]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Perkalian dari kiri oleh B tidak menjamin kolom nol).

---

## Exercise Set 1.4

(a) Dua matriks $n \times n$, A dan B, adalah invers satu sama lain jika dan hanya jika $AB=BA=0$.
[cite_start]**Answer:** False [cite: 2559]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Definisi invers adalah $AB=BA=I$).

(b) Untuk semua matriks persegi A dan B dengan ukuran yang sama, berlaku $(A+B)^2=A^2+2AB+B^2$.
[cite_start]**Answer:** False [cite: 2560]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini hanya berlaku jika AB=BA, karena $(A+B)^2 = A^2+AB+BA+B^2$).

(c) Untuk semua matriks persegi A dan B dengan ukuran yang sama, berlaku $A^2-B^2=(A-B)(A+B)$.
[cite_start]**Answer:** False [cite: 2561]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini hanya berlaku jika AB=BA, karena $(A-B)(A+B) = A^2+AB-BA-B^2$).

(d) Jika A dan B adalah matriks invertibel dengan ukuran yang sama, maka AB invertibel dan $(AB)^{-1}=A^{-1}B^{-1}$.
[cite_start]**Answer:** False [cite: 2562]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Properti yang benar adalah $(AB)^{-1}=B^{-1}A^{-1}$).

(e) Jika A dan B adalah matriks sedemikian sehingga AB terdefinisi, maka berlaku $(AB)^T=A^TB^T$.
[cite_start]**Answer:** False [cite: 2563]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Properti yang benar adalah $(AB)^T=B^TA^T$).

(f) Matriks $A=[\begin{smallmatrix}a & b \\ c & d\end{smallmatrix}]$ invertibel jika dan hanya jika $ad-bc \ne 0$.
[cite_start]**Answer:** True [cite: 2565]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah kondisi determinan tak-nol untuk matriks 2x2).

(g) Jika A dan B adalah matriks dengan ukuran yang sama dan k adalah konstanta, maka $(kA+B)^T=kA^T+B^T$.
[cite_start]**Answer:** True [cite: 2566]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Properti transpos penjumlahan dan perkalian skalar).

(h) Jika A adalah matriks invertibel, maka $A^T$ juga demikian.
[cite_start]**Answer:** True [cite: 2567]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Invers dari $A^T$ adalah $(A^{-1})^T$).

(i) Jika $p(x)=a_0+a_1x+a_2x^2+\dots+a_mx^m$ dan I adalah matriks identitas, maka $p(I)=a_0+a_1+a_2+\dots+a_m$.
[cite_start]**Answer:** False [cite: 2569]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". ($p(I)=a_0I+a_1I+a_2I^2+\dots+a_mI^m = (a_0+a_1+\dots+a_m)I$).

(j) Matriks persegi yang mengandung baris atau kolom nol tidak mungkin invertibel.
[cite_start]**Answer:** True [cite: 2570]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Determinannya akan nol).

(k) Jumlah dua matriks invertibel dengan ukuran yang sama haruslah invertibel.
[cite_start]**Answer:** False [cite: 2571]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: I + (-I) = 0, yang tidak invertibel).

---

## Exercise Set 1.5

(a) Hasil kali dua matriks elementer dengan ukuran yang sama haruslah matriks elementer.
[cite_start]**Answer:** False [cite: 2658]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Hasil kalinya bisa jadi bukan representasi dari *satu* operasi baris elementer).

(b) Setiap matriks elementer invertibel.
[cite_start]**Answer:** True [cite: 2659]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Setiap operasi baris elementer dapat dibatalkan oleh operasi baris elementer lain).

(c) Jika A dan B ekuivalen baris, dan jika B dan C ekuivalen baris, maka A dan C ekuivalen baris.
[cite_start]**Answer:** True [cite: 2660]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Relasi ekuivalen baris bersifat transitif).

(d) Jika A adalah matriks $n \times n$ yang tidak invertibel, maka sistem linear $Ax=0$ memiliki tak hingga banyaknya solusi.
[cite_start]**Answer:** True [cite: 2661]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Sistem homogen $Ax=0$ selalu konsisten. Jika A tidak invertibel, pasti ada variabel bebas, sehingga solusinya tak hingga banyak).

(e) Jika A adalah matriks $n \times n$ yang tidak invertibel, maka matriks yang diperoleh dengan menukar dua baris A tidak mungkin invertibel.
[cite_start]**Answer:** True [cite: 2662]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Menukar baris mengalikan determinan dengan -1. Jika det(A)=0, maka determinan matriks baru juga 0).

(f) Jika A invertibel dan kelipatan baris pertama A ditambahkan ke baris kedua, maka matriks yang dihasilkan invertibel.
[cite_start]**Answer:** True [cite: 2662]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Operasi baris elementer tidak mengubah invertibilitas).

(g) Ekspresi matriks invertibel A sebagai hasil kali matriks elementer adalah unik.
[cite_start]**Answer:** False [cite: 2662]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Urutan operasi baris elementer bisa berbeda).

---

## Exercise Set 1.6

(a) Tidak mungkin sistem persamaan linear memiliki tepat dua solusi.
[cite_start]**Answer:** True [cite: 2686]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Setiap sistem linear memiliki nol, satu, atau tak hingga solusi).

(b) Jika sistem linear $Ax=0$ memiliki solusi unik, maka sistem linear $Ax=b$ juga harus memiliki solusi unik.
[cite_start]**Answer:** True [cite: 2686]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika $Ax=0$ hanya punya solusi trivial, A invertibel. Jika A invertibel, $Ax=b$ punya solusi unik $x=A^{-1}b$).

(c) Jika A dan B adalah matriks $n \times n$ sedemikian sehingga $AB=I_n$, maka $BA=I_n$.
[cite_start]**Answer:** True [cite: 2686]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah salah satu properti matriks invertibel).

(d) Jika A dan B adalah matriks ekuivalen baris, maka sistem linear $Ax=0$ dan $Bx=0$ memiliki himpunan solusi yang sama.
[cite_start]**Answer:** True [cite: 2686]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Operasi baris elementer tidak mengubah himpunan solusi).

(e) Jika A adalah matriks $n \times n$ dan S adalah matriks $n \times n$ yang invertibel, maka jika x adalah solusi sistem linear $(S^{-1}AS)x=b$, maka Sx adalah solusi sistem linear $Ay=Sb$.
[cite_start]**Answer:** True [cite: 2686]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". [Substitusi $y=Sx$, maka $(S^{-1}AS)(S^{-1}y)=b \implies S^{-1}A(SS^{-1})y=b \implies S^{-1}Ay=b \implies Ay=Sb$].

(f) Misalkan A adalah matriks $n \times n$. Sistem linear $Ax=4x$ memiliki solusi unik jika dan hanya jika $A-4I$ adalah matriks invertibel.
[cite_start]**Answer:** True [cite: 2687]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($Ax=4x \implies Ax-4Ix=0 \implies (A-4I)x=0$. Sistem ini punya solusi unik [yaitu x=0] jika dan hanya jika $A-4I$ invertibel).

(g) Misalkan A dan B adalah matriks $n \times n$. Jika A atau B (atau keduanya) tidak invertibel, maka AB juga tidak invertibel.
[cite_start]**Answer:** True [cite: 2687]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika AB invertibel, maka $det(AB) \ne 0$. Tapi $det(AB) = det(A)det(B)$. Jika $det(A)=0$ atau $det(B)=0$, maka $det(AB)=0$, kontradiksi).

---

## Exercise Set 1.7

(a) Transpos dari matriks diagonal adalah matriks diagonal.
[cite_start]**Answer:** True [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Entri non-diagonal tetap nol).

(b) Transpos dari matriks segitiga atas adalah matriks segitiga atas.
[cite_start]**Answer:** False [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Transposnya adalah matriks segitiga bawah).

(c) Jumlah matriks segitiga atas dan matriks segitiga bawah adalah matriks diagonal.
[cite_start]**Answer:** False [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Jumlahnya bisa jadi matriks penuh).

(d) Semua entri matriks simetris ditentukan oleh entri yang terletak pada dan di atas diagonal utama.
[cite_start]**Answer:** True [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Karena $a_{ij} = a_{ji}$).

(e) Semua entri matriks segitiga atas ditentukan oleh entri yang terletak pada dan di atas diagonal utama.
[cite_start]**Answer:** True [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Entri di bawah diagonal utama adalah nol).

(f) Invers dari matriks segitiga bawah yang invertibel adalah matriks segitiga atas.
[cite_start]**Answer:** False [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Inversnya adalah matriks segitiga bawah).

(g) Matriks diagonal invertibel jika dan hanya jika semua entri diagonalnya positif.
[cite_start]**Answer:** False [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Invertibel jika dan hanya jika semua entri diagonalnya *tak-nol*).

(h) Jumlah matriks diagonal dan matriks segitiga bawah adalah matriks segitiga bawah.
[cite_start]**Answer:** True [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Entri di atas diagonal utama tetap nol).

(i) Matriks yang sekaligus simetris dan segitiga atas haruslah matriks diagonal.
[cite_start]**Answer:** True [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Simetris berarti $a_{ij}=a_{ji}$. Segitiga atas berarti $a_{ij}=0$ untuk $i>j$. Maka $a_{ji}=0$ untuk $j>i$. Jadi, semua entri non-diagonal adalah nol).

(j) Jika A dan B adalah matriks $n \times n$ sedemikian sehingga $A+B$ simetris, maka A dan B simetris.
[cite_start]**Answer:** False [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: $A=[\begin{smallmatrix}1&2\\3&4\end{smallmatrix}]$, $B=[\begin{smallmatrix}1&3\\2&4\end{smallmatrix}]$, $A+B=[\begin{smallmatrix}2&5\\5&8\end{smallmatrix}]$ simetris, tapi A dan B tidak).

(k) Jika A dan B adalah matriks $n \times n$ sedemikian sehingga $A+B$ segitiga atas, maka A dan B segitiga atas.
[cite_start]**Answer:** False [cite: 2677]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: $A=[\begin{smallmatrix}1&2\\1&4\end{smallmatrix}]$, $B=[\begin{smallmatrix}1&3\\-1&4\end{smallmatrix}]$, $A+B=[\begin{smallmatrix}2&5\\0&8\end{smallmatrix}]$ segitiga atas, tapi A dan B tidak).

(l) Jika $A^2$ adalah matriks simetris, maka A adalah matriks simetris.
[cite_start]**Answer:** False [cite: 2678]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: $A=[\begin{smallmatrix}0&1\\0&0\end{smallmatrix}]$, $A^2=[\begin{smallmatrix}0&0\\0&0\end{smallmatrix}]$ simetris, tapi A tidak).

(m) Jika $kA$ adalah matriks simetris untuk suatu $k \ne 0$, maka A adalah matriks simetris.
[cite_start]**Answer:** True [cite: 2678]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika $kA$ simetris, $(kA)^T=kA$. Maka $kA^T=kA$. Karena $k \ne 0$, bagi dengan k menghasilkan $A^T=A$).

---

## Exercise Set 1.8

(a) Dalam jaringan apapun, jumlah aliran keluar dari sebuah node harus sama dengan jumlah aliran masuk ke node tersebut.
[cite_start]**Answer:** True [cite: 2690]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah prinsip konservasi aliran).

(b) Ketika arus melewati resistor, terjadi peningkatan potensial listrik dalam rangkaian.
[cite_start]**Answer:** False [cite: 2690]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Terjadi penurunan potensial, disebut voltage drop).

(c) Hukum Arus Kirchhoff menyatakan bahwa jumlah arus yang mengalir masuk ke sebuah node sama dengan jumlah arus yang mengalir keluar dari node tersebut.
[cite_start]**Answer:** True [cite: 2690]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah definisi Hukum Arus Kirchhoff).

(d) Persamaan kimia disebut setara jika jumlah total atom di setiap sisi persamaan sama.
[cite_start]**Answer:** False [cite: 2690]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Jumlah total atom *untuk setiap elemen* harus sama di kedua sisi).

(e) Diberikan n titik di bidang xy, ada polinomial unik berderajat $n-1$ atau kurang yang grafiknya melewati titik-titik tersebut.
[cite_start]**Answer:** False [cite: 2690]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini benar hanya jika semua koordinat-x dari titik-titik tersebut berbeda).

---

## Exercise Set 1.9

(a) Sektor ekonomi yang menghasilkan output disebut sektor terbuka.
[cite_start]**Answer:** False [cite: 2695]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Sektor terbuka adalah sektor yang mengkonsumsi output tanpa memproduksi, misal konsumen akhir).

(b) Ekonomi tertutup adalah ekonomi yang tidak memiliki sektor terbuka.
[cite_start]**Answer:** True [cite: 2695]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Semua output dikonsumsi oleh sektor-sektor produktif itu sendiri).

(c) Baris-baris matriks konsumsi merepresentasikan output dalam suatu sektor ekonomi.
[cite_start]**Answer:** False [cite: 2695]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Baris ke-i merepresentasikan berapa banyak output dari sektor i yang dibutuhkan oleh sektor lain).

(d) Jika jumlah kolom dari matriks konsumsi semuanya kurang dari 1, maka matriks Leontief $I-C$ invertibel.
[cite_start]**Answer:** True [cite: 2696]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah salah satu kondisi yang menjamin ekonomi produktif).

(e) Persamaan Leontief $x=Cx+d$ menghubungkan vektor produksi suatu ekonomi dengan vektor permintaan luar.
[cite_start]**Answer:** True [cite: 2696]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah persamaan dasar model Leontief terbuka).

---

## Exercise Set 2.1

(a) Determinan matriks $2 \times 2$ $[\begin{smallmatrix}a & b \\ c & d\end{smallmatrix}]$ adalah $ad+bc$.
[cite_start]**Answer:** False [cite: 2717]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Determinannya adalah $ad-bc$).

(b) Dua matriks persegi A dan B dapat memiliki determinan yang sama hanya jika ukurannya sama.
[cite_start]**Answer:** False [cite: 2717]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Determinan adalah skalar. Matriks dengan ukuran berbeda bisa saja memiliki determinan yang sama secara kebetulan, misal $det([2])=2$ dan $det([\begin{smallmatrix}1&0\\0&2\end{smallmatrix}])=2$).

(c) Minor $M_{ij}$ sama dengan kofaktor $C_{ij}$ jika dan hanya jika $i+j$ genap.
[cite_start]**Answer:** True [cite: 2717]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Definisi kofaktor adalah $C_{ij} = (-1)^{i+j}M_{ij}$).

(d) Jika A adalah matriks simetris $3 \times 3$, maka $C_{ij}=C_{ji}$ untuk semua i dan j.
[cite_start]**Answer:** True [cite: 2717]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Submatriks untuk $M_{ij}$ adalah transpos dari submatriks untuk $M_{ji}$, dan $i+j$ serta $j+i$ memiliki paritas yang sama).

(e) Nilai ekspansi kofaktor matriks A tidak bergantung pada baris atau kolom yang dipilih untuk ekspansi.
[cite_start]**Answer:** True [cite: 2717]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah sifat fundamental determinan).

(f) Determinan matriks segitiga bawah adalah jumlah entri sepanjang diagonal utamanya.
[cite_start]**Answer:** False [cite: 2717]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Determinannya adalah *hasil kali* entri diagonal utama).

(g) Untuk setiap matriks persegi A dan setiap skalar c, berlaku $det(cA)=c \cdot det(A)$.
[cite_start]**Answer:** False [cite: 2717]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Yang benar adalah $det(cA)=c^n \cdot det(A)$ jika A berukuran $n \times n$).

(h) Untuk semua matriks persegi A dan B, berlaku $det(A+B)=det(A)+det(B)$.
[cite_start]**Answer:** False [cite: 2717]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Determinan pada umumnya tidak bersifat aditif).

(i) Untuk setiap matriks $2 \times 2$ A, berlaku $det(A^2)=(det(A))^2$.
[cite_start]**Answer:** True [cite: 2709]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Karena $det(AB)=det(A)det(B)$, maka $det(A^2)=det(AA)=det(A)det(A)=(det(A))^2$).

---

## Exercise Set 2.2

(a) Jika A adalah matriks $3 \times 3$ dan B diperoleh dari A dengan menukar dua baris pertama dan kemudian menukar dua baris terakhir, maka $det(B)=det(A)$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Setiap penukaran baris mengalikan determinan dengan -1. Dua penukaran mengalikan dengan $(-1)^2 = 1$).

(b) Jika A adalah matriks $3 \times 3$ dan B diperoleh dari A dengan mengalikan kolom pertama dengan 4 dan mengalikan kolom ketiga dengan $\frac{3}{4}$, maka $det(B)=3 \cdot det(A)$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Mengalikan satu kolom dengan skalar k akan mengalikan determinan dengan k. Jadi $det(B) = (4)(\frac{3}{4})det(A) = 3det(A)$).

(c) Jika A adalah matriks $3 \times 3$ dan B diperoleh dari A dengan menambahkan 5 kali baris pertama ke masing-masing baris kedua dan ketiga, maka $det(B)=(25) \cdot det(A)$.
[cite_start]**Answer:** False [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Menambahkan kelipatan satu baris ke baris lain *tidak mengubah* determinan. Jadi $det(B)=det(A)$).

(d) Jika A adalah matriks $n \times n$ dan B diperoleh dari A dengan mengalikan setiap baris A dengan nomor barisnya, maka $det(B) = \frac{n(n+1)}{2}det(A)$.
[cite_start]**Answer:** False [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Mengalikan baris ke-i dengan i mengalikan determinan dengan i. Melakukan ini untuk semua baris $i=1...n$ akan mengalikan determinan dengan $1 \cdot 2 \cdot \dots \cdot n = n!$. Jadi $det(B) = n! det(A)$).

(e) Jika A adalah matriks persegi dengan dua kolom identik, maka $det(A)=0$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika satu kolom dikurangkan dari kolom identik lainnya, hasilnya adalah kolom nol, dan determinan matriks dengan kolom nol adalah 0).

(f) Jika jumlah vektor baris kedua dan keempat dari matriks $6 \times 6$ A sama dengan vektor baris terakhir, maka $det(A)=0$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Lakukan operasi baris: kurangkan baris kedua dan baris keempat dari baris terakhir. Baris terakhir akan menjadi baris nol, sehingga determinannya 0).

---

## Exercise Set 2.3

(a) Jika A adalah matriks $2 \times 2$, maka $det(A)=(a_{11}+a_{22})(a_{11}-a_{22})-(a_{12}+a_{21})(a_{12}-a_{21})$.
[cite_start]**Answer:** False [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Rumus yang benar adalah $det(A) = a_{11}a_{22}-a_{12}a_{21}$).

(b) Jika A dan B adalah matriks persegi dengan ukuran yang sama sedemikian sehingga $det(A)=det(B)$, maka $det(A+B)=2 \cdot det(A)$.
[cite_start]**Answer:** False [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Determinan tidak bersifat aditif).

(c) Jika A dan B adalah matriks persegi dengan ukuran yang sama dan A invertibel, maka $det(A^{-1}BA)=det(B)$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($det(A^{-1}BA) = det(A^{-1})det(B)det(A) = (1/det(A))det(B)det(A) = det(B)$).

(d) Matriks persegi A invertibel jika dan hanya jika $det(A)=0$.
[cite_start]**Answer:** False [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Invertibel jika dan hanya jika $det(A) \ne 0$).

(e) Matriks kofaktor dari A persis sama dengan $(adj(A))^T$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Definisi adjoint adalah transpos dari matriks kofaktor).

(f) Untuk setiap matriks $n \times n$ A, berlaku $A \cdot adj(A)=(det(A))I_n$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah teorema fundamental tentang adjoint).

(g) Jika A adalah matriks persegi dan sistem linear $Ax=b$ memiliki banyak solusi untuk x, maka $det(A)=0$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika ada banyak solusi, A tidak invertibel, sehingga $det(A)=0$).

(h) Jika A adalah matriks $n \times n$ dan terdapat matriks $n \times 1$ b sedemikian sehingga sistem linear $Ax=b$ tidak memiliki solusi, maka bentuk eselon baris tereduksi A tidak mungkin $I_n$.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika tidak ada solusi, A tidak invertibel, sehingga RREF-nya bukan $I_n$).

(i) Jika E adalah matriks elementer, maka $Ex=0$ hanya memiliki solusi trivial.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Matriks elementer selalu invertibel).

(j) Jika A adalah matriks invertibel, maka sistem linear $Ax=0$ hanya memiliki solusi trivial jika dan hanya jika sistem linear $A^{-1}x=0$ hanya memiliki solusi trivial.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika A invertibel, $A^{-1}$ juga invertibel. Sistem homogen $Mx=0$ hanya punya solusi trivial jika dan hanya jika M invertibel).

(k) Jika A invertibel, maka $adj(A)$ juga harus invertibel.
[cite_start]**Answer:** True [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Karena $A^{-1} = (1/det(A))adj(A)$, maka $adj(A)=det(A)A^{-1}$. Karena $det(A) \ne 0$ dan $A^{-1}$ invertibel, maka $adj(A)$ invertibel).

(l) Jika A memiliki baris nol, maka $adj(A)$ juga demikian.
[cite_start]**Answer:** False [cite: 2730]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Adjoint adalah transpos dari matriks kofaktor. Kofaktor mungkin tidak nol semua meskipun ada baris nol).

---

## Exercise Set 3.1

(a) Dua vektor ekuivalen harus memiliki titik awal yang sama.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Vektor ekuivalen memiliki panjang dan arah yang sama, tapi titik awal bisa berbeda).

(b) Vektor $(a, b)$ dan $(a, b, 0)$ ekuivalen.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Vektor berada di ruang yang berbeda, R2 dan R3).

(c) Jika k adalah skalar dan v adalah vektor, maka v dan kv paralel jika dan hanya jika $k \ge 0$.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Paralel jika $k \ne 0$. Jika $k<0$, arahnya berlawanan).

(d) Vektor $v+(-v)$ dan $0$ sama.
[cite_start]**Answer:** True [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Definisi vektor negatif).

(e) Jika $a+b=a+c$, maka $b=c$.
[cite_start]**Answer:** True [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Hukum pembatalan untuk penjumlahan vektor).

(f) Jika $a$ dan $b$ adalah skalar sedemikian sehingga $av+bv=0$, maka $u$ dan $v$ adalah vektor paralel.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Pernyataan ini tidak menggunakan u. Jika yang dimaksud adalah $(a+b)v=0$, maka jika $v \ne 0$, $a+b=0$, tapi ini tidak mengatakan apa-apa tentang paralelisme).

(g) Vektor kolinear dengan panjang yang sama adalah sama.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Arahnya bisa berlawanan, misal v dan -v).

(h) Jika $v+w=v$, maka $w$ harus vektor nol.
[cite_start]**Answer:** True [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Sifat identitas penjumlahan).

(i) Jika k dan m adalah skalar dan u dan v adalah vektor, maka $(k+m)(u+v)=ku+kv+mu+mv$.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Properti distributif yang benar adalah $(k+m)u = ku+mu$ dan $k(u+v)=ku+kv$).

(j) Jika vektor v dan w diberikan, maka persamaan vektor $x-v=w$ dapat diselesaikan untuk x.
[cite_start]**Answer:** True [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($x=w+v$).

(k) Kombinasi linear $a_1v_1+a_2v_2$ dan $b_1v_1+b_2v_2$ hanya bisa sama jika $a_1=b_1$ dan $a_2=b_2$.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini hanya berlaku jika $v_1$ dan $v_2$ linear independen).

---

## Exercise Set 3.2

(a) Jika setiap komponen vektor di $R^n$ digandakan, norma vektor tersebut digandakan.
[cite_start]**Answer:** True [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($||kv|| = |k| ||v||$. Jika $k=2$, maka $||2v|| = |2| ||v|| = 2||v||$).

(b) Di $R^2$, vektor-vektor dengan norma 5 yang titik awalnya di titik asal memiliki titik akhir yang terletak pada lingkaran berjari-jari 5 yang berpusat di titik asal.
[cite_start]**Answer:** True [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Definisi norma Euclidean sesuai dengan jarak dari titik asal).

(c) Setiap vektor di $R^n$ memiliki norma positif.
[cite_start]**Answer:** False [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Vektor nol memiliki norma 0).

(d) Jika v adalah vektor tak-nol di $R^n$, terdapat tepat dua vektor satuan yang paralel dengan v.
[cite_start]**Answer:** True [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Yaitu $v/||v||$ dan $-v/||v||$).

(e) Jika $||u||=1$, $||v||=2$, dan $u \cdot v = -1$, maka sudut antara u dan v adalah $2\pi/3$ radian.
[cite_start]**Answer:** True [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($cos\theta = (u \cdot v) / (||u|| ||v||) = -1 / (1 \cdot 2) = -1/2$. Sudut dengan $cos\theta = -1/2$ dalam $[0, \pi]$ adalah $2\pi/3$).

(f) Ekspresi $||u \cdot v||$ dan $||u|| \cdot ||v||$ keduanya bermakna dan sama satu sama lain.
[cite_start]**Answer:** False [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". ($u \cdot v$ adalah skalar, sehingga $||u \cdot v||$ adalah nilai mutlaknya $|u \cdot v|$. Ketidaksamaan Cauchy-Schwarz menyatakan $|u \cdot v| \le ||u|| ||v||$, dan kesamaan hanya berlaku jika u dan v kolinear).

(g) Jika $u \cdot v = 0$, maka $||u+v||^2 = ||u||^2 + ||v||^2$.
[cite_start]**Answer:** True [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($||u+v||^2 = (u+v)\cdot(u+v) = u\cdot u + 2u\cdot v + v\cdot v = ||u||^2 + 0 + ||v||^2$).

(h) Jika $u \cdot v = u \cdot w$, maka $v=w$.
[cite_start]**Answer:** False [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Jika $u=0$, atau jika $u \ne 0$ tapi $u \cdot (v-w)=0$, yaitu $v-w$ ortogonal terhadap u).

(i) Di $R^2$, jika u terletak di kuadran pertama dan v terletak di kuadran ketiga, maka $u \cdot v$ tidak mungkin positif.
[cite_start]**Answer:** True [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (u=(+,+), v=(-,-). $u \cdot v = (+)(-) + (+)(-) = (-) + (-) = (-)$).

(j) Untuk semua vektor u, v, dan w di $R^n$, berlaku $|(u+v) \cdot w|=|u \cdot w + v \cdot w|$.
[cite_start]**Answer:** True [cite: 2779]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah sifat distributif dot product: $(u+v) \cdot w = u \cdot w + v \cdot w$. Mengambil nilai mutlak kedua sisi tidak mengubah kesamaan).

---

## Exercise Set 3.3

(a) Vektor $(3, -1, 2)$ dan $(0, 0, 0)$ ortogonal.
[cite_start]**Answer:** True [cite: 2780]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Dot product mereka adalah $3(0) + (-1)(0) + 2(0) = 0$. Vektor nol ortogonal terhadap semua vektor).

(b) Jika u dan v adalah vektor ortogonal, maka untuk semua skalar tak-nol k dan m, $ku$ dan $mv$ adalah vektor ortogonal.
[cite_start]**Answer:** True [cite: 2780]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($(ku) \cdot (mv) = (km)(u \cdot v) = (km)(0) = 0$).

(c) Proyeksi ortogonal u terhadap a tegak lurus terhadap komponen vektor u yang ortogonal terhadap a.
[cite_start]**Answer:** True [cite: 2780]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah bagaimana komponen-komponen tersebut didefinisikan: $u = proj_a(u) + (u - proj_a(u))$, dan $u - proj_a(u)$ didefinisikan sebagai komponen ortogonal).

(d) Jika a dan b adalah vektor ortogonal, maka untuk setiap vektor tak-nol u, berlaku $proj_a(proj_b(u)) = 0$.
[cite_start]**Answer:** True [cite: 2780]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($proj_b(u)$ adalah kelipatan skalar dari b. Karena a ortogonal terhadap b, maka a ortogonal terhadap kelipatan skalar b. Proyeksi vektor terhadap vektor yang ortogonal padanya adalah vektor nol).

(e) Jika a dan u adalah vektor tak-nol, maka $||proj_a(u)||=||proj_u(a)||$.
[cite_start]**Answer:** False [cite: 2780]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". ($||proj_a(u)|| = |u \cdot a| / ||a||$ dan $||proj_u(a)|| = |a \cdot u| / ||u||$. Keduanya sama hanya jika $||a||=||u||$).

(f) Jika hubungan $proj_a u = proj_a v$ berlaku untuk suatu vektor tak-nol a, maka $u=v$.
[cite_start]**Answer:** False [cite: 2780]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini hanya berarti $u-v$ ortogonal terhadap a).

(g) Untuk semua vektor u dan v, berlaku $||u+v||=||u||+||v||$.
[cite_start]**Answer:** False [cite: 2780]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini adalah ketidaksamaan segitiga $||u+v|| \le ||u||+||v||$. Kesamaan hanya berlaku jika u dan v memiliki arah yang sama atau salah satunya nol).

---

## Exercise Set 3.4

(a) Persamaan vektor sebuah garis dapat ditentukan dari sembarang titik yang terletak pada garis dan sebuah vektor tak-nol yang paralel dengan garis tersebut.
[cite_start]**Answer:** True [cite: 2789]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah definisi persamaan vektor garis: $x = x_0 + tv$).

(b) Persamaan vektor sebuah bidang dapat ditentukan dari sembarang titik yang terletak pada bidang dan sebuah vektor tak-nol yang paralel dengan bidang tersebut.
[cite_start]**Answer:** False [cite: 2789]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Dibutuhkan satu titik dan *dua* vektor tak-kolinear yang paralel dengan bidang, atau satu titik dan satu vektor normal).

(c) Titik-titik yang terletak pada garis melalui titik asal di $R^2$ atau $R^3$ adalah semua kelipatan skalar dari sembarang vektor tak-nol pada garis tersebut.
[cite_start]**Answer:** True [cite: 2789]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Persamaan vektornya adalah $x = tv$).

(d) Semua vektor solusi dari sistem linear $Ax=0$ ortogonal terhadap vektor-vektor baris matriks A jika dan hanya jika $Ax=0$.
[cite_start]**Answer:** True [cite: 2789]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Persamaan $Ax=0$ berarti dot product dari setiap vektor baris A dengan vektor solusi x adalah nol).

(e) Solusi umum sistem linear non-homogen $Ax=b$ dapat diperoleh dengan menambahkan b ke solusi umum sistem linear homogen $Ax=0$.
[cite_start]**Answer:** False [cite: 2789]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Solusi umum $Ax=b$ adalah $x_p + x_h$, di mana $x_p$ adalah satu solusi *partikular* dari $Ax=b$ dan $x_h$ adalah solusi umum dari $Ax=0$).

(f) Jika $x_1$ dan $x_2$ adalah dua solusi dari sistem linear non-homogen $Ax=b$, maka $x_1-x_2$ adalah solusi dari sistem linear homogen yang bersesuaian.
[cite_start]**Answer:** True [cite: 2789]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($A(x_1-x_2) = Ax_1 - Ax_2 = b - b = 0$).

---

## Exercise Set 3.5

(a) Hasil kali silang (cross product) dari dua vektor tak-nol u dan v adalah vektor tak-nol jika dan hanya jika u dan v tidak paralel.
[cite_start]**Answer:** True [cite: 2800]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($||u \times v|| = ||u|| ||v|| \sin\theta$. Ini nol jika dan hanya jika $\sin\theta = 0$, yang berarti u dan v paralel atau salah satunya nol).

(b) Vektor normal terhadap bidang dapat diperoleh dengan mengambil hasil kali silang dari dua vektor tak-nol dan tak-kolinear yang terletak pada bidang.
[cite_start]**Answer:** True [cite: 2800]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Hasil kali silang menghasilkan vektor yang ortogonal terhadap kedua vektor asli).

(c) Hasil kali triple skalar (scalar triple product) dari u, v, dan w menentukan vektor yang panjangnya sama dengan volume paralelepiped yang ditentukan oleh u, v, dan w.
[cite_start]**Answer:** False [cite: 2800]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Scalar triple product adalah *skalar*, bukan vektor. Nilai absolutnya adalah volume paralelepiped).

(d) Jika u dan v adalah vektor di ruang-3, maka $||u \times v||$ sama dengan luas jajaran genjang yang ditentukan oleh u dan v.
[cite_start]**Answer:** True [cite: 2800]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah interpretasi geometris dari magnitudo cross product).

(e) Untuk semua vektor u, v, dan w di ruang-3, vektor $(u \times v) \times w$ dan $u \times (v \times w)$ sama.
[cite_start]**Answer:** False [cite: 2800]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Cross product tidak asosiatif).

(f) Jika u, v, dan w adalah vektor di $R^3$, di mana u tak-nol dan $u \times v = u \times w$, maka $v=w$.
[cite_start]**Answer:** False [cite: 2800]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". ($u \times v = u \times w \implies u \times (v-w) = 0$. Ini berarti $v-w$ paralel dengan u, bukan berarti $v-w=0$).

---

## Exercise Set 4.1

(a) Vektor adalah segmen garis berarah (panah).
[cite_start]**Answer:** False [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini adalah interpretasi geometris di R2/R3, bukan definisi umum dalam ruang vektor).

(b) Vektor adalah n-tuple bilangan real.
[cite_start]**Answer:** False [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (n-tuple adalah *contoh* vektor, tapi definisi umumnya lebih abstrak).

(c) Vektor adalah sembarang elemen dari ruang vektor.
[cite_start]**Answer:** True [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah definisi dalam konteks ruang vektor abstrak).

(d) Terdapat ruang vektor yang terdiri dari tepat dua vektor berbeda.
[cite_start]**Answer:** False [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Setiap ruang vektor harus mengandung vektor nol. Jika ada vektor tak-nol v, maka harus ada juga kv untuk semua skalar k. Jika skalarnya bilangan real, maka ada tak hingga vektor).

(e) Himpunan polinomial berderajat tepat 1 adalah ruang vektor di bawah operasi yang didefinisikan dalam Latihan 12.
[cite_start]**Answer:** False [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Himpunan ini tidak tertutup terhadap penjumlahan, contoh: $(x+1) + (-x+2) = 3$, yang bukan berderajat 1. Juga tidak mengandung vektor nol).

---

## Exercise Set 4.2

(a) Setiap subruang dari ruang vektor adalah ruang vektor itu sendiri.
[cite_start]**Answer:** True [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Definisi subruang mensyaratkan ia adalah ruang vektor dengan operasi yang diwarisi).

(b) Setiap ruang vektor adalah subruang dari dirinya sendiri.
[cite_start]**Answer:** True [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Memenuhi definisi subruang).

(c) Setiap subset dari ruang vektor V yang mengandung vektor nol di V adalah subruang dari V.
[cite_start]**Answer:** False [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Harus juga tertutup terhadap penjumlahan dan perkalian skalar).

(d) Himpunan $R^2$ adalah subruang dari $R^3$.
[cite_start]**Answer:** False [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Elemen R2 adalah pasangan terurut, elemen R3 adalah triple terurut. R2 bahkan bukan subset dari R3 dalam notasi standar. Bidang xy di R3 *isomorfik* dengan R2 dan merupakan subruang dari R3).

(e) Himpunan solusi dari sistem linear konsisten $Ax=b$ dari m persamaan dalam n variabel adalah subruang dari $R^n$.
[cite_start]**Answer:** False [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini hanya benar jika $b=0$, yaitu sistemnya homogen. Jika $b \ne 0$, himpunan solusi tidak mengandung vektor nol).

(f) Span dari sembarang himpunan vektor hingga dalam ruang vektor tertutup terhadap penjumlahan dan perkalian skalar.
[cite_start]**Answer:** True [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Span dari suatu himpunan adalah subruang terkecil yang mengandung himpunan itu, dan subruang harus tertutup).

(g) Irisan dari dua subruang sembarang dari ruang vektor V adalah subruang dari V.
[cite_start]**Answer:** True [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Dapat dibuktikan dengan menunjukkan irisan tersebut mengandung nol dan tertutup terhadap operasi).

(h) Gabungan dari dua subruang sembarang dari ruang vektor V adalah subruang dari V.
[cite_start]**Answer:** False [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: gabungan sumbu-x dan sumbu-y di R2 bukan subruang).

(i) Dua subset dari ruang vektor V yang merentang subruang yang sama dari V harus sama.
[cite_start]**Answer:** False [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: {(1,0), (0,1)} dan {(1,0), (0,1), (1,1)} keduanya merentang R2).

(j) Himpunan matriks $n \times n$ segitiga atas adalah subruang dari ruang vektor semua matriks $n \times n$.
[cite_start]**Answer:** True [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jumlah dua matriks segitiga atas adalah segitiga atas, perkalian skalar juga. Matriks nol adalah segitiga atas).

(k) Polinomial $x-1, (x-1)^2$, dan $(x-1)^3$ merentang $P_3$.
[cite_start]**Answer:** False [cite: 2823]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ruang $P_3$ berdimensi 4, dibutuhkan 4 vektor linear independen untuk merentangnya. Polinomial konstan tidak dapat dihasilkan).

---

## Exercise Set 4.3

(a) Himpunan yang berisi satu vektor tunggal adalah linear independen.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Hanya jika vektor tersebut bukan vektor nol).

(b) Himpunan vektor $\{v, kv\}$ linear dependen untuk setiap skalar k.
[cite_start]**Answer:** True [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika k=0, himpunan mengandung vektor nol. Jika $k \ne 0$, $kv$ adalah kelipatan skalar dari v).

(c) Setiap himpunan linear dependen mengandung vektor nol.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: {(1,0), (2,0)} linear dependen tapi tidak mengandung vektor nol).

(d) Jika himpunan vektor $\{v_1, v_2, v_3\}$ linear independen, maka $\{kv_1, kv_2, kv_3\}$ juga linear independen untuk setiap skalar tak-nol k.
[cite_start]**Answer:** True [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Persamaan $c_1(kv_1)+c_2(kv_2)+c_3(kv_3)=0$ menjadi $k(c_1v_1+c_2v_2+c_3v_3)=0$. Karena $k \ne 0$ dan $\{v_i\}$ independen, maka $c_1=c_2=c_3=0$).

(e) Jika $v_1, \dots, v_n$ adalah vektor tak-nol linear dependen, maka setidaknya satu vektor $v_k$ adalah kombinasi linear unik dari $v_1, \dots, v_{k-1}$.
[cite_start]**Answer:** True [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ada $v_k$ pertama yang merupakan kombinasi linear dari vektor sebelumnya. Keunikannya bergantung pada independensi vektor sebelumnya). *Catatan: Keunikan mungkin sedikit ambigu di sini, tapi pernyataan ini dianggap benar dalam konteks buku.*

(f) Himpunan matriks $2 \times 2$ yang mengandung tepat dua angka 1 dan dua angka 0 adalah himpunan linear independen di $M_{22}$.
[cite_start]**Answer:** False [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: $1 \cdot [\begin{smallmatrix}1&0\\0&1\end{smallmatrix}] + 1 \cdot [\begin{smallmatrix}0&1\\1&0\end{smallmatrix}] - 1 \cdot [\begin{smallmatrix}1&1\\0&0\end{smallmatrix}] - 1 \cdot [\begin{smallmatrix}0&0\\1&1\end{smallmatrix}] = [\begin{smallmatrix}0&0\\0&0\end{smallmatrix}]$).

(g) Tiga polinomial $(x-1)(x+2), x(x+2)$, dan $x(x-1)$ linear independen.
[cite_start]**Answer:** True [cite: 2752]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Dapat ditunjukkan dengan menyelesaikan $c_1(x-1)(x+2) + c_2x(x+2) + c_3x(x-1) = 0$ untuk semua x).

(h) Fungsi $f_1$ dan $f_2$ linear dependen jika ada bilangan real x sehingga $k_1 f_1(x) + k_2 f_2(x) = 0$ untuk beberapa skalar $k_1$ dan $k_2$.
[cite_start]**Answer:** False [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Persamaan $k_1 f_1(x) + k_2 f_2(x) = 0$ harus berlaku *untuk semua* x dalam domain, tidak hanya satu x, dengan $k_1, k_2$ tidak keduanya nol).

---

## Exercise Set 4.4

(a) Jika $V=span\{v_1, \dots, v_n\}$, maka $\{v_1, \dots, v_n\}$ adalah basis untuk V.
[cite_start]**Answer:** False [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Himpunan tersebut mungkin linear dependen).

(b) Setiap subset linear independen dari ruang vektor V adalah basis untuk V.
[cite_start]**Answer:** False [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Subset tersebut mungkin tidak merentang V).

(c) Jika $\{v_1, v_2, \dots, v_n\}$ adalah basis untuk ruang vektor V, maka setiap vektor di V dapat diekspresikan sebagai kombinasi linear dari $v_1, v_2, \dots, v_n$.
[cite_start]**Answer:** True [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah bagian dari definisi basis: ia harus merentang V).

(d) Vektor koordinat dari vektor x di $R^n$ relatif terhadap basis standar untuk $R^n$ adalah x.
[cite_start]**Answer:** True [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Karena $x = x_1e_1 + x_2e_2 + \dots + x_ne_n$).

(e) Setiap basis dari $P_4$ mengandung setidaknya satu polinomial berderajat 3 atau kurang.
[cite_start]**Answer:** False [cite: 2835]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Basis $P_4$ harus memiliki 5 vektor. Bisa saja basisnya $\{x^4, x^4+x^3, x^4+x^2, x^4+x, x^4+1\}$).

---

## Exercise Set 4.5

(a) Ruang vektor nol memiliki dimensi nol.
[cite_start]**Answer:** True [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Berdasarkan definisi).

(b) Terdapat himpunan 17 vektor linear independen di $R^{17}$.
[cite_start]**Answer:** True [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Contohnya adalah basis standar).

(c) Terdapat himpunan 11 vektor yang merentang $R^{17}$.
[cite_start]**Answer:** False [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Dibutuhkan setidaknya 17 vektor untuk merentang ruang berdimensi 17).

(d) Setiap himpunan linear independen dari lima vektor di $R^5$ adalah basis untuk $R^5$.
[cite_start]**Answer:** True [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Setiap himpunan n vektor linear independen di ruang berdimensi n adalah basis).

(e) Setiap himpunan lima vektor yang merentang $R^5$ adalah basis untuk $R^5$.
[cite_start]**Answer:** True [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Setiap himpunan n vektor yang merentang ruang berdimensi n adalah basis).

(f) Setiap himpunan vektor yang merentang $R^n$ mengandung basis untuk $R^n$.
[cite_start]**Answer:** True [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Kita bisa membuang vektor-vektor dependen hingga mendapatkan himpunan linear independen yang masih merentang).

(g) Setiap himpunan vektor linear independen di $R^n$ termuat dalam suatu basis untuk $R^n$.
[cite_start]**Answer:** True [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Kita bisa menambahkan vektor-vektor dari basis standar, misalnya, untuk melengkapi himpunan tersebut menjadi basis).

(h) Terdapat basis untuk $M_{22}$ yang terdiri dari matriks-matriks invertibel.
[cite_start]**Answer:** True [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Contoh: $\{[\begin{smallmatrix}1&0\\0&1\end{smallmatrix}], [\begin{smallmatrix}0&1\\1&0\end{smallmatrix}], [\begin{smallmatrix}1&1\\0&1\end{smallmatrix}], [\begin{smallmatrix}1&0\\1&1\end{smallmatrix}]\}$).

(i) Jika A berukuran $n \times n$ dan $I_n, A, A^2, \dots, A^{n^2}$ adalah matriks-matriks berbeda, maka $\{I_n, A, A^2, \dots, A^{n^2}\}$ linear dependen.
[cite_start]**Answer:** True [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ruang matriks $n \times n$ memiliki dimensi $n^2$. Himpunan tersebut memiliki $n^2+1$ vektor, jadi harus dependen).

(j) Terdapat setidaknya dua subruang tiga dimensi yang berbeda dari $P_3$.
[cite_start]**Answer:** False [cite: 2853]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Dimensi $P_3$ adalah 4. Subruang 3-dimensi mungkin ada banyak, tapi tidak hanya dua. Contoh: $span\{1, x, x^2\}$ dan $span\{x, x^2, x^3\}$).

---

## Exercise Set 4.6

(a) Jika $B_1$ dan $B_2$ adalah basis untuk ruang vektor V, maka terdapat matriks transisi dari $B_1$ ke $B_2$.
[cite_start]**Answer:** True [cite: 2863]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Matriks transisi selalu ada antar basis).

(b) Matriks transisi invertibel.
[cite_start]**Answer:** True [cite: 2863]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Inversnya adalah matriks transisi arah sebaliknya).

(c) Jika B adalah basis untuk ruang vektor $R^n$, maka $P_{B \to B}$ adalah matriks identitas.
[cite_start]**Answer:** True [cite: 2863]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Koordinat vektor basis relatif terhadap dirinya sendiri adalah vektor standar).

(d) Jika $P_{B_1 \to B_2}$ adalah matriks diagonal, maka setiap vektor di $B_2$ adalah kelipatan skalar dari suatu vektor di $B_1$.
[cite_start]**Answer:** True [cite: 2863]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Kolom ke-j dari $P_{B_1 \to B_2}$ adalah $[v_j]_{B_1}$. Jika $P$ diagonal, maka $[v_j]_{B_1}$ hanya memiliki satu entri tak-nol, yaitu $c_j$ di posisi ke-j. Ini berarti $v_j = c_j u_j$).

(e) Jika setiap vektor di $B_2$ adalah kelipatan skalar dari suatu vektor di $B_1$, maka $P_{B_1 \to B_2}$ adalah matriks diagonal.
[cite_start]**Answer:** False [cite: 2863]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Setiap $v_j$ mungkin kelipatan dari $u_k$ yang berbeda, sehingga $P$ tidak harus diagonal).

(f) Jika A adalah matriks persegi, maka $A=P_{B_1 \to B_2}$ untuk beberapa basis $B_1$ dan $B_2$ untuk $R^n$.
[cite_start]**Answer:** False [cite: 2863]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Matriks transisi harus invertibel, sedangkan A tidak harus).

---

## Exercise Set 4.7

(a) Span dari $v_1, \dots, v_n$ adalah ruang kolom dari matriks yang vektor kolomnya adalah $v_1, \dots, v_n$.
[cite_start]**Answer:** True [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Definisi ruang kolom adalah span dari vektor kolom).

(b) Ruang kolom dari matriks A adalah himpunan solusi dari $Ax=b$.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ruang kolom adalah himpunan semua b sedemikian sehingga $Ax=b$ *konsisten*).

(c) Jika R adalah bentuk eselon baris tereduksi dari A, maka vektor-vektor kolom R yang mengandung leading 1 membentuk basis untuk ruang kolom A.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Vektor kolom *yang bersesuaian* di matriks *A* asli yang membentuk basis, bukan vektor kolom di R).

(d) Himpunan vektor baris tak-nol dari matriks A adalah basis untuk ruang baris A.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Vektor baris A mungkin dependen. Vektor baris tak-nol dari *bentuk eselon baris* A yang membentuk basis).

(e) Jika A dan B adalah matriks $n \times n$ yang memiliki ruang baris yang sama, maka A dan B memiliki ruang kolom yang sama.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Contoh: $A=[\begin{smallmatrix}1&0\\0&0\end{smallmatrix}]$, $B=[\begin{smallmatrix}1&1\\0&0\end{smallmatrix}]$).

(f) Jika E adalah matriks elementer $m \times m$ dan A adalah matriks $m \times n$, maka ruang nol dari EA sama dengan ruang nol dari A.
[cite_start]**Answer:** True [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Mengalikan dari kiri dengan matriks invertibel E tidak mengubah solusi $Ax=0 \iff EAx=E0=0$).

(g) Jika E adalah matriks elementer $m \times m$ dan A adalah matriks $m \times n$, maka ruang baris dari EA sama dengan ruang baris dari A.
[cite_start]**Answer:** True [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Operasi baris elementer tidak mengubah ruang baris).

(h) Jika E adalah matriks elementer $m \times m$ dan A adalah matriks $m \times n$, maka ruang kolom dari EA sama dengan ruang kolom dari A.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Operasi baris elementer dapat mengubah ruang kolom).

(i) Sistem $Ax=b$ tidak konsisten jika dan hanya jika b tidak berada di ruang kolom A.
[cite_start]**Answer:** True [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Sistem konsisten jika dan hanya jika b adalah kombinasi linear dari kolom-kolom A).

(j) Terdapat matriks invertibel A dan matriks singular B sedemikian sehingga ruang baris A dan B sama.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Jika ruang barisnya sama, dimensinya sama. Dimensi ruang baris adalah rank. Jika A invertibel ($n \times n$), rank(A)=n. Jika B singular ($n \times n$), rank(B)<n. Jadi ruang barisnya tidak mungkin sama).

---

## Exercise Set 4.8

(a) Entah vektor baris atau vektor kolom dari matriks persegi adalah linear independen.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Bisa jadi keduanya dependen, contoh: matriks nol).

(b) Matriks dengan vektor baris linear independen dan vektor kolom linear independen adalah persegi.
[cite_start]**Answer:** True [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika baris independen, rank=m. Jika kolom independen, rank=n. Karena rank sama, m=n).

(c) Nulitas dari matriks $m \times n$ tak-nol paling banyak m.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Nulitas = $n-rank$. Rank paling banyak $min(m,n)$. Jadi nulitas paling sedikit $n-min(m,n)$ dan paling banyak n).

(d) Menambahkan satu kolom tambahan ke matriks meningkatkan rank-nya sebesar satu.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Rank bisa tetap sama jika kolom baru adalah kombinasi linear dari kolom yang ada).

(e) Nulitas dari matriks persegi dengan baris linear dependen setidaknya satu.
[cite_start]**Answer:** True [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika baris dependen, rank < n. Nulitas = n-rank > 0).

(f) Jika A persegi dan $Ax=b$ tidak konsisten untuk suatu vektor b, maka nulitas A adalah nol.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Jika tidak konsisten, A tidak invertibel, rank < n, nulitas > 0).

(g) Jika matriks A memiliki lebih banyak baris daripada kolom, maka dimensi ruang baris lebih besar dari dimensi ruang kolom.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Dimensi ruang baris dan ruang kolom selalu sama, yaitu rank).

(h) Jika $rank(A^T) = rank(A)$, maka A persegi.
[cite_start]**Answer:** False [cite: 2887]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Rank $A^T$ selalu sama dengan rank A, terlepas dari apakah A persegi atau tidak).

(i) Tidak ada matriks $3 \times 3$ yang ruang baris dan ruang nolnya keduanya adalah garis di ruang-3.
[cite_start]**Answer:** True [cite: 2888]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Dimensi ruang baris (rank) + dimensi ruang nol (nulitas) = jumlah kolom (n). Jika keduanya garis, dimensi 1+1=2, tapi n=3. Kontradiksi).

(j) Jika V adalah subruang dari $R^n$ dan W adalah subruang dari V, maka $W^{\perp}$ adalah subruang dari $V^{\perp}$.
[cite_start]**Answer:** False [cite: 2888]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Hubungan inklusinya terbalik: $V^{\perp}$ adalah subruang dari $W^{\perp}$).

---

## Exercise Set 4.9

(a) Jika A adalah matriks $2 \times 3$, maka domain transformasi $T_A$ adalah $R^2$.
[cite_start]**Answer:** False [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Agar $Ax$ terdefinisi, x harus $3 \times 1$. Domainnya $R^3$).

(b) Jika A adalah matriks $m \times n$, maka kodomain transformasi $T_A$ adalah $R^n$.
[cite_start]**Answer:** False [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Hasil $Ax$ adalah $m \times 1$. Kodomainnya $R^m$).

(c) Jika $T(x_1, x_2)=(x_1^2, x_2)$, maka T adalah transformasi matriks.
[cite_start]**Answer:** False [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Transformasi matriks harus linear, $T(kx) = k T(x)$ tidak terpenuhi karena $x_1^2$).

(d) Jika $T(x_1, x_2, x_3)=(x_1+2x_2, x_3)$ dan $T(u+v)=T(u)+T(v)$ untuk semua skalar k dan l dan semua vektor u dan v di $R^3$, maka T adalah transformasi matriks.
[cite_start]**Answer:** True [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Pernyataan tersebut mengatakan T memenuhi sifat aditivitas dan (secara implisit dengan $l=0$) homogenitas, yang merupakan syarat linearitas. Setiap transformasi linear dari Rn ke Rm adalah transformasi matriks). *Perhatian: Teks soal sedikit aneh menyebut skalar k dan l tapi hanya menggunakan T(u+v)*.

(e) Hanya ada satu transformasi matriks $T: R^n \to R^m$ sedemikian sehingga $T(-x)=-T(x)$ untuk setiap vektor di $R^n$.
[cite_start]**Answer:** False [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Properti $T(-x)=-T(x)$ adalah konsekuensi dari homogenitas $T(kx)=kT(x)$ dengan $k=-1$. Banyak transformasi linear memenuhi ini).

(f) Hanya ada satu transformasi matriks $T: R^n \to R^m$ sedemikian sehingga $T(x+y)=T(x)+T(y)$ dan $T(kx)=kT(x)$ untuk semua vektor x dan y di $R^n$.
[cite_start]**Answer:** False [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini adalah definisi transformasi linear. Ada banyak transformasi linear yang berbeda).

(g) Jika b adalah vektor tak-nol di $R^n$, maka $T(x)=x+b$ adalah operator matriks pada $R^n$.
[cite_start]**Answer:** False [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Ini adalah translasi. Operator matriks harus linear, dan transformasi linear harus memetakan vektor nol ke vektor nol, tapi $T(0)=0+b=b \ne 0$).

(h) Matriks $[\begin{smallmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{smallmatrix}]$ adalah matriks standar untuk rotasi.
[cite_start]**Answer:** True [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ini adalah matriks rotasi standar di R2).

(i) Matriks standar refleksi terhadap sumbu koordinat di ruang-2 memiliki bentuk $[\begin{smallmatrix}a&0\\ 0&b\end{smallmatrix}]$, di mana $a=\pm 1$ dan $b=\pm 1$.
[cite_start]**Answer:** True [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Refleksi thd sumbu y: $a=-1, b=1$. Refleksi thd sumbu x: $a=1, b=-1$).

---

## Exercise Set 4.10

(a) Jika $T_1: R^n \to R^m$ dan $T_2: R^m \to R^k$, maka $T_1 \circ T_2$ adalah transformasi matriks.
[cite_start]**Answer:** False [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Komposisinya $T_2 \circ T_1$, dari $R^n$ ke $R^k$).

(b) Jika $T_1: U \to V$ dan $T_2: V \to W$ adalah transformasi linear, dan jika $T_1$ tidak satu-satu, maka $T_2 \circ T_1$ juga tidak satu-satu.
[cite_start]**Answer:** True [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika $T_1$ tidak satu-satu, ada $u \ne v$ dengan $T_1(u)=T_1(v)$. Maka $T_2(T_1(u)) = T_2(T_1(v))$, sehingga $T_2 \circ T_1$ tidak satu-satu).

(c) Jika $T: R^n \to R^n$ adalah transformasi matriks satu-satu, maka tidak ada vektor berbeda x dan y yang memenuhi $T(x-y)=0$.
[cite_start]**Answer:** True [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika T satu-satu, kernelnya hanya {0}. $T(x-y)=0$ berarti $x-y$ ada di kernel. Maka $x-y=0$, jadi $x=y$).

(d) Jika $T: R^n \to R^n$ adalah transformasi matriks dan $T(0)=0$, maka T satu-satu.
[cite_start]**Answer:** False [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Semua transformasi linear memetakan 0 ke 0. Contoh yang tidak satu-satu: proyeksi).

(e) Jika $T: R^n \to R^n$ adalah transformasi matriks dan matriks standar untuk T invertibel, maka T satu-satu.
[cite_start]**Answer:** True [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Jika A invertibel, $Ax=0$ hanya punya solusi $x=0$. Kernel T hanya {0}).

(f) Jika $T: R^n \to R^n$ adalah transformasi matriks dan $T(e_1), T(e_2), \dots, T(e_n)$ linear independen, maka T satu-satu.
[cite_start]**Answer:** True [cite: 2918]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". ($T(e_i)$ adalah kolom-kolom matriks standar A. Jika kolom-kolomnya independen, A invertibel, maka T satu-satu).

---

## Exercise Set 4.11

(a) Citra (image) dari persegi satuan di bawah operator matriks satu-satu adalah persegi.
[cite_start]**Answer:** False [cite: 2927]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Bisa jadi jajaran genjang, contoh: shear).

(b) Operator matriks $2 \times 2$ yang invertibel memiliki efek geometris berupa suksesi shear, kompresi, ekspansi, dan refleksi.
[cite_start]**Answer:** True [cite: 2927]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Matriks invertibel adalah produk matriks elementer, dan setiap matriks elementer merepresentasikan salah satu operasi geometris tersebut).

(c) Citra (image) dari garis di bawah operator matriks satu-satu adalah garis.
[cite_start]**Answer:** True [cite: 2927]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Operator matriks adalah transformasi linear, dan transformasi linear memetakan garis ke garis atau titik. Karena satu-satu, tidak mungkin ke titik).

(d) Setiap operator refleksi pada $R^2$ adalah inversnya sendiri.
[cite_start]**Answer:** True [cite: 2927]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Merefleksikan dua kali mengembalikan ke posisi semula).

(e) Matriks $[\begin{smallmatrix}1&1\\ 1&1\end{smallmatrix}]$ merepresentasikan refleksi terhadap garis.
[cite_start]**Answer:** False [cite: 2927]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Matriks ini singular, determinannya 0. Refleksi adalah transformasi invertibel).

(f) Matriks $[\begin{smallmatrix}1&-2\\ 2&1\end{smallmatrix}]$ merepresentasikan shear.
[cite_start]**Answer:** False [cite: 2928]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "False". (Matriks shear memiliki determinan 1 dan biasanya salah satu diagonalnya 1).

(g) Matriks $[\begin{smallmatrix}1&0\\ 0&3\end{smallmatrix}]$ merepresentasikan ekspansi.
[cite_start]**Answer:** True [cite: 2928]
**Penjelasan (Justifikasi dari buku):** Buku hanya menyatakan "True". (Ekspansi di arah y dengan faktor 3).

---