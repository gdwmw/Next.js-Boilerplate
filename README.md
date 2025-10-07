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
└── 📁docs
└── 📁src
    └── 📁app
        └── 📁(authed)
            └── 📁(admin)
            └── 📁(user)
        └── 📁(example)
            └── 📁admin-example
            └── 📁home-example
            └── 📁user-example
        └── 📁api
            └── 📁auth
                └── 📁[...nextauth]
        └── 📁authentication
            └── 📁login
            └── 📁register
        └── 📁denied
        └── 📁fonts
    └── 📁components
        └── 📁elements
        └── 📁templates
        └── index.ts
        └── README.md
    └── 📁context
    └── 📁hooks
        └── 📁ui
        └── 📁utils
|        └── index.ts
    └── 📁layouts
        └── 📁authentication
        └── 📁example
            └── 📁global
            └── 📁pages
            └── 📁template
            └── 📁modules
                └── 📁aside
                └── 📁footer
                └── 📁header
                └── 📁main
                └── 📁nav
            └── index.tsx
        └── 📁home
        └── 📁password
        └── 📁profile
    └── 📁libs
        └── 📁constants
        └── 📁providers
            └── 📁next-auth
            └── 📁next-themes
            └── 📁react-query
            └── index.ts
        └── 📁tailwind-merge
        └── index.ts
    └── 📁schemas
        └── 📁authentication
        └── 📁example
        └── 📁password
        └── 📁profile
        └── index.ts
    └── 📁styles
    └── 📁types
        └── 📁api
        └── 📁components
        └── 📁context
        └── index.ts
        └── next-auth.d.ts
    └── 📁utils
        └── 📁api
        └── 📁helpers
        └── 📁server
        └── index.ts
    └── middleware.ts
```

### Structure Explanation 📚

- **/configs**: Configuration files, including authentication settings and logic.
- **/docs**: Project documentation such as architecture diagrams, flowcharts, API docs, and other technical references.
- **/public**: Static assets such as images and animations.
- **/src/app**: Application routes/pages, including login, admin, and user areas.
- **/src/components**: Reusable components organized with Atomic Design principles.
- **/src/context**: Context providers for state management and cross-component data sharing.
- **/src/hooks**: Custom hooks for managing state and side effects.
- **/src/layouts**: Layouts for various parts of the app (header, footer, aside, etc.), structured using Atomic Design.
- **/src/libs**: Libraries such as providers for authentication and theme management, plus constants.
- **/src/schemas**: Validation schemas (Zod) to ensure incoming data meets expectations.
- **/src/styles**: Global styles, CSS modules, and other styling-related files.
- **/src/types**: TypeScript type definitions to ensure type safety.
- **/src/utils**: Utility functions used throughout the application.
- **/src/middleware.ts**: Middleware for handling requests and responses.

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
