# Build
docker build -t q-frontend .

# Run
docker run -p 5173:5173 -v $(pwd)/src:/app/src q-frontend
