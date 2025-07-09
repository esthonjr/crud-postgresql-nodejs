# PostgreSQL CRUD Operations with Node.js

> A comprehensive example demonstrating PostgreSQL CRUD operations using Node.js with pg driver and Docker support

[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-11+-blue.svg)](https://postgresql.org)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://docker.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🚀 Overview

This Node.js application demonstrates complete CRUD (Create, Read, Update, Delete) operations with PostgreSQL using the `pg` driver. It includes advanced features like cursor-based reading, connection pooling, Docker integration, and comprehensive error handling.

## ✨ Features

- **Complete CRUD Operations**: Create, Read, Update, Delete, Insert, and Drop operations
- **Advanced Reading**: Cursor-based reading for large datasets
- **Connection Pooling**: Efficient database connection management
- **Docker Integration**: Built-in PostgreSQL Docker setup
- **Environment Configuration**: Secure credential management
- **Multiple Connection Types**: Single connection and pooled connections
- **Error Handling**: Comprehensive error management
- **Performance Optimized**: Cursor reading for memory efficiency

## 🛠️ Prerequisites

- Node.js 14 or higher
- PostgreSQL 11 or higher (local or Docker)
- Docker and Docker Compose (for containerized setup)
- npm or yarn package manager

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crud-postgresql-nodejs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🐳 PostgreSQL Setup with Docker

### Quick Start with Docker

**Start PostgreSQL container:**
```bash
node index.js psql-start
```

**Stop PostgreSQL container:**
```bash
node index.js psql-stop
```

### Manual Docker Setup

```bash
# Navigate to postgres directory
cd postgres

# Start PostgreSQL with Docker Compose
docker-compose up -d

# Connect to the database
docker-compose run database bash
psql --host=database --username=esthonjr --dbname=testdb
```

### Docker Configuration

The Docker setup uses the following configuration from `postgres/database.env`:
- Username: `esthonjr`
- Database: `testdb`
- Password: `estadmin`

## ⚙️ Configuration

Create or edit the `.env` file in the project root:

```env
# PostgreSQL Connection Configuration
PGUSER=esthonjr
PGHOST=localhost
PGDATABASE=testdb
PGPASSWORD=estadmin
PGPORT=5432
```

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PGUSER` | PostgreSQL username | `postgres` |
| `PGHOST` | Database server hostname | `localhost` |
| `PGDATABASE` | Target database name | `testdb` |
| `PGPASSWORD` | User password | `your_password` |
| `PGPORT` | PostgreSQL port | `5432` |

## 🎯 Usage

### Available Commands

**Database Operations:**
```bash
# Create users table
node index.js create

# Read all users
node index.js read

# Read with cursor (memory efficient)
node index.js readCursor

# Insert sample user
node index.js insert

# Update user data
node index.js update

# Delete specific user
node index.js delete

# Drop users table
node index.js drop
```

**Docker Operations:**
```bash
# Start PostgreSQL container
node index.js psql-start

# Stop PostgreSQL container
node index.js psql-stop
```

### Table Schema

The application creates a `users` table with the following structure:

```sql
CREATE TABLE users (
    email VARCHAR,
    firstName VARCHAR,
    lastName VARCHAR,
    age INT
);
```

### Example Workflow

```bash
# 1. Start PostgreSQL (Docker)
node index.js psql-start

# 2. Create the table
node index.js create

# 3. Insert sample data
node index.js insert

# 4. Read all users
node index.js read

# 5. Try cursor reading
node index.js readCursor

# 6. Update user information
node index.js update

# 7. Delete specific user
node index.js delete

# 8. Clean up (drop table)
node index.js drop

# 9. Stop PostgreSQL
node index.js psql-stop
```

## 🏗️ Architecture

### Project Structure

```
crud-postgresql-nodejs/
├── index.js             # Main CLI entry point
├── crud.js              # CRUD operations module
├── psqlDocker.js        # Docker management utilities
├── postgres/            # Docker configuration
│   ├── docker-compose.yml
│   └── database.env
├── package.json         # Project dependencies
├── .env                 # Environment configuration
└── README.md           # This documentation
```

### Core Dependencies

```json
{
  "pg": "^8.11.0",           // PostgreSQL client
  "pg-cursor": "^2.2.1",     // Cursor support
  "dotenv": "^8.2.0"         // Environment variables
}
```

### Connection Types

**Single Connection:**
```javascript
const { Client } = require('pg');
const client = new Client();
client.connect();
```

**Connection Pool:**
```javascript
const { Pool } = require('pg');
const pool = new Pool();
```

## 📚 Learning Resources

- **Node.js PostgreSQL Tutorial**: [PostgreSQL with Node.js](https://node-postgres.com/)
- **pg Documentation**: [node-postgres GitHub](https://github.com/brianc/node-postgres)
- **PostgreSQL Documentation**: [PostgreSQL Manual](https://www.postgresql.org/docs/)
- **Docker PostgreSQL**: [PostgreSQL Docker Hub](https://hub.docker.com/_/postgres)

## 📄 License

This project is available under the MIT License. See LICENSE file for details.
