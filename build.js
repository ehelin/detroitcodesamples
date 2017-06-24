var exec = require('child_process').exec;
var cmds = [];

cmds.push('tsc -p ./001/main-api');

cmds.push('tsc -p ./002/main-api');
cmds.push('tsc -p ./002/integration-tests');

cmds.push('tsc -p ./003/main-api');
cmds.push('tsc -p ./003/integration-tests');

cmds.push('tsc -p ./004/main-api');
cmds.push('tsc -p ./004/integration-tests');

cmds.push('tsc -p ./005/main-api');
cmds.push('tsc -p ./005/integration-tests');

cmds.push('tsc -p ./006/main-api');
cmds.push('tsc -p ./006/integration-tests');

cmds.push('tsc -p ./007/main-api');
cmds.push('tsc -p ./007/integration-tests');

cmds.push('tsc -p ./008/main-api');
cmds.push('tsc -p ./008/integration-tests');

for(var i=0; i< cmds.length-1; i++) {
    exec(cmds[i], function(error, stdout, stderr) {
    });
}
