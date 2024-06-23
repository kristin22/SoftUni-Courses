function extractEmails(line) {
    
    let emails = [];
    
    let emailPattern = /(?<=\s)([A-Za-z0-9]+[\.\-_]?[A-Za-z0-9]*)@([A-Za-z]+\-?[A-Za-z]+)\.([A-Za-z]+\-?[A-Za-z]+)(\.[A-Za-z]+\-?[A-Za-z]+)?/gm;

    emails = line.match(emailPattern);
    emails.forEach(email => {
        console.log(email);
    });
    
}

extractEmails('Please contact us at: support@github.com.');
console.log("============");
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
console.log("============");
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');