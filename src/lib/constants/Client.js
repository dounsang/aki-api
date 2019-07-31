// pattern to match to ensure we can have a session.
const patternSession = new RegExp("var uid_ext_session = '(.*)';\\n.*var frontaddr = '(.*)';");
const issues = 'https://github.com/jgoralcz/aki-api/issues';

module.exports = {
  patternSession,
  issues,
};