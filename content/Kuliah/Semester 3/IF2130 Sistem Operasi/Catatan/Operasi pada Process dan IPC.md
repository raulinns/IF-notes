Proses pada kebanyakan sistem dapat tereksekusi secara konkuren dan dapat dibuat/dihapus secara dinamis.
# Penciptaan Proses
Selama proses eksekusi, sebuah *process* dapat membuat beberapa *process* baru. Proses yang menciptakan disebut proses induk (*parent process*), dan proses baru disebut proses anak (*child processes*). Penciptaan proses ini membentuk *tree of processes*.  

Setiap proses diidentifikasi oleh pengenal proses unik (PID), yang biasanya berupa bilangan bulat. PID ini digunakan sebagai indeks untuk mengakses berbagai atribut proses di dalam _kernel_. Pada sistem Linux, proses `systemd` (yang selalu memiliki PID 1) berfungsi sebagai akar (_root parent process_) untuk semua proses pengguna dan merupakan proses pengguna pertama yang dibuat saat sistem melakukan _boot_.

>[!img-caption] ![[Pasted image 20251020051248.png]]

Secara umum, ketika sebuah proses menciptakan *child process*, proses itu akan mendapatkan beberapa sumber daya tertentu (CPU *time*, memori, *file*, perangkat I/O) untuk menyelesaikan tugasnya. Proses anak dapat memperoleh sumber daya langsung dari sistem operasi atau dibatasi pada subset sumber daya dari proses induknya. Membatasi proses anak pada subset sumber daya induk dapat mencegah proses membebani sistem dengan menciptakan terlalu banyak proses anak. Data inisialisasi (_input_) juga dapat diteruskan dari proses induk ke proses anak. 

Saat proses menciptakan proses baru, ada dua kemungkinan untuk eksekusinya, yaitu:
1. *Parent process* melanjutkan eksekusinya bersamaan dengan *child process*-nya.
2. *Parent process* menunggu hingga sebagian atau seluruh *child process*-nya diterminasi (*terminated*).

Di sistem UNIX/Linux, penciptaan proses, seperti di atas menggunakan dua _system call_ utama:
1. `fork()`: Membuat proses anak baru yang merupakan duplikat identik dari proses induk. Proses anak ini memiliki ruang alamat yang sama, tetapi PID yang berbeda. Setelah `fork()`, ada dua proses yang menjalankan kode yang sama dari titik di mana `fork()` dipanggil.
2. `exec()`: Digunakan setelah `fork()` oleh proses anak untuk mengganti seluruh ruang memorinya dengan program baru. `exec()` memuat program baru dan mulai menjalankannya dari awal.

Selain itu, terdapat dua kemungkinan *address-space* untuk proses baru:
1. *Child process* adalah duplikat dari *parent process* dan memiliki program dan data yang sama dengan *parent*-nya.
2. *Child process* memiliki program baru yang dimuatnya.

Pada Windows, pembuatan child process dilakukan menggunakan fungsi CreateProcess() dalam API Windows, yang membutuhkan parameter lebih banyak dan biasanya memuat program yang ditentukan ke address space proses anak saat pembuatan.

# Terminasi Proses
Proses berakhir ketika ia menyelesaikan eksekusi pernyataan terakhirnya dan meminta sistem operasi untuk menghapusnya menggunakan panggilan sistem  `exit()`. Proses dapat mengembalikan nilai status (biasanya bilangan bulat) kepada proses induk yang menunggunya (melalui panggilan `wait()`). Semua sumber daya proses—termasuk memori fisik dan virtual, _file_ terbuka, dan _buffer_ I/O—didealokasikan dan diklaim kembali oleh sistem operasi.

*Parent process* dapat menterminasi  (*terminate* ) eksekusi dari *child process*-nya dengan alasan berikut:
1. *Child process* menggunakan *resource* yang berlebihan dari yang sudah dialokasikan.
2. Tugas yang ditujukan kepada *child* sudah tidak dibutuhkan.
3. *Parent process* sedang diterminasi dan OS tidak mengizinkan *child process*-nya melanjutkan jika *parent process*-nya diterminasi.

>[!info] Cascading Termination
> *Cascading termination* adalah keadaan di mana sebuah proses induk berhenti, beberapa sistem operasi akan secara otomatis menghentikan semua proses anaknya.



