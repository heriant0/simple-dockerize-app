# Step 1: Build the application
FROM node:18 AS builder

WORKDIR /app

COPY service-2/package*.json .

RUN npm install

COPY . .

# Step 2: Create a lightweight image with only the necessary files
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

CMD ["node", "service-2/app.js"]
