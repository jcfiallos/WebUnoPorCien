# --- Etapa 1: Construcción (Builder) ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos solo los archivos de dependencias para optimizar la caché de Docker
COPY package.json package-lock.json ./
RUN npm ci

# Copiamos el resto del código y generamos la versión de producción
COPY . .
RUN npm run build

# --- Etapa 2: Servidor Web (Nginx) ---
FROM nginx:alpine

# Eliminamos la configuración por defecto de Nginx y copiamos la nuestra (soporte SPA)
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos la carpeta 'dist' generada en la Etapa 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 al exterior
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
