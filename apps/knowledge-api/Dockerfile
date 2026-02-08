FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY apps/knowledge-api/package.json ./
COPY packages/contracts ./packages/contracts

# Install dependencies
RUN npm install

# Copy source code
COPY apps/knowledge-api/src ./src
COPY apps/knowledge-api/tsconfig.json ./

# Build
RUN npm run build

# Expose port
EXPOSE 3001

# Start
CMD ["npm", "start"]
