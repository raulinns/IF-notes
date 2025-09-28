> **Definisi**: Variabel random adalah sebuah fungsi yang memetakan setiap titik sampel dalam ruang sampel $S$ ke sebuah bilangan real $X(s)$.
  
Secara sederhana, variabel random mengubah hasil dari sebuah eksperimen (yang bisa berupa non-numerik, seperti 'Defektif' atau 'Normal') menjadi angka.

  

### Jenis Variabel Random

- **Variabel Random Diskrit**: Dihasilkan dari ruang sampel yang jumlah anggotanya terbatas atau tak hingga tapi dapat dihitung (seperti bilangan bulat). Contohnya: jumlah telur yang diletakkan ayam per bulan.

- **Variabel Random Kontinu**: Dihasilkan dari ruang sampel yang berisi jumlah tak hingga kemungkinan hasil, seperti titik pada sebuah segmen garis. Contohnya: waktu yang dibutuhkan untuk bermain golf.

  

---

  

## 2. Distribusi Peluang Diskrit

  

Distribusi ini menjelaskan bagaimana peluang tersebar di antara nilai-nilai yang mungkin dari sebuah variabel random diskrit.

  

### a. Fungsi Massa Peluang (Probability Mass Function - PMF)

Fungsi $f(x)$ adalah fungsi peluang dari variabel random diskrit X jika memenuhi syarat:

1.  $f(x) \ge 0$ 

2.  $\sum_{x} f(x) = 1$ 

3.  $P(X=x) = f(x)$ 

  

### b. Fungsi Distribusi Kumulatif (Cumulative Distribution Function - CDF)

Distribusi kumulatif $F(x)$ dari variabel random diskrit X didefinisikan sebagai peluang bahwa X akan mengambil nilai yang lebih kecil atau sama dengan $x$.

$$ F(x) = P(X \le x) = \sum_{t \le x} f(t), \quad \text{untuk } -\infty < x < \infty $$ 

  

Grafik dari fungsi distribusi kumulatif untuk variabel diskrit akan berbentuk seperti tangga.

  

---

  

## 3. Distribusi Peluang Kontinu

  

Untuk variabel kontinu, peluang pada satu titik spesifik adalah nol. Oleh karena itu, kita mendefinisikan peluang pada sebuah interval.

  

### a. Fungsi Kepadatan Peluang (Probability Density Function - PDF)

Fungsi $f(x)$ adalah fungsi densitas peluang untuk variabel kontinu X jika memenuhi syarat:

1.  $f(x) \ge 0$ untuk semua $x$ 

2.  $\int_{-\infty}^{\infty} f(x) dx = 1$ 

3.  Peluang X berada di antara a dan b dihitung dengan integral:

    $$ P(a < X < b) = \int_{a}^{b} f(x) dx $$ 

  

Ini berarti peluang adalah luas area di bawah kurva $f(x)$ antara titik a dan b.

  

### b. Fungsi Distribusi Kumulatif (CDF)

Untuk variabel kontinu, CDF $F(x)$ juga didefinisikan sebagai $P(X \le x)$. Hubungannya dengan PDF adalah:

-   $P(a < X < b) = F(b) - F(a)$ 

-   $f(x) = \frac{dF(x)}{dx}$ 

  

---

  

## 4. Distribusi Peluang Gabungan (Joint)

  

Ini digunakan ketika kita tertarik pada dua atau lebih variabel random secara bersamaan.

  

-   **Kasus Diskrit**: Fungsi massa peluang gabungan $f(x,y) = P(X=x, Y=y)$. Syaratnya:

    1.  $f(x,y) \ge 0$ 

    2.  $\sum_{x}\sum_{y} f(x,y) = 1$ 

-   **Kasus Kontinu**: Fungsi densitas peluang gabungan $f(x,y)$. Syaratnya:

    1.  $f(x,y) \ge 0$ 

    2.  $\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} f(x,y) dx dy = 1$ 

  

---

  

## 5. Distribusi Marginal & Bersyarat

  

### a. Distribusi Marginal

Distribusi marginal adalah distribusi peluang dari satu variabel saja, yang didapat dari distribusi gabungan.

-   **Diskrit**: $g(x) = \sum_{y} f(x,y)$ dan $h(y) = \sum_{x} f(x,y)$.

-   **Kontinu**: $g(x) = \int_{-\infty}^{\infty} f(x,y) dy$ dan $h(y) = \int_{-\infty}^{\infty} f(x,y) dx$.

  

### b. Distribusi Bersyarat

Distribusi bersyarat $f(y|x)$ adalah distribusi peluang dari Y dengan syarat nilai X sudah diketahui.

$$ f(y|x) = \frac{f(x,y)}{g(x)}, \text{ dengan } g(x)>0 $$ 

  

---

  

## 6. Bebas Statistik (Statistically Independent)

  

Dua variabel random X dan Y dikatakan bebas secara statistik jika dan hanya jika distribusi gabungan mereka sama dengan perkalian distribusi marginal masing-masing.

$$ f(x,y) = g(x) \cdot h(y) $$ 

Jika persamaan ini tidak terpenuhi, maka kedua variabel tersebut saling bergantung.