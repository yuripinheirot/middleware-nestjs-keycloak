  echo "--- Installing dependencies NodeJS --- "  
  npm install

  echo "--- Making docker-compose --- " 
  cd ./docker
  sudo docker-compose up -d
  cd ..

  echo "--- Creating database ---"
  npx prisma migrate dev --name init

  echo "--- Project installed successfully ---"