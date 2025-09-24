# Setup Obsidian + Quartz Integration

## Konfigurasi yang Sudah Aktif

### ✅ Quartz Config (`quartz.config.ts`)

- **ObsidianFlavoredMarkdown**: Mendukung wikilinks `[[]]`, tags, dan sintaks Obsidian
- **ignorePatterns**: Folder `.obsidian` dikecualikan dari build
- **CrawlLinks**: Mendukung resolusi wikilinks
- **BackLinks**: Otomatis membuat backlinks antar notes
- **TableOfContents**: Generate TOC dari headers
- **Latex**: Mendukung math expressions dengan KaTeX

### ✅ Plugin Obsidian Aktif

- **obsidian-style-settings**: Custom styling
- **obsidian-git**: Git integration untuk sync otomatis

### ✅ Core Plugins Obsidian

- Graph view, backlinks, tag pane
- Daily notes, templates
- Canvas, outgoing links
- Search, file explorer

## Cara Upload ke Quartz

### 1. Build & Deploy Lokal

```bash
npx quartz build
npx quartz serve
```

### 2. Deploy ke GitHub Pages/Vercel/Netlify

```bash
# Pastikan semua perubahan sudah di-commit
git add .
git commit -m "Update content"
git push

# Build akan otomatis jalan di hosting platform
```

## Fitur Obsidian yang Didukung Quartz

### ✅ Yang Berfungsi Penuh

- Wikilinks `[[Note Name]]`
- Tags `#tag`
- Backlinks otomatis
- Math expressions `$latex$` dan `$$latex$$`
- Callouts/Admonitions
- Mermaid diagrams
- Code syntax highlighting
- Image links dengan path relatif

### ⚠️ Yang Perlu Adaptasi

- **Canvas**: Tidak ditampilkan di web, tapi file tetap aman
- **Plugin khusus**: Hanya styling yang akan ter-render
- **Obsidian URI**: Tidak berfungsi di web version

### ❌ Yang Tidak Didukung

- Interactive Obsidian plugins
- Real-time collaboration
- Obsidian-specific views (graph hanya static)

## Best Practices

### Struktur File

- Gunakan folder structure yang jelas
- Letakkan attachments di folder `Attachment/`
- Gunakan path relatif untuk images

### Naming Convention

- Hindari spasi berlebihan dalam filename
- Gunakan format yang web-friendly
- Consistent case (lowercase lebih baik)

### Content Organization

```
content/
├── .obsidian/           # Config Obsidian (git ignored workspace files)
├── Kuliah/             # Notes kuliah
├── Projek/             # Project documentation
├── Index/              # Index pages
└── Attachment/         # Media files
```

## Workflow yang Direkomendasikan

1. **Edit di Obsidian**: Tulis dan edit notes di Obsidian
2. **Commit changes**: Git add & commit melalui Obsidian Git plugin atau manual
3. **Push to repo**: Push ke GitHub repository
4. **Auto-build**: Hosting platform akan auto-build Quartz
5. **Live site**: Site akan terupdate otomatis

## Troubleshooting

### Wikilinks Broken

- Pastikan file target ada
- Check case sensitivity
- Gunakan path relatif yang benar

### Images Tidak Muncul

- Pastikan path image benar
- Check apakah file ada di folder Attachment
- Gunakan format: `![[Attachment/filename.png]]`

### Styling Tidak Sesuai

- Check Obsidian CSS snippets di `.obsidian/snippets/`
- Sesuaikan dengan Quartz theme di `quartz.config.ts`

## Tips Optimasi

1. **Ukuran File**: Compress images untuk loading lebih cepat
2. **SEO**: Gunakan frontmatter untuk metadata
3. **Performance**: Minimal plugin untuk build lebih cepat
4. **Navigation**: Buat index pages untuk easy browsing
