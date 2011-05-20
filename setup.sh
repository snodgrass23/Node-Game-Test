echo "Setting up..."

echo "Creating /assets..."

mkdir -p assets

echo "Creating /logs..."

mkdir -p logs

echo "Creating /pids..."

mkdir -p pids

echo "Running npm bundle..."

sudo npm bundle

echo ""
echo "Setup complete! Run with: sudo node server.js"
