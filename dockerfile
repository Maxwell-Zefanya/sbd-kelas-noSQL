# # syntax=docker/dockerfile:1
# ARG NODE_VERSION=22.13.1
# FROM node:${NODE_VERSION}-slim AS base
# WORKDIR /app

# # Install dependencies in a separate layer for better caching
# COPY --link package.json package-lock.json ./
# RUN --mount=type=cache,target=/root/.npm \
#     npm ci --production

# # Copy application source code (excluding files in .dockerignore)
# COPY --link . .

# # Create a non-root user and switch to it
# RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
# USER appuser

# # Set environment variables
# ENV NODE_ENV=production
# ENV NODE_OPTIONS="--max-old-space-size=4096"

# EXPOSE 3000


# CMD ["npm","install"]

# CMD ["npm","run","start"]
# COPY . /code

# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.13.1
FROM node:${NODE_VERSION}-slim AS base
WORKDIR /code
EXPOSE 3000
COPY .env /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install
CMD ["npm","run","start"]
COPY . /code

