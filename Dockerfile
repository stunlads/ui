FROM node:8.16.2

# Application base directory
RUN mkdir /app
WORKDIR /app
COPY . .

# Packages install
RUN yarn

# Export Environment variables
ENV PORT=4000
ENV NODE_ENV=production
ENV API_URL=https://api.yoourlink.com/api
ENV ROOT_URL=https://www.yoourlink.com

## Application Build see https://nextjs.org/docs/deployment
RUN yarn build

# publish exposed ports by itself
EXPOSE 4000

## Start Application ;)
CMD yarn start