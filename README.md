# Next.js Marketing Website Template

A modern, high-performance marketing website template built with Next.js 14+ and Tailwind CSS, with optional Supabase integration for contact form submissions.

## Features

- 🚀 **Next.js 14+** with App Router for improved performance
- 💅 **Tailwind CSS** for utility-first styling
- �� **Simple Contact Form** with optional Supabase backend
- 📦 **TypeScript** for type safety
- 📱 **Responsive Design** for all device sizes
- ♿ **Accessibility** focused components
- 🔍 **SEO Optimized** structure
- 🚢 **Vercel Deployment** ready

## Getting Started

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm or Yarn
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/cline-ai-website-template.git
cd cline-ai-website-template
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables (only needed for contact form)

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials if you plan to use the contact form functionality.

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript types
└── ...
```

## Contact Form Setup (Optional)

If you want to enable the contact form functionality:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your API URL and anon key from the project settings
3. Add them to your `.env.local` file
4. Create the contact_submissions table using the migration in `supabase/migrations/001_create_contact_submissions_table.sql`

## CSS Styling

This template uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

### Custom Classes

- Container: `className="container mx-auto px-4 md:px-6"`
- Primary Button: `className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400"`
- Secondary Button: `className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"`

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Create a new project on [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add your environment variables (if using contact form)
5. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
