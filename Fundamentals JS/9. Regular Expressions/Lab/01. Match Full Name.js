function matchFullName(input) {
    let pattern = /\b([A-Z]{1}[a-z]+)[ ]{1}([A-Z]{1}[a-z]+)\b/g 
    

    let validNames = input.match(pattern);
    console.log(validNames.join(" "));
}
 

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");