> Nilai Eigen dan Vektor Eigen adalah nilai dan vektor karakteristik dari matriks kuadrat. Kata "eigen" berasal dari Bahasa Jerman yang berarti "asli" atau "karakteristik".

# Definisi Nilai Eigen dan Vektor Eigen
Jika  adalah matriks , maka vektor **tidak-nol** $\mathbf{x}$ di $R^n$ disebut **vektor eigen** dari $A$ jika $A\mathbf{x}$ sama dengan perkalian suatu skalar $\lambda$ dengan . Persamaan fundamentalnya adalah:
$$
A\mathbf{x}=\lambda \mathbf{x}
$$

Di mana skalar $\lambda$ disebut **nilai eigen** dari $A$, dan $\mathbf{x}$ dinamakan vektor eigen yang berkoresponden dengan $\lambda$.

Secara geometris, operasi $A\mathbf{x} = \lambda \mathbf{x}$ menyebabkan vektor $\mathbf{x}$ menyusut atau memanjang dengan faktor $\lambda$.
* Arah vektor $\mathbf{x}$ tetap **sama** jika $\lambda$ positif.
* Arah vektor $\mathbf{x}$ menjadi **berkebalikan** jika $\lambda$ negatif.

#  Menghitung Nilai Eigen dan Vektor Eigen
Diberikan sebuah matriks $A$ berukuran $n \times n$. Perhitungan didasarkan pada modifikasi persamaan $A\mathbf{x} = \lambda \mathbf{x}$ menjadi sistem persamaan linear homogen:
$$
\begin{align*}
A\mathbf{x} &= \lambda \mathbf{x} \\
IA \mathbf{x} &= \lambda I \mathbf{x} \\
A \mathbf{x} &=  \lambda I \mathbf{x} \\
(\lambda I - A) \mathbf{x} &= \mathbf{0}
\end{align*}
$$

### 1. Menentukan Nilai Eigen ($\lambda$)
Agar sistem $(\lambda I - A)\mathbf{x} = \mathbf{0}$ memiliki solusi **tidak-nol** ($\mathbf{x} \ne \mathbf{0}$, yaitu vektor eigen), maka matriks koefisien haruslah singular, yang berarti determinannya harus nol.

Persamaan $\text{det}(\lambda I - A) = 0$ disebut **persamaan karakteristik** dari matriks $A$. Akar-akar dari persamaan polinomial ini, yaitu $\lambda$, dinamakan **nilai-nilai eigen**.

>  Perhatian: Tidak semua matriks memiliki nilai eigen. [cite_start]Matriks $A$ tidak memiliki nilai eigen jika persamaan karakteristiknya menghasilkan akar-akar imajiner (misalnya $\lambda^2 + 1 = 0$)[cite: 143, 149, 150].

### 2. Menentukan Vektor Eigen dan Ruang Eigen
Setelah nilai eigen $\lambda$ ditemukan, nilai tersebut disubstitusikan kembali ke dalam persamaan $(\lambda I - A)\mathbf{x} = \mathbf{0}$. Penyelesaian sistem ini akan menghasilkan vektor solusi $\mathbf{x}$.

* **Vektor Eigen:** Vektor $\mathbf{x}$ yang tidak-nol hasil solusi.
* **Ruang Eigen (Eigenspace)**: Himpunan semua vektor eigen yang berkoresponden dengan nilai $\lambda$ tertentu, ditulis sebagai $E(\lambda)$.
* **Basis Ruang Eigen**: Vektor-vektor bebas linear yang membangun ruang eigen $E(\lambda)$. Untuk menentukan vektor eigen yang spesifik, harus ditentukan terlebih dahulu basis ruang eigennya.

## Aplikasi Nilai Eigen dan Vektor Eigen
Konsep ini memiliki berbagai aplikasi di berbagai bidang:
* **Grafika komputer** dan *computer vision*.
* **Fisika** (getaran mekanis, aliran panas, mekanika kuantum).
* **Biologi** (dinamika populasi).
* **Sistem pendukung keputusan** dan **Ekonomi**.
