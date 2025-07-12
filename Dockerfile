# ---- Build Stage ----
FROM golang:1.22 AS builder

# Set working directory inside container
WORKDIR /app

# Copy go.mod and go.sum and download dependencies
COPY backend/go.mod backend/go.sum ./
RUN go mod download

# Copy the rest of the source code
COPY . .

# Build the Go app (no CGO, static binary)
RUN CGO_ENABLED=0 GOOS=linux go build -o server .

# ---- Final Stage ----
FROM alpine:latest

# # Install SSL certificates (needed for HTTPS, etc.)
# RUN apk --no-cache add ca-certificates

# Set working directory
WORKDIR /app

# Copy the binary from the builder
COPY --from=builder /app/server .
COPY .env . 
# Expose port (change if your server listens on another)
EXPOSE 8080

# Run the binary
CMD ["./server"]

