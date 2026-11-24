import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "bechoHub B2B Trade Network",
        short_name: "bechoHub",
        description: "Building India's Next B2B Trade Network (Pre-Launch)",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#020617",
        icons: [
            {
                src: "/icon",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
