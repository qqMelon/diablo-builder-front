FROM node:16

WORKDIR /app
EXPOSE 8081

COPY package*.json ./
RUN npm install
COPY . .
RUN chown -R node:root /root/
RUN chown -R node:root /app/

# Dev local with deps
# RUN tar -cf node_modules.tar node_modules
# RUN mv node_modules.tar /

CMD ["npm", "run", "dev"]