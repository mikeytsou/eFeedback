const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalidEmails = emails
    .replace(/,\s*$/, '') // removes the last comma and any whitespace after it
    .split(',')
    .map((email) => email.trim()) // returns new array of formatted emails
    .filter((email) => regex.test(email) === false) // filter out invalid emails

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return null;
};
