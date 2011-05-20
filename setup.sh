echo "Setting up..."

echo "Creating /assets..."

mkdir -p assets

echo "Creating /logs..."

mkdir -p logs

echo "Creating /pids..."

mkdir -p pids

echo "Running npm bundle..."

sudo npm bundle

echo "Setup complete."
echo "sudo node server.js"
