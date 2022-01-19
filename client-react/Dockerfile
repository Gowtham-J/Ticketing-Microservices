FROM node:alpine

WORKDIR /app
COPY package.json .
# COPY package-lock.json ./
RUN npm install
# RUN npm install react-scripts@1.1.0 -g
COPY . .
# RUN npm audit fix --force
CMD ["npm", "run", "start"]