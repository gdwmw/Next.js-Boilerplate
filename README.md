# Next.js Boilerplate Documentation

Boilerplate By [Gede Dewo Wahyu M.W](https://github.com/gdwmw) ❤️

## Boilerplate Description 📖

This boilerplate is a web application built using Next.js, which is a React framework for web application development. The boilerplate includes various features such as authentication, theme management, state management, form validation, and more. Additionally, this boilerplate follows the principles of Atomic Design for organizing components.

## Boilerplate Structure 📂

Below is the main directory structure of the boilerplate:

```
/auth
/public
   /assets
      /animations
      /images
/src
  /app
  /components
  /context
  /hooks
  /layouts
  /libs
  /schemas
  /types
  /utils
  /middleware.ts
```

### Structure Explanation 📚

- **/auth**: Contains authentication-related files and logic.
- **/public**: Contains static assets such as images, animations, and other static files.
- **/src/app**: Contains the main application pages, including login, admin, user, and others.
- **/src/components**: Contains reusable components throughout the application, organized following the principles of Atomic Design.
- **/src/context**: Contains context providers for state management and sharing data across components.
- **/src/hooks**: Contains custom hooks for managing state and side effects in functional components.
- **/src/layouts**: Contains layouts for various parts of the application, such as header, footer, aside, and others. The layouts are organized following the principles of Atomic Design, with components broken down into smaller, reusable pieces.
- **/src/libs**: Contains libraries such as providers for authentication and theme management, as well as constants and others.
- **/src/schemas**: Contains validation schemas using Zod to ensure incoming data meets expectations.
- **/src/types**: Contains TypeScript type definitions to ensure type safety throughout the application.
- **/src/utils**: Contains utility functions used in various places within the application.
- **/src/middleware.ts**: Contains middleware functions for handling requests and responses.

## Installation 🚀

To get started with this boilerplate, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/gdwmw/Next.js-Boilerplate.git
   cd Next.js-Boilerplate
   ```

2. **Install Dependencies**

   ```bash
   bun install
   ```

3. **Setup Environment Variables**

   ```bash
   bun cpenv
   ```

4. **Fill in the `NEXTAUTH_URL` with Local URL**

   ```bash
   http://localhost:3000
   ```

5. **Get Base64 Code to Fill in the `NEXTAUTH_SECRET` Variable**

   ```bash
   bun base64
   ```

6. **Run the Development Server**

   ```bash
   bun dev
   ```

7. **Access the Application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Commit Guidelines 📝

When committing your changes using the `bun commit` command, please follow these steps:

1. **Ensure Your Changes Are Ready**  
   Before committing, make sure that your code is properly tested and follows the project's coding standards.

2. **Stage Your Changes**  
   Use the following command to stage your changes:

   ```bash
   git add .
   ```

3. **Run the Commit Command**  
   Execute the commit command:

   ```bash
   bun commit
   ```

4. **Follow the Commit Prompt**  
   After running the command, a prompt will appear. You will be asked to select the type of change you are committing (e.g., feature, bug fix, documentation). Choose the appropriate type.

5. **Provide a Scope (Optional)**  
   If applicable, specify the scope of your changes (e.g., a specific module or feature).

6. **Write a Descriptive Subject**  
   Write a short, imperative tense description of the change. Keep it concise and clear.

7. **Add a Detailed Body (Optional)**  
   If necessary, provide a longer description of the changes in the body section. This can include the motivation for the change and any relevant details.

8. **List Breaking Changes (If Any) (Optional)**  
   If your changes introduce breaking changes, list them in the designated section.

9. **Confirm Your Commit**  
   Review your commit message and confirm the commit when prompted.

By following these guidelines, you ensure that your commit messages are informative and consistent with the project's standards.

## Contribution 🤝

If you would like to contribute to this boilerplate, please follow these steps:

1. **Fork the Repository**  
   Click on the "Fork" button at the top right corner of the repository page to create your own copy.

2. **Clone Your Fork**  
   Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Next.js-Boilerplate.git
   cd Next.js-Boilerplate
   ```

3. **Create a New Branch**  
   Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make Your Changes**  
   Implement your changes and ensure that your code follows the project's coding standards.

5. **Commit Your Changes**  
   Commit your changes with a descriptive message:

   ```bash
   bun commit
   ```

6. **Push to Your Fork**  
   Push your changes to your forked repository:

   ```bash
   git push origin your-feature-branch
   ```

7. **Create a Pull Request**  
   Go to the original repository and click on "New Pull Request". Select your branch and submit the pull request with a description of the changes you made.

Thank you for your contribution!

## MIT License ⚖️

This boilerplate is licensed under the MIT License. Please see the `LICENSE` file for more information.

## How to Ask Questions❓

If you have any questions regarding the boilerplate or its usage, please follow these guidelines:

1. **Be Clear and Concise**  
   Clearly state your question or issue. Provide enough context for others to understand your problem.

2. **Include Relevant Details**  
   Mention any specific errors, code snippets, or configurations that are relevant to your question.

3. **Search Before Asking**  
   Check the documentation and existing issues to see if your question has already been answered.

4. **Use Proper Formatting**  
   When sharing code or error messages, use code blocks for better readability.

5. **Be Respectful**  
   Remember to be polite and respectful in your communication.

By following these guidelines, you can help ensure that your questions are understood and addressed promptly.

This documentation provides a clear overview of the boilerplate, installation instructions, commit guidelines, and contribution guidelines. If you have any further questions, feel free to ask!

---

# Special AI Instructions for Creating Code Structure Diagrams

1. **Format**:

   - Use Markdown format.
   - Use headings (`#`, `##`, `###`) for titles and subtitles.

2. **Icons**:

   - Use the following icons to identify components:
     - 📄 for **Page**.
     - 📦 for **Main** or **Layout**.
     - 📝 for **Content** or content components.
     - 🧭 for **Nav**.
     - 📐 for **Aside**.
     - 🦶 for **Footer**.

3. **Structure**:

   - Create a hierarchy using indentation (use `-` for lists).
   - Each component must have a link to the file path (example: `[📄 HomePage](src/app/page.tsx)`).

4. **Section Titles**:

   - Use section titles for each part (example: `### 🏠 **Home**`).

5. **Important**:

   - Create the structure according to the actual structure in the codebase. This is just an example, so adjust it to the current codebase.

## Example Code Structure Diagram

### 🏠 **Home**

```md
- [📄 HomePage](src/app/page.tsx)
  - [📦 HomeLayout](src/layouts/home/index.tsx)
    - [🧭 Nav](src/layouts/home/modules/nav/index.tsx)
      - [📝 Nav Content](src/layouts/home/modules/nav/batches/content/index.tsx)
    - [📐 Aside](src/layouts/home/modules/aside/index.tsx)
    - [📦 Main](src/layouts/home/modules/main/index.tsx)
      - [📝 About](src/layouts/home/modules/main/batches/about/index.tsx)
      - [📝 Contact](src/layouts/home/modules/main/batches/contact/index.tsx)
      - [📝 Home](src/layouts/home/modules/main/batches/home/index.tsx)
      - [📝 Packages](src/layouts/home/modules/main/batches/packages/index.tsx)
      - [📝 Portfolio](src/layouts/home/modules/main/batches/portfolio/index.tsx)
    - [🦶 Footer](src/layouts/home/modules/footer/index.tsx)
```

### 🔐 **Login**

```md
- [📄 LoginPage](src/app/login/page.tsx)
  - [📦 LoginLayout](src/layouts/login/index.tsx)
    - [📦 Main](src/layouts/login/modules/main/index.tsx)
      - [📝 Content](src/layouts/login/modules/main/batches/content/index.tsx)
```

### 📝 **Register**

```md
- [📄 RegisterPage](src/app/register/page.tsx)
  - [📦 RegisterLayout](src/layouts/register/index.tsx)
    - [📦 Main](src/layouts/register/modules/main/index.tsx)
      - [📝 Content](src/layouts/register/modules/main/batches/content/index.tsx)
```

### 📅 **Booking**

```md
- [📄 BookingPage](<src/app/(authed)/(user)/booking/page.tsx>)
  - [📦 BookingLayout](src/layouts/booking/index.tsx)
    - [📦 Main](src/layouts/booking/modules/main/index.tsx)
      - [📝 Content](src/layouts/booking/modules/main/batches/content/index.tsx)
```

### 👤 **User**

```md
- [📄 Layout](<src/app/(authed)/(user)/user/layout.tsx>)
  - [📦 UserLayout](src/layouts/user/layout/index.tsx)
    - [📄 Slug](<src/app/(authed)/(user)/user/[...slug]/page.tsx>)
      - [📦 Main](src/layouts/user/pages/history/modules/main/index.tsx)
        - [📝 Content](src/layouts/user/pages/history/modules/main/batches/content/index.tsx)
```
