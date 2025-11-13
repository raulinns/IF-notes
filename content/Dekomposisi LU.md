Matriks $A$ persegi non-singular dapat didekomposisi menjadi matriks segitiga bawah $L$ (*lower*) dan matriks segitiga atas $U$ (*upper*).

$$
\begin{align}
A &= LU \\
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & \dots & a_1n \\
a_{21} & a_{22} & a_{23} & \dots & a_2n \\
a_{31} & a_{32} & a_{33} & \dots & a_3n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & a_{n3} & \dots & a_{nn} \\
\end{bmatrix} &= 
\begin{bmatrix}
1 & 0 & 0 & \dots & 0 \\
l_{21} & 1 & 0 & \dots & 0 \\
l_{31} & l_{32} & 1 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & 0 \\
l_{n1} & l_{n2} & l_{n3} & \dots &  1
\end{bmatrix}
\begin{bmatrix}
u_{11} & u_{12} & u_{13} & \dots & u_{1n} \\
0 & u_{22} & u_{23} & \dots & u_{2n} \\
0 & 0 & u_{33} & \dots & u_{3n} \\
\vdots & \vdots & \vdots & \ddots  & \vdots \\
0 & 0 & 0 & \dots & u_{nn}
\end{bmatrix}
\end{align}
$$

> Catatan: Di dalam kelas dan di literatur lain, elemen diagonal utama matriks $L$ semuanya 1. Tetapi, di dalam buku [[Howard-Anton-Chris-Rorres-Elementary-Linear-Algebra-10th-Version.pdf]] elemen di dalam diagonal utama matriks $U$ yang semuanya 1. Perbedaan keduanya tidak masalah, karena hasil kali keduanya tetap sama dengan $A$. 

Memfaktorkan matriks $A$ menjad matriks $L$ dan $U$ dinamakan dekomposisi LU. Terdapat dua metode untuk melakukan dekomposisi LU:
1. Metode LU-Gauss, menggunakan metode eliminasi Gauss
2. Metode reduksi Crout, menggunakan kesamaan dua buah matriks.

# Metode LU-Gauss
