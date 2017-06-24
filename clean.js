var exec = require('child_process').exec;
var cmds = [];

cmds.push('rm -rf ./001/main-api/node_modules');
cmds.push('rm -rf ./001/main-api/build');
cmds.push('rm -rf ./001/main-api/etc');

cmds.push('rm -rf ./002/main-api/node_modules');
cmds.push('rm -rf ./002/main-api/build');
cmds.push('rm -rf ./002/main-api/etc');
cmds.push('rm -rf ./002/integration-tests/node_modules');
cmds.push('rm -rf ./002/integration-tests/build');
cmds.push('rm -rf ./002/integration-tests/etc');

cmds.push('rm -rf ./003/main-api/node_modules');
cmds.push('rm -rf ./003/main-api/build');
cmds.push('rm -rf ./003/main-api/etc');
cmds.push('rm -rf ./003/integration-tests/node_modules');
cmds.push('rm -rf ./003/integration-tests/build');
cmds.push('rm -rf ./003/integration-tests/etc');

cmds.push('rm -rf ./004/main-api/node_modules');
cmds.push('rm -rf ./004/main-api/build');
cmds.push('rm -rf ./004/main-api/etc');
cmds.push('rm -rf ./004/integration-tests/node_modules');
cmds.push('rm -rf ./004/integration-tests/build');
cmds.push('rm -rf ./004/integration-tests/etc');

cmds.push('rm -rf ./005/main-api/node_modules');
cmds.push('rm -rf ./005/main-api/build');
cmds.push('rm -rf ./005/main-api/etc');
cmds.push('rm -rf ./005/integration-tests/node_modules');
cmds.push('rm -rf ./005/integration-tests/build');
cmds.push('rm -rf ./005/integration-tests/etc');

cmds.push('rm -rf ./006/main-api/node_modules');
cmds.push('rm -rf ./006/main-api/build');
cmds.push('rm -rf ./006/main-api/etc');
cmds.push('rm -rf ./006/integration-tests/node_modules');
cmds.push('rm -rf ./006/integration-tests/build');
cmds.push('rm -rf ./006/integration-tests/etc');

cmds.push('rm -rf ./007/main-api/node_modules');
cmds.push('rm -rf ./007/main-api/build');
cmds.push('rm -rf ./007/main-api/etc');
cmds.push('rm -rf ./007/integration-tests/node_modules');
cmds.push('rm -rf ./007/integration-tests/build');
cmds.push('rm -rf ./007/integration-tests/etc');

cmds.push('rm -rf ./008/main-api/node_modules');
cmds.push('rm -rf ./008/main-api/build');
cmds.push('rm -rf ./008/main-api/etc');
cmds.push('rm -rf ./008/integration-tests/node_modules');
cmds.push('rm -rf ./008/integration-tests/build');
cmds.push('rm -rf ./008/integration-tests/etc');

for(var i=0; i< cmds.length-1; i++) {
    exec(cmds[i], function(error, stdout, stderr) {
    });
}
