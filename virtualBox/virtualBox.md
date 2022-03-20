# Comandos utiles para virtual box por terminal

- ```bash
  VBoxManage list vms vms|runningvms|ostypes|hostdvds|hostflintnets|bridgedifs|hostonlyifs|natnets|dhcpservers|hostinfo|hostcpuids|hddbackends|dds|dvds|floppies|usbhost|sbfilters|systemproperties|extpacks|groups|webcams|screenshotformats|cloudproviders|cloudprofiles|cloudnets
  ```
  
  - //lista las maquinas virtuales a lado tambien tenemos todos los parametros

- ```bash
  VBoxManage.exe startvm (nombre de la maquina virtual)
  ```
  
  - //inicia la maquina virtual con una ventana inicial

- ```bash
  VBoxManage.exe startvm (nombre de la maquina virtual) --type headless
  ```
  
  - //inicia la maquina virtual sin ventana acoplada

- ```bash
  VBoxManage controlvm  ( pause|resume|reset|poweroff|savestate| )
  ```
  
  - //lo que esta en parentesis son parametros extras
