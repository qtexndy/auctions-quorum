#!/bin/bash
scp -i /home/huang/Projects/quorum/auction-quorum/.vagrant/machines/default/virtualbox/private_key -P 2222 $1  vagrant@127.0.0.1:/home/vagrant/quorum-examples/7nodes/
