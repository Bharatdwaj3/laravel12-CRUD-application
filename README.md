# Laravel 12 + React CRUD Application

A simple CRUD (Create, Read, Update, Delete) application built using Laravel 12 with the official React starter kit. This project serves as a playground to explore the integration of Laravel's backend capabilities with a React frontend.

## Features

- **Backend**: Laravel 12 with RESTful API endpoints for CRUD operations.
- **Frontend**: React-based UI powered by the Laravel React starter kit.
- **Database**: MySQL
- **Authentication**: Laravel authentication .
- CRUD functionality for managing simple posts.

## Prerequisites

Before you begin, ensure you have the following installed:

- PHP 8.2 or higher
- Composer
- Node.js (v16.x or higher) and npm
- Git
- MySQL (or another database supported by Laravel)
- Laravel CLI (optional, for convenience)

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ManushaUm/laravel12-CRUD-application.git
    cd [your-repo-name]
    ```

2. **Install Backend Dependencies**

    ```bash
    composer install
    ```

3. **Install Frontend Dependencies**

    ```bash
    npm install
    ```

4. **Set Up Environment**

    - Copy the `.env.example` file to `.env`:
        ```bash
        cp .env.example .env
        ```
    - Update the `.env` file with your database credentials and other configurations (e.g., `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`).

5. **Generate Application Key**

    ```bash
    php artisan key:generate
    ```

6. **Run Migrations**

    ```bash
    php artisan migrate
    ```

7. **Compile Frontend Assets**

    ```bash
    npm run dev
    ```

8. **Start the Development Server**

    - Run Laravel’s built-in server:
        ```bash
        php artisan serve
        ```
    - In a separate terminal, run the React dev server (if needed, depending on setup):
        ```bash
        npm run watch
        ```

9. **Access the Application**
    - Open your browser and visit `http://localhost:8000`.

## Project Structure

- `app/Http/Controllers`: API controllers for CRUD operations.
- `resources/js`: React components and frontend logic.
- `routes/api.php`: API routes for CRUD endpoints.
- `database/migrations`: Database schema definitions.

## Usage

- **Create**: Add a new [resource] via the React frontend.
- **Read**: View a list of [resources] or a single [resource] detail.
- **Update**: Edit existing [resources].
- **Delete**: Remove [resources] from the system.

## Development

- To build assets for production:
    ```bash
    npm run build
    ```
- To run tests (if implemented):
    ```bash
    php artisan test
    ```

## Contributing

Feel free to fork this repository, submit pull requests, or open issues for bugs and feature requests.

## License

This project is open-source and licensed under the [MIT License](LICENSE).
