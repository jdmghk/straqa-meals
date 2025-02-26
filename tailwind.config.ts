import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "2xl": "2rem",
        DEFAULT: "1rem",
        lg: "2rem",
        md: "2rem",
        sm: "1rem",
        xl: "2rem",
      },
      screens: {
        "2xl": "86rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card) / 0.79)",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: ({}) => ({
        DEFAULT: {
          css: [
            {
              "--tw-prose-body": "var(--text)",
              "--tw-prose-headings": "var(--text)",
              h1: {
                fontWeight: "normal",
                marginBottom: "0.2em",
                lineHeight: "1.2",
                fontSize: "3.5rem",
              },
              h2: {
                marginBottom: "0.175em",
                lineHeight: "1.2",
                fontSize: "2.8rem",
              },
              h3: { fontSize: "2.25rem" },
              h4: { fontSize: "1.75rem" },
              h5: { fontSize: "1.75rem" },
              h6: { fontSize: "1.25rem" },
            },
          ],
        },
        base: {
          css: [{ h1: { fontSize: "2.5rem" }, h2: { fontSize: "2rem" } }],
        },
        md: {
          css: [
            {
              h1: { fontSize: "4.5rem", whiteSpace: "wrap" },
              h2: { fontSize: "3.75rem" },
              h3: { fontSize: "3rem" },
              h4: { fontSize: "2.5rem" },
              h5: { fontSize: "2rem" },
              h6: { fontSize: "1.5rem" },
            },
          ],
        },
      }),
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
