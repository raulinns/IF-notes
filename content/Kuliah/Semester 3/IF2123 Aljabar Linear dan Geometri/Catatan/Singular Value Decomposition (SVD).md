# Dekomposisi Matriks
Mendekomposisi matriks artinya memfaktorkan sebuah matriks. Misalnya $A$ dapat disusun dari perkalian matriks, sedemikian sehingga:
$$
A = P_1 \times P_2 \times \dots \times P_k
$$

Terdapat beberapa metode untuk mendekomposisi matriks:
1. Metode [[Dekomposisi LU]]
2. Metode  [[Dekomposisi QR]]
3. Metode Dekomposisi Nilai Singular (SVD)

# Singular Value Decomposition
> SVD adalah faktorisasi yang dapat diterapkan pada **semua matriks** $m \times n$ (bisa non-bujursangkar). 

SVD memfaktorkan matriks $\mathbf{A}$ ke dalam bentuk:

$$
\mathbf{A} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^T
$$

> Notes: beberapa konsep dan istilah yang ada materi ini belum dijelaskan sebelumnya, jadi wajar untuk merasa bingung. Oleh karena itu, sebelum masuk lebih jauh ke dalam SVD, kita akan membahas dasar teorinya terlebih dahulu

Di mana:
* $A$ adalah matriks $m \times n$ yang ingin kita dekomposisi (dengan rank $r$).
* $U$ adalah matriks ortogonal $m \times m$. Kolom-kolomnya ($\mathbf{u}_j$) disebut **vektor singular kiri**.
* $V$ adalah matriks ortogonal $n \times n$. Kolom-kolomnya ($\mathbf{v}_j$) disebut **vektor singular kanan**.
* $\Sigma$ (Sigma) adalah matriks "diagonal" $m \times n$ yang elemen diagonal utamanya adalah nilai-nilai singular dari matriks $A$

## Matriks Ortogonal dan Matriks Ortonormal
Matriks ortogonal (atau matriks ortonormal) adalah matriks persegi yang baris-baris/kolom-kolomnya adalah vektor ortonormal (vektor yang saling ortogonal satu sama lain (hasil kali titik sama dengan 0) dan memiliki panjang/*magnitude* sebesar 1.

>Notes: Sepertinya ada kesalahan terminologi pada slide [[21-Singular-value-decomposition-Bagian1-2025.pdf]]. Beberapa sumber lain, termasuk buku, mengatakan bahwa matriks ortogonal dan matriks ortonormal adalah hal yang sama.


Jika $Q$ adalah matriks ortogonal berukuran $n \times n$, maka
$$
Q^T Q = Q Q^T = I_{n \times n}
$$

## Matriks Simetris dan Diagonalisasi Ortogonal
Sebuah matriks $M$ dikatakan simetris jika ia sama dengan transposnya ($M = M^T$). Jika $A$ adalah matriks $n \times n$, maka pernyataan tersebut adalah ekuivalen (jika salah satu pernyataan benar, maka lainnya juga benar):
1. $A$ dapat didiagonalisasi secara ortogonal
2. $A$ memiliki himpunan ortonormal dari $n$ vektor eigen
3. $A$ merupakan matriks simetris

Maka, dapat dikatakan bahwa:
> Jika $A$ adalah matriks simetris, maka setiap vektor eigen dari ruang eigen yang berbeda bersifat ortogonal.

Mendiagonalisas matriks secara ortogonal adalah kasus khusus dari diagonalisasi, di mana matriks $P$ yang digunakan adalah sebuah matriks ortogonal.

Maka, untuk mendiagonalisasi matriks secara ortogonal, kita hanya perlu mencari basis dari vektor eigen matriks $A$, karena himpunan vektor eigen yang dihasilkan dari matriks $A$ sudah merupakan himpunan vektor ortogonal.

## Diagonal Utama Matriks $m \times n$
Diagonal utama sebuah matriks biasanya didefinisikan pada matriks persegi berukuran $n \times n$. Untuk matriks $m \times n$, diagonal utama matriks didefinisikan pada garisd yang dimulai pada sudut kiri ats terus ke bawah matriks sejauh mungkin.

Definisi akhirnya, diagonal utama matriks $A$ dengan ukuran $m \times n$ adalah seluruh elemen $a_{ii}$ pada matriks $A$.

>[!img-caption] ![[Pasted image 20251113051546.png]]

## Nilai Singular Matriks
Misalkan $A$ adalah matriks $m \times n$. Jika $\lambda_1, \lambda_2, \dots, \lambda_n$ adalah nilai-nilai eigen dari $A^TA$, maka
$$
\sigma_1 = \sqrt{\lambda_1}, \sigma_2 = \sqrt{ \lambda_2 }, \dots, \sigma_n = \sqrt{ \lambda_n }
$$

> Teorema:
> Jika $A$ adalah matriks $m \times n$, maka:
> - $A^TA$ dapat didiagonalisasi secara ortogonal
> - Nilai-nilai eigen untuk $A^TA$ tidak pernah negatif.

# Menentukan SVD
JIka $A$ adalah matriks $m \times n$ dengan *rank* $k$, maka $A$ dapat difaktorkan menjadi

$$
A = U \Sigma V^T = 
\begin{bmatrix}
u_1 & u_2 & \dots & u_k | u_{k+1} & \dots &  u_n
\end{bmatrix}
\begin{bmatrix}
\sigma_1 & 0 & \dots & 0  & \dots \\
0 & \sigma_2 & \dots & 0  & \dots\\
\vdots & \vdots & \ddots & \vdots & \dots \\
0 & 0 & \dots & \sigma_k  & \dots \\
\vdots  & \vdots &  \vdots & \vdots & \ddots \\
\end{bmatrix}
\begin{bmatrix}
v_1^T \\
v_2^T \\
\vdots \\
v_k^T \\
\hline
v_{k+1}^T \\
\vdots \\
v_n^T
\end{bmatrix}
$$

>[!img-caption] ![[Pasted image 20251113051634.png]]

Setelah kita mengenal istilah/konsep di atas, kita dapat mengartikan bahwa:
- $V$ adalah matriks yang mendiagonalisasi $A^TA$ secara ortogonal. (1). $V^T$ adalah transpos dari matriks $V$
- $\Sigma$ adalah matriks yang komponen diagonal utamanya adalah nilai-nilai singular dari matriks $A$ dengan susunan dari besar ke kecil. Nilai singular dari $\Sigma$ adalah akar pangkat dua dari nilai-nilai eigen tak nol dari $A^T A$.
- $U$ adalah matriks m

(1) Ingat bahwa untuk mendiagonalisasi sebuah vektor $A$, kita memerlukan vektor $P$ yang berisi himpunan vektor basis dari ruang eigen  $A$, serta vektor $D$ yang diagonal utamanya berisi nilai eigen dari vektor $A$. Sehingga, cara mencari matriks $V$ adalah dengan mencari himpunan vektor eigen dari matriks $A$ dan menormalisasikannya (membaginya dengan panjang vektor). 

(2)
**Langkah-langkah untuk menemukan V, $\Sigma$, dan U:**

1.  **Cari $\mathbf{A}^T\mathbf{A}$:** Hitung matriks $n \times n$, $\mathbf{A}^T\mathbf{A}$. Matriks ini dijamin simetris.
2.  **Cari V (Vektor Singular Kanan):**
    * Karena $\mathbf{A}^T\mathbf{A}$ simetris, kita bisa mendiagonalisasinya secara ortogonal.
    * Cari **nilai-nilai eigen** dari $\mathbf{A}^T\mathbf{A}$. Urutkan dari yang terbesar ke terkecil: $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n \ge 0$. (Eigenvalue dari $\mathbf{A}^T\mathbf{A}$ tidak pernah negatif).
    * Cari **basis ortonormal** dari vektor eigen ($\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n$) yang bersesuaian dengan nilai eigen tersebut.
    * Matriks **V** adalah matriks yang kolom-kolomnya adalah vektor-vektor eigen ini: $\mathbf{V} = [\mathbf{v}_1 | \mathbf{v}_2 | \dots | \mathbf{v}_n]$.
3.  **Cari $\Sigma$ (Nilai Singular):**
    * **Nilai singular** adalah akar kuadrat dari nilai eigen yang ditemukan di Langkah 2: $\sigma_j = \sqrt{\lambda_j}$.
    * Bentuk matriks $\mathbf{\Sigma}$ yang berukuran $m \times n$. Isi entri diagonal $\Sigma_{jj}$ dengan $\sigma_j$ (sesuai urutan $\lambda_j$). Isi semua entri lainnya dengan 0.
4.  **Cari U (Vektor Singular Kiri):**
    * Misalkan $r$ adalah jumlah nilai singular yang tidak-nol (ini adalah rank dari **A**).
    * Untuk $j = 1$ sampai $r$, hitung $r$ kolom pertama dari **U** menggunakan rumus:
        $$
        \mathbf{u}_j = \frac{1}{\sigma_j} \mathbf{A}\mathbf{v}_j
        $$
    * Himpunan $\{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ adalah basis ortonormal untuk ruang kolom $\text{Col}(\mathbf{A})$.A
    * Jika $m > r$, kita perlu mencari $\mathbf{u}_{r+1}, \dots, \mathbf{u}_m$. Vektor-vektor ini adalah **basis ortonormal untuk $N(\mathbf{A}^T)$** (ruang nol dari $\mathbf{A}^T$), yang merupakan komplemen ortogonal dari $\text{Col}(\mathbf{A})$.
    * Matriks **U** adalah matriks yang kolom-kolomnya adalah vektor-vektor ini: $\mathbf{U} = [\mathbf{u}_1 | \dots | \mathbf{u}_r | \mathbf{u}_{r+1} | \dots | \mathbf{u}_m]$.

---

## 3. SVD Tereduksi dan Ekspansi SVD

### SVD Tereduksi (Reduced SVD)
SVD "penuh" ($\mathbf{A} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^T$) seringkali memiliki banyak kolom atau baris nol di $\mathbf{\Sigma}$ (jika $m \neq n$ atau jika $\mathbf{A}$ singular) yang tidak berkontribusi pada $\mathbf{A}$.

**SVD Tereduksi** menghilangkan nol-nol ini dengan "memangkas" matriks:

$$
\mathbf{A} = \mathbf{U}_r \mathbf{\Sigma}_r \mathbf{V}_r^T
$$

* $\mathbf{U}_r$ adalah matriks $m \times r$ yang berisi $r$ kolom pertama dari **U**.
* $\mathbf{\Sigma}_r$ adalah matriks diagonal $r \times r$ yang berisi $r$ nilai singular tidak-nol.
* $\mathbf{V}_r$ adalah matriks $n \times r$ yang berisi $r$ kolom pertama dari **V**.

### Ekspansi SVD (SVD Expansion)
Bentuk SVD tereduksi dapat ditulis sebagai jumlahan dari $r$ buah matriks rank-1:

$$
\mathbf{A} = \sigma_1 \mathbf{u}_1 \mathbf{v}_1^T + \sigma_2 \mathbf{u}_2 \mathbf{v}_2^T + \dots + \sigma_r \mathbf{u}_r \mathbf{v}_r^T
$$

Setiap suku $\sigma_i \mathbf{u}_i \mathbf{v}_i^T$ adalah matriks $m \times n$ dengan rank 1. Suku pertama ($\sigma_1 \mathbf{u}_1 \mathbf{v}_1^T$) adalah aproksimasi rank-1 terbaik untuk matriks **A**.

---

## 4. SVD dan Empat Ruang Submatriks Fundamental

SVD menyediakan basis ortonormal untuk keempat ruang submatriks fundamental dari **A** (dengan rank $r$):

| Ruang Submatriks | Basis Ortonormal (dari SVD) |
| :--- | :--- |
| **Ruang Baris** ($\text{Row}(\mathbf{A})$) | $\{\mathbf{v}_1, \dots, \mathbf{v}_r\}$ (Kolom $r$ pertama dari **V**) |
| **Ruang Nol** ($N(\mathbf{A})$) | $\{\mathbf{v}_{r+1}, \dots, \mathbf{v}_n\}$ (Kolom $n-r$ terakhir dari **V**) |
| **Ruang Kolom** ($\text{Col}(\mathbf{A})$) | $\{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ (Kolom $r$ pertama dari **U**) |
| **Ruang Nol Kiri** ($N(\mathbf{A}^T)$) | $\{\mathbf{u}_{r+1}, \dots, \mathbf{u}_m\}$ (Kolom $m-r$ terakhir dari **U**) |

---

## 5. Aplikasi SVD

SVD adalah salah satu alat paling kuat dalam aljabar linear terapan.

### Pseudo-Inverse (Invers Semu)
Jika matriks **A** tidak persegi atau tidak invertible, kita tidak bisa mencari $\mathbf{A}^{-1}$. Namun, kita bisa mendefinisikan **pseudo-inverse** $\mathbf{A}^+$:

Jika SVD dari **A** adalah $\mathbf{A} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^T$, maka:
$$
\mathbf{A}^+ = \mathbf{V}\mathbf{\Sigma}^+\mathbf{U}^T
$$
di mana $\mathbf{\Sigma}^+$ adalah matriks $n \times m$ yang diperoleh dengan mengambil kebalikan ($1/\sigma_i$) dari setiap nilai singular tidak-nol di $\mathbf{\Sigma}$, dan kemudian mentranspos matriks $\mathbf{\Sigma}$ yang dihasilkan.

### Solusi Least-Squares
SVD menyediakan cara elegan untuk menyelesaikan masalah *least-squares* (mencari solusi "terbaik" untuk sistem $\mathbf{Ax}=\mathbf{b}$ yang inkonsisten). Solusi *least-squares* diberikan oleh:

$$
\mathbf{x} = \mathbf{A}^+ \mathbf{b}
$$

### Kompresi Citra (Image Compression)
Ekspansi SVD ($\mathbf{A} = \sum \sigma_i \mathbf{u}_i \mathbf{v}_i^T$) sangat ideal untuk kompresi. Nilai-nilai singular $\sigma_i$ seringkali menurun drastis.
* Dengan hanya menyimpan $k$ suku pertama (dengan $k < r$), kita mendapatkan **aproksimasi rank-k** dari matriks **A** yang sangat baik.
* Ini menghemat ruang penyimpanan secara signifikan dengan mengorbankan sedikit kualitas gambar.