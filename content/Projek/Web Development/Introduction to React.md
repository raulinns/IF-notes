**React** merupakan JavaScript Library untuk membuat UI yang dinamis dan interaktif. React diciptakan di Facebook di tahun 2011. 

Ketika *web page* di-*upload* ke *web browser*, *web browser* mengambil kode HTML dan membentuk struktur data seperti tree bernama *Document Object Model* (**DOM**). Struktur data ini yang memungkinkan JavaScript untuk mengubah konten dari *web page* tergantung respon dari pengguna. 

Pada projek yang lebih besar, sangat sulit untuk mempertahankan struktur yang baik. React digunakan sehingga kita tidak perlu melakukan *query* atau *update* elemen DOM secara langsung, tetapi kita membangun *web page* menggunakan komponen-komponen yang dapat digunakan kembali dan React yang melakukan *maintain* terhadap elemen DOM. *Component* dalam React membantu kita dalam menulis kode yang lebih modular dan terorganisasi dengan baik. 

## Development Setup
- Youtube Reference: https://www.youtube.com/watch?v=SqcY0GlETPk
- https://nodejs.org/id
- https://react.dev/

Untuk membuat React App, kita dapat menggunakan dua cara:
- Create React App (CRA)
- Vite

CRA sudah jarang digunakan karena performanya yang lambat. Standar industri sekarang menggunakan Vite karena lebih praktis dan cepat.

### React Project Structure

```
my-react-app/
├── 📁 node_modules/       # Library pihak ketiga (NPM packages)
├── 📁 public/             # Aset statis murni (tidak diproses bundler)
│   └── favicon.ico        # Ikon tab browser
├── 📁 src/                # Source Code
│   ├── 📁 assets/         # Aset yang akan diproses/dioptimasi (CSS, Gambar)
│   ├── 📁 components/     # Komponen UI yang reusable (Button, Navbar)
│   ├── App.tsx            # Komponen utama (Root Component)
│   ├── main.tsx           # Entry point JavaScript (Penghubung React ke HTML)
│   └── vite-env.d.ts      # Definisi tipe data untuk fitur Vite
├── .gitignore             # Daftar file yang diabaikan oleh Git
├── index.html             # Template HTML utama aplikasi
├── package.json           # Manifest proyek & daftar dependensi
├── tsconfig.json          # Konfigurasi TypeScript
└── vite.config.ts         # Konfigurasi utama Vite
```

## React Component
Ekstensi `.ts` digunakan untuk file TypeScript normal dan `.tsx` untuk membuat komponen React. Komponen React adalah fungsi JavaScript yang mendeskripsikan UI beserta logika internalnya yang mengembalikan markup JSX.

Terdapat dua cara untuk membuat komponen React, yaitu melalui *JavaScript class* dan *function*. *Function-based component* lebih populer, karena lebih singkat dan mudah ditulis. Misal: 
``` tsx
// Message.tsx
function Message() {
	return <h1>Hello, World!</h1>
}

export default Message;
```

*Naming convention* untuk sebuah komponen adalah `PascalCase` agar React dapat membedakan komponen React dengan elemen HTML standar. Lalu, agar komponen dapat digunakan di *file* lain, kita harus melakukan `export`. Kita dapat menggunakan `export default` jika berkas tersebut hanya berisi satu komponen utama, atau _named export_ jika terdapat beberapa komponen dalam satu berkas.

Setelah komponen dibuat, langkah selanjutnya adalah menghubungkannya ke komponen induk hingga mencapai komponen akar, yaitu **App.tsx**. Di dalam `App.tsx`, kita melakukan **Import** komponen tersebut dan memanggilnya layaknya tag HTML kustom (contoh: `<MyComponent></MyComponent>` atau `<MyComponent />`). 

```tsx
// App.tsx
import Message from '/.Message';

function App() {
	return <div><Message /></div>;
}

export default App;
```

## Component Rendering
Pemanggilan komponen di dalam komponen lain (hingga *root component* App.tsx) dilakukan untuk menyusun *Component Tree*. Saat aplikasi dijalankan, React membaca *Component Tree* dan membentuk **Virtual DOM**. Virtual DOM adalah *in-memory representation* dari *Component Tree* di mana tiap *node* merepresentasikan komponen React dan propertinya. Ketika sebuah data/*state* komponen diubah, React memperbarui Virtual DOM sehingga sama dengan kondisi asli. Lalu, React membandingkan Virtual DOM yang sekarang dengan versi sebelumnya dari Virtual DOM untuk mengetahui perbedaannya dan mengubah *node* yang perlu di-*update.*

Proses ini dilakukan oleh sebuah *library* bernama **ReactDOM**. Seperti biasa, *web broser* memulai *rendering* dari file `index.html`. `index.html` ini berisi sebuah `<div>` dengan `id=root` yang memanggil `script` yang menuju pada `main.tsx` atau `index.js` di sinilah tahap *rendering* terakhir dilakukan.
```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>learn-react</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

```jsx
// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

`main.tsx` ini menjadi jembatan antara React dengan HTML. Melalui fungsi `createRoot().render()` akan melakukan *render* *Component Tree* kita (biasanya dengan *root* `App`) di dalam elemen dengan `id=root` (yang kita lihat sebelumnya di `index.html`).

Seringkali, kita akan melihat komponen `<App />` dibungkus oleh `<React.StrictMode>`. Ini adalah *helper component* yang berfungsi untuk mendeteksi masalah dalam penulisan kode. 

## React Ecosystem
Seperti sudah disebutkan sebelumnya, React adalah sebuah JavaScript Library untuk membuat UI. Selain *library*, terdapat juga *framework* yang menjadi *tools* yang penting dalam membangun sebuah perangkat lunak.

Lalu, apa perbedaannya? *Library* adalah alat yang menyediakan sebuah fungsionalitas spesifik. Sedangkan, *framework* adalah *toolset* (sekumpulan alat) dan panduan untuk membangun aplikasi. 

React hanya menyediakan fungsionalitas untuk membuat UI. Beberapa fungsi lain seperti, *form validation*, *routing*, HTTP, *animation* dan lain-lain membutuhkan *library* lain untuk memenuhi fungsionalitas tersebut.
