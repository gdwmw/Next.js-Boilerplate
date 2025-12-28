# Next.js Boilerplate Documentation

![Home](public/assets/images/project/1.png)
![Login](public/assets/images/project/2.png)
![Register](public/assets/images/project/3.png)
![Profile](public/assets/images/project/4.png)
![Change Password](public/assets/images/project/5.png)
![Role Page](public/assets/images/project/6.png)

Boilerplate By [Gede Dewo Wahyu M.W](https://github.com/gdwmw) ❤️

## Boilerplate Description 📖

This boilerplate is a web application built with Next.js, a React framework for modern web development. It includes features such as authentication, theme management, state management, form validation, and more. It also follows Atomic Design principles for organizing components.

## Boilerplate Structure 📂

Below is the primary directory structure of the boilerplate:

```text
└── 📁configs
    └── 📁authentication
        └── index.ts
└── 📁docs
    ├── example.codediagram
    ├── example.drawio
    └── example.postman_collection.json
└── 📁public
    └── 📁assets
        └── 📁animations
            └── 📁loadings
                ├── Loading-B.svg
                ├── Loading-W.svg
        └── 📁images
            └── 📁logos
                ├── Next.svg
                ├── Vercel.png
                ├── Vercel.svg
            └── 📁project
                ├── 1.png
                ├── 2.png
                ├── 3.png
                ├── 4.png
                ├── 5.png
                └── 6.png
└── 📁src
    └── 📁app
        └── 📁(authed)
            └── 📁(admin)
                ├── .gitkeep
            └── 📁(user)
                └── 📁password
                    └── 📁change
                        ├── page.tsx
                └── 📁profile
                    ├── page.tsx
        └── 📁(example)
            └── 📁admin-example
                ├── page.tsx
            └── 📁home-example
                ├── page.tsx
            └── 📁user-example
                ├── page.tsx
        └── 📁api
            └── 📁auth
                └── 📁[...nextauth]
                    ├── route.ts
        └── 📁authentication
            └── 📁login
                ├── page.tsx
            └── 📁register
                ├── page.tsx
        └── 📁denied
            ├── page.tsx
        └── 📁fonts
            ├── GeistMonoVF.woff
            ├── GeistVF.woff
            ├── index.ts
            ├── Inter.ttf
            ├── Roboto.ttf
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
        ├── not-found.tsx
        ├── page.tsx
    └── 📁components
        └── 📁elements
            └── 📁example
                └── 📁A
                    ├── ExampleA.spec.tsx
                    ├── ExampleA.stories.tsx
                    ├── index.tsx
                └── 📁B
                    └── 📁stories
                        ├── ExampleB.stories.tsx
                        ├── index.tsx
                    ├── ExampleB.spec.tsx
                    ├── index.tsx
                └── 📁C
                    └── 📁datepicker
                        ├── index.tsx
                    └── 📁elements
                        └── 📁error-message
                            ├── index.tsx
                        └── 📁inputs-container
                            ├── index.tsx
                        └── 📁label
                            ├── index.tsx
                        ├── index.ts
                    └── 📁input
                        ├── index.tsx
                    └── 📁select
                        ├── index.tsx
                    └── 📁stories
                        ├── ExampleC.stories.tsx
                        ├── index.tsx
                    └── 📁text-area
                        ├── index.tsx
                    ├── ExampleC.spec.tsx
                    ├── index.ts
                ├── index.ts
            ├── index.ts
        └── 📁templates
            └── 📁api-connection-checker
                ├── index.tsx
            └── 📁avatar
                ├── index.tsx
            └── 📁change-theme-button
                ├── index.tsx
            └── 📁form-container
                ├── index.tsx
            └── 📁logout-button
                ├── index.tsx
            └── 📁submit-button
                ├── index.tsx
            ├── index.ts
        ├── index.ts
        ├── README.md
    └── 📁context
        ├── index.ts
    └── 📁helpers
        └── 📁api
            └── 📁authentication
                └── 📁login
                    ├── index.ts
                └── 📁register
                    ├── index.ts
                ├── index.ts
            └── 📁base
                ├── index.ts
            └── 📁data
                ├── index.ts
            └── 📁example
                ├── index.ts
            └── 📁password
                ├── index.ts
            └── 📁upload
                ├── index.ts
            └── 📁user
                ├── index.ts
            ├── index.ts
        └── 📁formatter
            ├── index.ts
        └── 📁math
            ├── index.ts
        └── 📁server
            └── 📁cookies
                ├── index.ts
            └── 📁getbase64
                ├── index.ts
            └── 📁session
                ├── index.ts
            ├── index.ts
        └── 📁validations
            ├── index.ts
        ├── index.ts
    └── 📁hooks
        └── 📁ui
            └── 📁modal
                ├── index.ts
            └── 📁toast
                ├── index.ts
            └── 📁toggle
                ├── index.ts
            ├── index.ts
        └── 📁utils
            └── 📁local-storage
                ├── index.ts
            └── 📁window-size
                ├── index.ts
            ├── index.ts
        ├── index.ts
    └── 📁layouts
        └── 📁authentication
            └── 📁pages
                └── 📁login
                    └── 📁modules
                        └── 📁main
                            └── 📁batches
                                └── 📁content
                                    ├── index.tsx
                                ├── index.ts
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                └── 📁register
                    └── 📁modules
                        └── 📁main
                            └── 📁batches
                                └── 📁content
                                    ├── index.tsx
                                ├── index.ts
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
        └── 📁example
            └── 📁global
                ├── .gitkeep
            └── 📁modules
                └── 📁aside
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                └── 📁footer
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                └── 📁header
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                └── 📁main
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                └── 📁nav
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                ├── index.ts
            └── 📁pages
                └── 📁example
                    └── 📁global
                        ├── .gitkeep
                    └── 📁modules
                        └── 📁aside
                            └── 📁batches
                                └── 📁content
                                    ├── index.tsx
                                ├── index.ts
                            ├── index.tsx
                        └── 📁footer
                            └── 📁batches
                                └── 📁content
                                    ├── index.tsx
                                ├── index.ts
                            ├── index.tsx
                        └── 📁header
                            └── 📁batches
                                └── 📁content
                                    ├── index.tsx
                                ├── index.ts
                            ├── index.tsx
                        └── 📁main
                            └── 📁batches
                                └── 📁content
                                    ├── index.tsx
                                ├── index.ts
                            ├── index.tsx
                        └── 📁nav
                            └── 📁batches
                                └── 📁content
                                    ├── index.tsx
                                ├── index.ts
                            ├── index.tsx
                        ├── index.ts
                    └── 📁template
                        ├── .gitkeep
                    ├── index.tsx
            └── 📁template
                ├── .gitkeep
            ├── index.tsx
        └── 📁home
            └── 📁modules
                └── 📁aside
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                └── 📁footer
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                └── 📁header
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                └── 📁main
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index-example.tsx
                    ├── index.tsx
                └── 📁nav
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                ├── index.ts
            ├── index.tsx
        └── 📁password
            └── 📁pages
                └── 📁change
                    └── 📁modules
                        └── 📁main
                            └── 📁batches
                                └── 📁content
                                    ├── index.tsx
                                ├── index.ts
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
        └── 📁profile
            └── 📁modules
                └── 📁main
                    └── 📁batches
                        └── 📁content
                            ├── index.tsx
                        ├── index.ts
                    ├── index.tsx
                ├── index.ts
            ├── index.tsx
    └── 📁libs
        └── 📁constants
            └── 📁authentication
                ├── index.ts
            └── 📁components
                ├── index.ts
            └── 📁contents
                ├── index.ts
            └── 📁hooks
                ├── index.ts
            ├── index.ts
        └── 📁providers
            └── 📁next-auth
                ├── index.tsx
            └── 📁next-themes
                ├── index.tsx
            └── 📁react-query
                ├── index.tsx
            ├── index.ts
        └── 📁tailwind-merge
            ├── index.ts
        ├── index.ts
    └── 📁schemas
        └── 📁authentication
            ├── index.ts
        └── 📁example
            ├── index.ts
        └── 📁password
            ├── index.ts
        └── 📁profile
            ├── index.ts
        └── 📁schema-error-message
            ├── index.ts
        ├── index.ts
    └── 📁styles
        ├── datepicker.css
    └── 📁types
        └── 📁api
            ├── index.ts
        └── 📁authentication
            ├── index.ts
        └── 📁components
            ├── index.ts
        └── 📁context
            ├── index.ts
        └── 📁hooks
            ├── index.ts
        ├── index.ts
        ├── next-auth.d.ts
    └── 📁utils
        └── 📁math
            ├── index.ts
        ├── index.ts
    └── proxy.ts
```

### Structure Explanation 📚

- **/configs**: Configuration files, including authentication settings and shared logic.
- **/docs**: Project documentation such as architecture diagrams, flowcharts, API docs, and other technical references.
- **/public**: Static assets such as images and animations.
- **/src/app**: Application routes/pages, including authentication flows plus admin and user areas.
- **/src/components**: Reusable UI pieces organized with Atomic Design principles.
- **/src/context**: Context providers for state management and cross-component data sharing.
- **/src/helpers**: Helper layers for API wrappers, formatting, math, server utilities, and validations.
- **/src/hooks**: Custom hooks for managing state and side effects.
- **/src/layouts**: Layouts for various parts of the app (header, footer, aside, etc.), structured using Atomic Design.
- **/src/libs**: Shared libraries such as providers (NextAuth, themes, React Query), constants, and Tailwind merge utilities.
- **/src/schemas**: Validation schemas (Zod) to ensure incoming data meets expectations.
- **/src/styles**: Global styles and component-level stylesheets.
- **/src/types**: TypeScript type definitions (including NextAuth) to ensure type safety.
- **/src/utils**: Utility functions used throughout the application (e.g., math helpers).
- **/src/proxy.ts**: NextAuth-aware proxy middleware that guards protected routes.

## Installation 🚀

To get started, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/gdwmw/Next.js-Boilerplate.git
   cd Next.js-Boilerplate
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   ```bash
   bun cpenv
   ```

4. **Set `NEXTAUTH_URL` to your local URL**

   ```bash
   http://localhost:3000
   ```

5. **Generate a base64 value for `NEXTAUTH_SECRET`**

   ```bash
   bun base64
   ```

6. **Run the development server**

   ```bash
   bun dev
   ```

7. **Access the application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Commit Guidelines 📝

When committing changes with `bun commit`, follow these steps:

1. **Prepare your changes**  
   Ensure your code is tested and complies with the project's coding standards.

2. **Stage your changes**  
   Stage all relevant files:

   ```bash
   git add .
   ```

3. **Run the commit command**  
   Execute:

   ```bash
   bun commit
   ```

4. **Follow the interactive prompt**  
   Select the appropriate change type (e.g., feature, fix, docs) when prompted.

5. **Optionally provide a scope**  
   If relevant, specify the scope (e.g., a specific module or feature).

6. **Write a concise subject**  
   Use the imperative mood and keep it short and clear.

7. **Optionally add a detailed body**  
   Include motivation, context, and implementation details if helpful.

8. **Document breaking changes (if any)**  
   Clearly list any breaking changes in the designated section.

9. **Confirm your commit**  
   Review the message and confirm when prompted.

Following these guidelines ensures commit messages are informative and consistent with the project's standards.

## Contribution 🤝

If you would like to contribute, follow these steps:

1. **Fork the repository**  
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**  
   Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Next.js-Boilerplate.git
   cd Next.js-Boilerplate
   ```

3. **Create a new branch**  
   Create a branch for your feature or bug fix:

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make your changes**  
   Implement your changes and ensure they follow the project's standards.

5. **Commit your changes**  
   Commit with a descriptive message:

   ```bash
   bun commit
   ```

6. **Push to your fork**  
   Push your branch to your forked repository:

   ```bash
   git push origin your-feature-branch
   ```

7. **Open a pull request**  
   In the original repository, click "New Pull Request", select your branch, and submit with a clear description.

Thank you for contributing!

## MIT License ⚖️

This project is licensed under the MIT License. See the `LICENSE` file for details.

## How to Ask Questions ❓

If you have questions about the boilerplate or how to use it, follow these guidelines:

1. **Be clear and concise**  
   Clearly state your question or issue and provide enough context.

2. **Include relevant details**  
   Share specific errors, code snippets, or configurations that are relevant.

3. **Search before asking**  
   Review the documentation and existing issues to avoid duplicates.

4. **Use proper formatting**  
   Use code blocks when sharing code or error messages for readability.

5. **Be respectful**  
   Be polite and respectful in all communication.

Following these guidelines helps ensure your questions are understood and answered promptly.

This documentation provides an overview of the boilerplate, installation steps, commit guidelines, and contribution process. If you have further questions, feel free to ask!
