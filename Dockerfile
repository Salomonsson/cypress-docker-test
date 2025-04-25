FROM cypress/included:14.3.0

WORKDIR /

COPY . .

# Optional: install other npm deps (if needed)
RUN npm install

# Run Cypress tests
CMD ["cypress", "run"]

#Docker : npm run test:docker