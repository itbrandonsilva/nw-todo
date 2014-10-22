#!/bin/bash

wget http://dl.node-webkit.org/v0.10.5/node-webkit-v0.10.5-linux-x64.tar.gz;
tar xvf node-webkit-v0.10.5-linux-x64.tar.gz;
rm -f node-webkit-v0.10.5-linux-x64.tar.gz;
cd node-webkit-v0.10.5-linux-x64;
sed -i 's/udev\.so\.0/udev.so.1/g' ./nw;

# cd ..;
# zip -r * -x node-webkit-v0.10.5-linux-x64;
