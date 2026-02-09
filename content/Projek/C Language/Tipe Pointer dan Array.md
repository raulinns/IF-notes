Misalkan:
```C
int *ptr;
*ptr = 2;
```

Dalam C, penting untuk mengidentifikasi tipe oleh sebuah variabel yang ditunjuk oleh sebuah *pointer*. *Compiler* mengetahui berapa byte yang harus disalin dalam memori yang ditunjuk oleh `ptr`, karena sudah dideklarasikan bahwa `ptr` memiliki tipe `int`. Misalkan lagi, sebuah blok memori terdiri dari 10 integer berurutan. Katakan bahwa `ptr` merujuk pada integer pertama pada blok memori tersebut. Maka, saat kita menuliskan:
```C
ptr + 1;
```

*Compiler* dapat mengetahui bahwa *pointer* ini (misalkan berada pada alamat desimal 100) dan ditambahkan bukan 1 desimal, namun 1 blok alamat yang sesuai dengan tipe pointernya. Misal untuk mesin x32 (ukuran integer pada x32 adalah 4 byte), maka alamat akan menjadi 100 + 4 = 104 (desimal). Perhitungan ini dinamakan *pointer arithmetic*. Karena blok memori yang terdiri dari 10 integer berurutan secara definisi adalah sebuah array, ini membuka sebuah hubungan yang menarik antara array dan pointer.

Misalkan kita memiliki array berisikan enam integer sebagai berikut:
```c
int array[] = {1, 23, 17, 4, -5, 100};
```

Di sini, kita bisa merujuk kepada masing-masing anggota array dengan array\[0] sampai array\[5]. Namun, sebagai alternatif, kita juga bisa mengaksesnya menggunakan pointer sebagai berikut:
```c
int *ptr;
ptr = &array[0];
```

Baris kedua pada kode di atas menginstruksikan pointer untuk menunjuk kepada alamat dari elemen pertama di array. Hasilnya kita bisa menampilkan masing-masing elemen array menggunakan pointer dengan kode berikut:
```c
/* ... kode ... */
for (i = 0; i < 6; i++) {
	printf("array[%d] = %d\n", i, *(ptr + i));
}
```

Kode di atas akan memiliki hasil yang sama dengan
```c
for (i = 0; i < 6; i++) {
	printf("array[%d] = %d\n", i, array[i]);
}
```

Sebagai alternatif juga, kita dapat menuliskan: `ptr = &array[0];` sebagai
```
ptr = array;
```

Di sini, kita dapat menyimpulkan bahwa nama dari suatu array adalah alamat dari elemen pertama dalam sebuah array.
