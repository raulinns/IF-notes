import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
    configuration: {
        pageTitle: "Narendra Notes",
        pageTitleSuffix: "",
        enableSPA: true,
        enablePopovers: true,
        analytics: {
            provider: "plausible",
        },
        locale: "en-US",
        baseUrl: "quartz.jzhao.xyz",
        ignorePatterns: ["private", "templates", ".obsidian"],
        defaultDateType: "modified",
        theme: {
            fontOrigin: "googleFonts",
            cdnCaching: true,
            typography: {
                header: "Schibsted Grotesk",
                body: "Source Sans Pro",
                code: "IBM Plex Mono",
            },
            colors: {
                lightMode: {
                    // Kita paksa mode 'light' Quartz menggunakan warna DARK Obsidianite
                    // agar website selalu gelap (karena tema Anda dark-only)
                    light: "#100e17", // --background-primary
                    lightgray: "#191621", // --background-secondary
                    gray: "#6272a4", // Warna komentar/muted
                    darkgray: "#bebebe", // --text-normal (Teks isi)
                    dark: "#cbdbe5", // --text-title (Judul)
                    secondary: "#0fb6d6", // --text-accent (Cyan - Link & Highlight)
                    tertiary: "#f4569d", // --text-sub-accent (Pink - Hover)
                    highlight: "rgba(14, 210, 247, 0.15)", // --text-highlight-bg
                    textHighlight: "#f1fa8c",
                },
                darkMode: {
                    // Samakan saja dengan yang atas
                    light: "#100e17",
                    lightgray: "#191621",
                    gray: "#6272a4",
                    darkgray: "#bebebe",
                    dark: "#cbdbe5",
                    secondary: "#0fb6d6",
                    tertiary: "#f4569d",
                    highlight: "rgba(14, 210, 247, 0.15)",
                    textHighlight: "#f1fa8c",
                },
            },
        },
    },
    plugins: {
        transformers: [
            Plugin.FrontMatter(),
            Plugin.CreatedModifiedDate({
                priority: ["frontmatter", "git", "filesystem"],
            }),
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "dracula",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents(),
            Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
            Plugin.Description(),
            Plugin.Latex({ renderEngine: "katex" }),
        ],
        filters: [Plugin.RemoveDrafts()],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            Plugin.FolderPage(),
            Plugin.TagPage(),
            Plugin.ContentIndex({
                enableSiteMap: true,
                enableRSS: true,
            }),
            Plugin.Assets(),
            Plugin.Static(),
            Plugin.Favicon(),
            Plugin.NotFoundPage(),
            // Comment out CustomOgImages to speed up build time
            Plugin.CustomOgImages(),
        ],
    },
}

export default config
