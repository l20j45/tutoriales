# Comandos utiles para virtual box por terminal

VBoxManage list vms 
// lista las maquinas virtuales

VBoxManage.exe startvm (nombre de la maquina virtual)
//inicia la maquina virtual con una ventana inicial

VBoxManage.exe startvm (nombre de la maquina virtual) --type headless
//inicia la maquina virtual sin ventana acoplada

VBoxManage controlvm  ( pause|resume|reset|poweroff|savestate| )
//lo que esta en parentesis son parametros extras
