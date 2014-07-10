# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "hindsight"
  config.vm.box_url = "https://www.dropbox.com/s/1ja6uj2429c9wwm/package.box?dl=1"

  config.vm.network "private_network", ip: "192.168.55.55"
  config.ssh.forward_x11 = true
end
