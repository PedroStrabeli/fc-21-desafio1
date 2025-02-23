FROM node:23-slim

# RUN npm install @nestjs/cli -g
WORKDIR /home/node/app
COPY . .
RUN npm install

# CMD ["tail", "-f", "/dev/null"]
CMD ["npm", "run", "start"]