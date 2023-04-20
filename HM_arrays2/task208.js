/*
You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

"1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"
The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).

First you have to clean the lines keeping only letters, digits, dots and spaces.

Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

"Original_Balance:_1000.00
125_Market_125.45_Balance_874.55
126_Hardware_34.95_Balance_839.60
127_Video_7.45_Balance_832.15
128_Book_14.32_Balance_817.83
129_Gasoline_16.10_Balance_801.73
Total_expense__198.27
Average_expense__39.65"
On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

Notes
See input examples in Sample Tests.
It may happen that one (or more) line(s) is (are) blank.
Round to 2 decimals your calculated results (Elm: without traling 0)
The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.
*/
var b1 = 
`1000.00!=
125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`
  // .replaceAll(/ +/g, ' '); // заменяет множественные пробелы на одинарные. не знаю как это добавить в метод выше

function balance(book) {
    const [firstLine, ...lines] = book
        .replaceAll(/[^a-zа-яё0-9.\s]/gi, '') // копирнул, не понял для чего \s и на что влияет global 
        .split('\n')
        .filter(entry => entry !== '');

    console.log(firstLine)
    console.log(lines)

    for(const line of lines) {
      const [id, title, price] = line.split(" ");
      console.log(id, title, price);
    }

        // .map(item => item.trim().split(" "))
    //const OrigBalance = arrayOfString[0]; 

     
        
    // return arrayOfString;
  }
  // Не сделал.
  console.log(balance(b1));


