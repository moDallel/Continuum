cd socialNetwork/
git pull
#git checkout test
docker-compose up -d
sudo apt-get install -y libssl-dev
sudo apt-get install -y libz-dev
sudo apt-get install -y luarocks
sudo apt-get install -y liblua5.2-dev
sudo luarocks install -y luasocket
sudo pip3 install -y aiohttp
sudo pip3 install -y asyncio
sudo apt install -y nodejs
sudo apt install -y npm
python3 scripts/init_social_graph.py --graph=socfb-Reed98
cd post_automation
npm install
npm run start
cd ../
#cd ../wrk2
#make
