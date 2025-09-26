---
cssclasses:
  - callouts-outlined
---
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
