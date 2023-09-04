---
title: Docs
description: MagicPuddle Documentation
pubDate: 'Jul 02 2022'
heroImage: '/placeholder-mp.png'
slug: docs
---

# Astro

![fa-crown](fa-crown.svg)

A static site builder that allows you to create fast and efficient websites using a component-based approach. Here's a step-by-step guide to building a website with Astro:

Step 1: Set Up Your Development Environment
Before getting started, make sure you have Node.js and npm (Node Package Manager) installed on your computer. You can download them from the official Node.js website.

Step 2: Create a New Astro Project
To create a new Astro project, open your terminal or command prompt and run the following command:

```shell
npx create-astro my-website
```

This command will generate a new Astro project in a folder called `my-website`. You can replace `my-website` with the desired name of your project.

Step 3: Navigate to Your Project
Once the project is created, navigate to the project folder by running the following command:

```shell
cd my-website
```

Step 4: Install Dependencies
In the project folder, install the project dependencies by running the following command:

```shell
npm install
```

Step 5: Explore the Project Structure
Astro organizes the project structure in a logical way. You can explore the files and folders to understand the project structure and make changes as needed.

Step 6: Customize the Website
Open the project in your preferred code editor and modify the files according to your needs. You'll find a `src` folder that contains your website's source code. Within the `src` folder, you'll find an `index.astro` file, which is the entry point for your website. You can edit this file to modify the content and structure of your homepage.

Step 7: Add Components and Layouts
Astro allows you to create reusable components and layouts. You can create components as `.astro` files within the `src/components` folder. These components can be imported and used in other files.

To create a layout, you can create an `.astro` file within the `src/layouts` folder. Layouts define the overall structure and design of your website.

Step 8: Run the Development Server
To see your changes in real-time, run the following command:

```shell
npm run dev
```

This command starts the development server and allows you to preview your website. Open your browser and navigate to `http://localhost:3000` to see your website in action. Any changes you make to the source files will automatically update the preview.

Step 9: Build the Website for Production
Once you're satisfied with your website, you can build it for production. Run the following command:

```shell
npm run build
```

This command generates an optimized and static version of your website in the `dist` folder. You can deploy the contents of this folder to any web hosting platform or CDN (Content Delivery Network) to make your website live.

That's it! You have successfully built a website using Astro. Remember to consult the Astro documentation for more detailed information on specific features and advanced configurations.
