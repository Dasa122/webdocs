# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --only=production && npm cache clean --force

COPY . .
RUN npm run build

# ---- Production stage ----
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html

# Support SPA routing (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
