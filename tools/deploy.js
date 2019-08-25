const { exec } = require("child_process");

/**
 * * Copy contents of dist/ folder
 * * Checkout gh-pages branch
 * * Delete all files in the directory excluding CNAME and .gitignore
 * * Paste contents of dist/ folder
 * * Stage all changes
 * * Commit all changes as Current Date
 * * Push Changes to remote
 */

exec("git checkout gh-pages", (err, stdout, stderr) => {
  logExecInformation(err, stdout, stderr);

  console.log("Hello World");
});

const logExecInformation = (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
};
