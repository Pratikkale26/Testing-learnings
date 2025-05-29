# Node.js Testing Journey 🚀

Welcome to my learning repository!

Here, I document my journey as I learn about testing in Node.js, Express, and related tools. Every folder represents a new concept or milestone, and I commit everything I learn to GitHub.

---

## About Me

I am learning automated testing for Node.js and Express while having prior experience in:
- Manual API testing (Postman and similar tools)
- Writing tests for Solidity smart contracts
- Writing tests for Solana native programs

This repo is my way of transitioning from manual and blockchain testing to robust backend testing in JavaScript/TypeScript environments.

---

## Progress

I have covered up to **Deep Mocking** (see the list below for details).

---

## Table of Contents

1. [Testing in Node.js + Express](#1-testing-in-nodejs--express)
2. [Testing a Simple App](#2-testing-a-simple-app)
3. [Testing an Express App](#3-testing-an-express-app)
4. [Slightly More Complex Endpoint](#4-slightly-more-complex-endpoint)
5. [Moving from Jest to Vitest](#5-moving-from-jest-to-vitest)
6. [Simple Express Project with Vitest](#6-simple-express-project-with-vitest)
7. [Adding a Database](#7-adding-a-database)
8. [Mocking Dependencies](#8-mocking-dependencies)
9. [Deep Mocking](#9-deep-mocking)
10. Mocking Return Values
11. Spys vs Mocks
12. Adding a CI/CD Pipeline
13. Unit vs Integration vs End-to-End Tests

---

## 1. Testing in Node.js + Express

> **Folder:** `1-simple-test`
Learn the basics of testing in Node.js using Jest.
- Simple functions and their tests.
- How to set up Jest in a Node.js project.

## 2. Testing a Simple App

> **Folder:** `2-express-test`
Move to testing a basic Express app.
- Test HTTP endpoints.
- Use supertest for integration testing.
- Organize tests for better maintainability.

## 3. Testing an Express App with Vitest

> **Folder:** `3-express-with-vitest`
Switch from Jest to Vitest for faster and more modern testing.
- Set up Vitest in an Express project.
- Write and organize tests using Vitest.
- Learn about test runners and their differences.

## 4. Slightly More Complex Endpoint

- Add more complex routes and test their logic.
- Handle edge cases and error scenarios.

## 5. Moving from Jest to Vitest

- Migration steps and gotchas.
- Why Vitest? Speed, modern features, and more.

## 6. Simple Express Project with Vitest

- Build a small Express app.
- Test all endpoints using Vitest.

## 7. Adding a Database

- Integrate a database (Prisma), but **mock the database itself**—no real database is needed for tests.
- Assume the database does what it is supposed to do; focus on mocking database interactions.
- Test code that interacts with the database by replacing actual DB calls with mocks.
- Use test doubles to simulate database behavior and responses.

## 8. Mocking Dependencies

- Learn to mock modules and dependencies.
- Use Vitest/Jest mocking utilities.

## 9. Deep Mocking

- Advanced mocking techniques.
- Mock nested dependencies and complex modules.

---

## Why This Repo?

- To track my progress as I learn.
- To help others who want to learn testing in Node.js and Express.
- To serve as a reference for best practices in testing.

---

## What's Next?

I will continue to add more advanced topics, including:
- Mocking return values
- Spys vs Mocks
- CI/CD integration
- Unit vs Integration vs End-to-End tests

---

**Feel free to explore each folder and follow along!**
If you have suggestions or spot mistakes, open an issue or PR.
