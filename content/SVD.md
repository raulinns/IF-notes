# Singular Value Decomposition (SVD) (Bagian 1)

## Dekomposisi Matriks

**Dekomposisi matriks** adalah proses memfaktorkan sebuah matriks, misalnya $A$, menjadi hasil kali dari sejumlah matriks lain, $A = P_1 \times P_2 \times \dots \times P_k$. Beberapa metode dekomposisi meliputi LU, QR, dan Singular Value Decomposition (SVD).

SVD diperlukan karena metode diagonalisasi $A=PDP^{-1}$ hanya berlaku untuk matriks **bujursangkar** ($n \times n$). SVD memungkinkan pemfaktoran untuk **matriks non-bujursangkar** ($m \times n$), yang tidak memiliki nilai eigen.

---

## Formula SVD dan Matriks Pembentuk

Metode SVD memfaktorkan matriks $A$ berukuran $m \times n$ menjadi perkalian tiga matriks ortogonal dan satu matriks diagonal:

$$
A = U \Sigma V^{T}
$$

* **$U$**: Matriks **ortogonal** $m \times m$. Kolom-kolomnya adalah **vektor-vektor singular kiri** ($u_i$).
* **$V$**: Matriks **ortogonal** $n \times n$. Kolom-kolomnya adalah **vektor-vektor singular kanan** ($v_i$).
* **$\Sigma$**: Matriks $m \times n$ yang elemen-elemennya nol, kecuali pada **diagonal utama** yang diisi dengan nilai-nilai singular ($\sigma$).

### Matriks Ortogonal
* **Matriks Ortogonal** adalah matriks persegi yang kolom-kolomnya saling **ortogonal** (hasil kali titik sama dengan 0).
* Jika kolom-kolomnya juga merupakan vektor satuan (norma = 1), matriks tersebut disebut **matriks ortonormal**.
* Sifat kunci matriks ortogonal ($Q$): $Q^{T}Q = I$, yang berarti inversnya adalah transposnya: $Q^{-1} = Q^{T}$.

---

## Nilai-nilai Singular ($\sigma$)

**Nilai-nilai singular** ($\sigma_i$) dari matriks $A$ adalah akar kuadrat dari nilai-nilai eigen ($\lambda_i$) dari matriks $A^T A$.

1.  Hitung matriks $A^T A$.
2.  Cari nilai-nilai eigen dari $A^T A$: $\lambda_1, \lambda_2, \dots, \lambda_n$. Nilai eigen ini selalu nonnegatif.
3.  Nilai singular adalah:
    $$
    \sigma_i = \sqrt{\lambda_i}
    $$
4.  Nilai-nilai singular diurutkan dari besar ke kecil: $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_n \ge 0$.

## Prosedur Perhitungan SVD

Misalkan $\text{rank}(A) = k$, yaitu banyaknya nilai eigen tak-nol dari $A^T A$.

1.  **Menentukan $V$ (Matriks Singular Kanan)**:
    * Cari vektor-vektor eigen ($v_i$) dari $A^T A$.
    * Normalisasi $v_i$ dan susun sebagai kolom matriks $V$, diurutkan sesuai nilai $\sigma_i$ yang berkorespondensi.

2.  **Menentukan $\Sigma$ (Matriks Nilai Singular)**:
    * Bentuk matriks $\Sigma$ berukuran $m \times n$.
    * Tempatkan nilai-nilai singular tak-nol $\sigma_1, \sigma_2, \dots, \sigma_k$ pada diagonal utama.

3.  **Menentukan $U$ (Matriks Singular Kiri)**:
    * Hitung vektor singular kiri ($u_i$) untuk $i=1$ sampai $k$ menggunakan rumus:
        $$
        u_i = \frac{1}{\sigma_i} A v_i
        $$
    * Vektor $\{u_1, u_2, \dots, u_k\}$ akan membentuk basis ortonormal untuk ruang kolom ($\text{col}(A)$).
    * Jika $m > k$, perluas himpunan $\{u_1, u_2, \dots, u_k\}$ untuk membentuk basis ortonormal bagi $R^m$ (sehingga $U$ menjadi matriks $m \times m$).