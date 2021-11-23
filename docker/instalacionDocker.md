#Instalando docker
sudo apt update

sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

sudo apt update

apt-cache policy docker-ce

sudo apt install docker-ce

sudo systemctl status docker

#con esto terminamos de instalar docker

#Creamos usuario para que use docker sin sudo

sudo usermod -aG docker ${USER}

su - ${USER}

id -nG

#esto con el usuario si no es el nuestro
sudo usermod -aG docker username
