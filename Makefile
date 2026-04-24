.PHONY: help install dev build lint preview clean test

# Variables
NODE_MODULES := node_modules
DIST := dist

# Default target
help:
	@echo "📦 Makefile - DOMA Web Consulting"
	@echo ""
	@echo "Available targets:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make lint       - Run ESLint"
	@echo "  make preview    - Preview production build"
	@echo "  make clean      - Remove node_modules and dist"
	@echo "  make help       - Show this help message"

# Install dependencies
install:
	npm install

# Start development server
dev:
	npm run dev

# Build for production
build:
	npm run build

# Run linting
lint:
	npm run lint

# Preview production build
preview:
	npm run preview

# Clean up
clean:
	rm -rf $(NODE_MODULES) $(DIST)

# Install and start development
init: install dev
