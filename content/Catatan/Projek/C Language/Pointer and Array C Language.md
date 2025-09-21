Digunakan untuk:
1. IF1210 Algoritma dan Pemrograman 1
2. IF1230 Organisasi dan Arsitektur Komputer

Source: 
3.  https://pdos.csail.mit.edu/6.828/2014/readings/pointers.pdf
4. https://www.geeksforgeeks.org/c/c-pointers/
#### Chapter 1: Apa itu Pointer?

Saat mendeklarasi sebuah variabel, kita memberitahu *compiler* dua hal, yaitu nama variabel dan tipe variabel. Misal:
``` C
int k;
```
Di sini *compiler* mengalokasi 2 byte memori untuk menaruh nilai dari integernya. *Compiler* juga membuat *symbol table* (*symtab*) dan menambahkan simbol ```k``` dan alamat relatifnya di memori di mana 2 byte tersebut disimpan. Lalu, setelah kita menambahkan nilai kepada variabel tersebut, misal:
```C
k = 2;
```

Saat baris ini dijalankan, nilai 2 akan disimpan pada memori yang sudah dialokasi untuk variabel ```k```. Dalam C, kita merujuk integer `k` sebagai "objek." Dalam artian, terdapat dua nilai yang diasosiasikan dengan objek `k`. Nilai pertama adalah nilai sesungguhnya dari variabel tersebut dan nilai lainnya adalah lokasi memori (alamat dari `k`).

Dalam C, objek adalah daerah yang sudah dinamakan di *storage* dan *lvalue* adalah ekspresi yang merujuk pada objek. Sedangkan, *rvalue* adalah nlai sesungguhnya yang disimpan di variabel. Misal:
``` C
int j, k;

k = 2;
j = 7; <-- line 1
k = j; <-- line 2
```

Dari kode di atas, *compiler* menginterpretasi `j` pada baris 1 sebagai alamat dari variabel `j` (*lvalue*) dan membuat kode untuk menyimpan nilai 7 pada alamat tersebut. Pada baris kedua, `j` diinterpretasikan sebagai *rvalue*. Artinya, `j` merujuk pada nilai yang disimpan pada memori yang dialokasikan untuk `j` (dalam hal ini `j` bernilai 7). Jadi, 7 disalin ke alamat yang dialokasikan untuk *lvalue* dari `k` .

Dalam praktiknya dibutuhkan sebuah variabel untuk menyimpan *lvalue* (alamat) dari sebuah variabel. Variabel disebut sebagai variabel ***pointer***. Kita mendeklarasikan *pointer* dengan menambahkan asterisk (\*) di depan nama sebuah variabel. Dalam C, kita juga menambahkan *pointer* sebuah tipe untuk merujuk pada tipe data yang disimpan dalam alamat yang kita simpan pada pointer. `int *ptr` atau `int* ptr` 

`ptr` adalah nama dari variabel. '\*' menginformasikan kepada *compiler* bahwa kita menginginkan variabel *pointer* untuk mengalokasikan berapa byte yang dibutuhkan untuk menyimpan alamat pada memory. `int` mengatakan bahwa kita ingin untuk menggunakan *pointer* utuk menyimpan alamat dari suatu integer. 

Saat kita menulis `int k;` kita tidak memberikan `k` sebuah nilai. Sama seperti hal itu, pada `int *ptr`, `ptr` juga tidak memiliki nilai. Artinya, kita tidak menyimpan sebuah alamat pada deklarasi tersebut. Dalam hal ini, `ptr` diinisialisasi dengan sebuah nilaiyang dijamin tidak menunjuk (*point*) pada objek atau fungsi C manapun. Dalam hal ini disebut sebagai *null pointer*. 

Misalkan kita ingin untuk menyimpan alamat dari variabel integer `k` pada `ptr`. Untuk melakukan hal ini kita menggunakan operator unary, yaitu &. 
```C
ptr = &k;
```

Apa yang dilakukan oleh operator & adalah mengambil *lvalue* (alamat) dari `k` dan menyalinnya kepada variabel *pointer* `ptr`. Hal ini kita namakan *referencing*. 

Untuk *dereferencing*, kita menggunakan operator asterisk \* yang digunakan sebagai berikut:
```C
*ptr = 7;
```
Ini akan menyalin nilai 7 pada alamat yang ditunjuk oleh `ptr`. Jika `ptr` menunjuk pada `k` (menyimpan alamat `k`), maka baris di atas akan mengatakan bahwa menetapkan nilai k dengan 7. Artinya, saat menggunakan \* kita merujuk kepada nilai yang ditunjuk oleh *pointer* `ptr` bukan nilai dari *pointer* itu sendiri (alamat yang disimpan pada pointer)

Contoh:
```C 
#include <stdio.h>

int main() {
    int k = 10;
    
    // Pointer Variable ptr that stores address of var 
    int* ptr = &k;
    
    // Directly accessing ptr will give us an address
    printf("%d", ptr);
    
    return 0;
}
```

```title:Output
0x7fffa0757dd4
```

![[Pasted image 20250904012404.png]]

#### Chapter 2: Tipe Pointer dan Array

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

#### Chapter 3: Pointer dan String