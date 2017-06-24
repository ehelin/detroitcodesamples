var exec = require('child_process').exec;
var cmds = [];

cmds.push('npm install --prefix ./001/main-api');

cmds.push('npm install --prefix ./002/main-api');
cmds.push('npm install --prefix ./002/integration-tests');

cmds.push('npm install --prefix ./003/main-api');
cmds.push('npm install --prefix ./003/integration-tests');

cmds.push('npm install --prefix ./004/main-api');
cmds.push('npm install --prefix ./004/integration-tests');

cmds.push('npm install --prefix ./005/main-api');
cmds.push('npm install --prefix ./005/integration-tests');

cmds.push('npm install --prefix ./006/main-api');
cmds.push('npm install --prefix ./006/integration-tests');

cmds.push('npm install --prefix ./007/main-api');
cmds.push('npm install --prefix ./007/integration-tests');

cmds.push('npm install --prefix ./008/main-api');
cmds.push('npm install --prefix ./008/integration-tests');

for(var i=0; i< cmds.length-1; i++) {
    exec(cmds[i], function(error, stdout, stderr) {
    });
}
