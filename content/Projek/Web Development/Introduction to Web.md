## Internet
Internet adalah jaringan komputer yang saling berkomunikasi. Internet digunakan untuk mentransfer data dari sebuah titik ke titik lainnya. Pada awalnya, hanya terdapat dua titik dalam internet, yaitu Harvard dan MIT. Sekarang, titik ini sudah semakin banyak dan berada di mana-mana di dunia. 

## Routers
Router adalah sebuah komputer/server dengan tujuan untuk memindahkan (*route*) informasi dari 1 titik ke titik lainnya. Untuk *route* atau memindahkan data dari satu tempat ke tempat lainnya, dibutuhkan sebuah *routing decision*. Inilah cara program untuk memindahkan data dari titik A ke titik B.

Biasanya terdapat lebih dari satu jalur yang dapat diambil dari titik A ke titik B. Misal, jika suatu jalur tertutup (misal karena *router*-nya mati), data bisa melewati jalur lain. Paket data berpindah dari router ke router lainnya hingga akhirnya mencapai titik akhirnya. Dalam hal ini, sebuah protokol yang menentukan jalur dari titik A ke titik B ialah **TCP/IP**. 

## IP
IP atau *Internet Protocol* adalah sebuah protokol yang memberikan alamat bagi seluruh server di dunia. Setiap komputer memiliki alamat IP (*IP Address*) mereka masing-masing. *IP Address* memiliki format `#.#.#.#`. Dengan tiap `#` bertipe integer, sehingga satu `#` dapat bernilai `0..256` dengan ukuran 8 bit atau 1 byte. Sehingga setiap *IP Address* menggunakan 32 bit atau 4 byte. Ini adalah format IP versi keempat (**IPv4**). Dalam **IPv4** ini total *IP Address* yang dapat digunakan adalah sejumlah $2^{32}$ atau sekitar 4 miliar. Namun, sekarang terdapat IPv6 yang menggunakan 128 bit dan dapat mengakomodasi lebih banyak *IP Address* lagi. 

Dalam hal ini, server  dapat berfungsi sebagai *router server* yang memindahkan "paket data" dari satu titik ke titik lain. Data dikirimkan dari titik A ke titik B menggunakan sebuah paket.  Paket data ini terstruktur sebagai berikut.
```
0                   1                   2                   3  
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version|  IHL  |Type of Service|          Total Length         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Identification        |Flags|      Fragment Offset    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Time to Live |    Protocol   |         Header Checksum       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Source Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Destination Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

Setiap paket data sudah terstandardisasi dan berisi informasi-informasi yang dikirimkan bersamaan dengan paket data, dengan tujuan mempermudah pengiriman paket. 

Salah satu isi dari paket ini adalah alamat tujuan dan alamat pengirim. Tidak seperti dunia nyata di mana jarak terdekat antar dua titik adalah garis lurus, terkadang router bisa memutar-mutar, karena beberapa faktor, seperti kecepatan internet, router yang rusak, atau server yang sibuk.

## TCP
Dalam praktiknya, sebuah file yang cukup besar bisa jadi tidak dapat dikirimkan dalam satu paket. Sehingga, file ini perlu dipecah menjadi beberapa paket untuk dikirimkan . **TCP**  atau *Transmission Control Protocol* membantu mencatat ukuran dari paket yang terbagi, sehingga saat diterima urutan dan ukuran dari sebuah file tetap sama dengan saat dikirim. TCP juga memastikan paket data yang diterima lengkap sesuai dengan yang dikirimkan. 

Selain itu, TCP juga mendefinisikan sebuah protokol untuk *ports*. *Ports* adalah *identifier* numerik unik yang spesifik diberikan kepada masing-masing *internet service provider*. Beberapa *ports* yang dijadikan ketetapan adalah 80 untuk HTTP, 443 untuk HTTPS, 25 untuk email, 53 untuk DNS, dan seterusnya. 

Dalam dunia nyata, sebuah server dapat melakukan banyak pekerjaan untuk kita, misal email, *web*, *video conference*, dan lain-lain. *Port number* digunakan untuk menentukan *service* atau layanan apa yang akan digunakan untuk menangani sebuah *request*. 

TCP/IP bersamaan memastikan pengguna mendapaatkan *IP address* yang unik, memastikan pengiriman data antara dua poin valid secara urutan dan service yang diinginkan. 

## DNS
Untuk kenyamanan dan keamanan pengguna, *IP address* tidak selalu, bahkan tidak biasa digunakan untuk mengakses suatu *service*. Misal, kita tidak mengakses **google** dengan mengetik *IP Address* dari **google**, tetapi kita mengaksesnya dengan nama domain **google.com**.

Nama domain ini dikumpulkan dan diletakkan di sebuah server bernama **DNS server**. **DNS** atau *Domain Name System*  server berfungsi untuk mentranslasikan *IP Address* menjadi nama domain. Kita dapat menganggap *DNS Server* ini berbentuk tabel 2 kolom yang berisi *Fully Qualified Domain Name* dan *IP Address*. 

*DNS server* akan berisi baris yang sangat banyak, karena nama-nama domain di dunia juga sangat banyak. Satu *DNS server* tidak akan dapat menyimpan seluruh nama domain yang tersedia. Untuk itu, *DNS server* juga memiliki kemampuan untuk memanggil *DNS server* lain secara rekursif, hingga ia menemukan nama domain yang dicari. Sehingga, jika nama domain tersebut tidak diketahui oleh satu *DNS server*, setidaknya *DNS server* ini mengetahui DNS server mana yang memiliki *IP address* dari nama domain yang dicari. 

Saat kita membeli atau menyewa nama domain. Hal yang terjadi adalah kita meminta agar nama domain kita dicantumkan di satu atau beberapa *DNS server* sehingga dapat diakses oleh pengguna di internet. Walau begitu, untuk keperluan desain, biasanya perangkat kita sudah menyimpan *IP Address* dari nama domain yang sudah pernah diakses sebelumnya, sehingga perangkat tidak perlu meminta ke *DNS server* secara terus menerus (*cached*). 

## DHCP
**DHCP** atau *Dynamic Host Configuration Protocol* adalah protokol yang berfungsi untuk memberikan sebuah perangkat (ketika dinyalakan) sebuah *IP Address*. Dahulu, *IP Address* secara manual oleh teknisi yang memegang dokumen berisi *IP Address* yang kosong yang dapat diberikan ke sebuah perangkat. Hal ini tidak efektif, sehingga diciptakan DHCP untuk memberikan *IP Address* secara otomatis  yang berlaku untuk kurun waktu tertentu kepada suatu perangkat yang belum memiliki *IP Address* atau *IP Address* sudah tidak berlaku (*expired*). *DHCP server* juga memberitahu perangkat untuk *DNS server* mana yang dapat digunakan oleh perangkat tersebut. *DHCP server* juga memberi tahu *IP Address* dari *default gateaway* yang dapat digunakan oleh sebuah perangkat. *Default gateaway* adalah *router* yang digunakan secara *default* oleh sebuah perangkat. 

## HTTP dan HTTPS
**HTTP** atau *Hypertext Transfer Protocol* mengatur bagaimana *web browser* dan *web server* berinteraksi. **HTTPS** merupakan versi *secure* atau aman dari HTTP. **HTTPS** menggunakan enkripsi dan data yang diacak saat data dikirim, sehingga saat pengguna mengakses sebuah *web page* hanya pengguna yang mengetahui apa yang diakses, terlepas dari nama domain atau *IP Address* dari *website* tersebut.

## URL
**URL** atau *uniform resource locator* adalah *address* yang kita gunakan untuk mengakses *web*. Misal: `https://www.example.com`. 

Prefix `https://` dan `http://` wajib ada dalam mengakses sebuah *web*. Walau dalam implementasinya, prefiks ini ditambahkan secara otomatis oleh *web browser*. Biasanya sebuah URL juga memiliki *path* yang berarti sebuah folder atau file yang juga terdapat di dalam *server* yang dapat diakses oleh pengguna. Misal: `https://www.example.com/path` atau `https://www.example.com/path/file.html`.

Dalam konteks ini, *world wide web* atau *web* mengacu kepada nama *host* atau nama *server* spesifik dalam sebuah perusahaan yang menyediakan layanan internet (*web server*).  Sedangkan, `example.com` inilah yang kita sebut nama domain. `.com` ini adalah sebuah *Top Level Domain* atau TLD. TLD mengindikasikan jenis domain, Misal di Amerika Serikat, `.com` berarti *commercial*, `.gov` berarti *government*, `.org` berarti *organization*,  dan seterusnya. TLD sekarang berkembang jauh lebih banyak lagi dan jarangkali mengindikasikan asal domain atau server. TLD bisa saja hanya disewa dari server tersebut. Setiap negara pun memiliki TLD-nya masing-masing yang terdiri dari dua karakter, misal `.us` untuk Amerika Serikat, `.uk` untuk United Kingdom, `.jp` untuk Jepang, `.id` untuk Indonesia, dan lain-lain. 

Selain path, **URL** juga dapat berisi *key* atau parameter dari sebuah *web page*. Misal, ketika pengguna melakukan *searching* terhadap suatu hal di `https://www.google.com/` (misalkan Sekolah), pengguna akan dialihkan ke URL `https://www.google.com/search?q=Sekolah`. `q` di sini adalah *key* yang berarti *query* yang ingin dicari dan `Sekolah` adalah nilai dari *key* tersebut.

## Request
Kita mengetahui HTTP atau HTTPS adalah sebuah protokol atau konvensi yaang sudah umum untuk interaksi antar perangkat di internet. Misal, HTTP adalah protokol interaksi antara *web browser* dengan *web server*. Interaksi ini menggunakan konvensi kode *request*, seperti **GET**, **POST**, dan lain-lain.
- **GET** berarti sebuah *web browser* meminta informasi dari sebuah *web server*. 
- **POST** berarti *web browser* mengirimkan informasi ke tempat lain.

Jadi, ketika kita mengakses sebuah *website*, *web browser* mengirimkan sebuah *request* **GET** kepada *web server* tempat *web* tersebut berada. Lalu, mengirimkan *web page* terkait ke browser kita.

## Status Code
Untuk mengirimkan status hasil dari sebuah *request*, *web* menggunakan beberapa angka konvensi, misal:
- 200 untuk sukses atau `OK`
- 301 untuk `Redirrect`
- 302 untuk `Found`
- 304 untuk `Not Modified`
- 307 untuk `Temporary Redirrect`
- 401 untuk `Unauthorized`
- 404 untuk `Not Found`
- 500 untuk `Internal Server Error`
- 503 untuk `Service Unavailable`
- dan lain-lain.