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
var b2=`1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`


function balance(book) {
    const [firstLine, ...lines] = book
        .replaceAll(/[^a-zа-яё0-9.\s]/gi, '') 
        .split('\n')
        .filter(entry => entry !== '');

      const id = [];
      const title = [];
      let price = [];
    
    for(const line of lines) {
      // const [id, title, price] = line.split(" ") // если внутри цикла объявляю эти переменные, то она потом не видятся вне цикла. 
      //const line  = `${id} ${title} ${price.toFixed(2)} Balance ${balance.toFixed(2)}`
      //arr.push (line) 
      id.push(line.split(" ")[0]); 
      title.push(line.split(" ")[1]);
      price.push(line.split(" ")[2]);
    }  
    const origBalance = Number(firstLine).toFixed(2);
    price = price.map(element => Number(element)); 
    
    let tempOrigBalance = origBalance;
    const newBalance = price.map(function(number){
      tempOrigBalance -= number;
      return Number(tempOrigBalance).toFixed(2)
    })

    const totalExpense = Number(price
      .reduce((sum, item) => sum + Number(item), 0)
      ).toFixed(2);
    const averageExpense = totalExpense / price.length; // почему в некоторых тестах оставляет 1 знак после запятой
    
    const top = "Original Balance: " + origBalance;
    let middle = "";
    for (let i = 0; i < id.length; i++) {
      let line = id[i] + " " + title[i] + " " +  price[i] + " Balance " + newBalance [i] + '\r\n' 
      middle += line 
    }
    const bottom = "Total expense  " + totalExpense + "\r\n" + "Average expense  " + averageExpense.toFixed(2);
    return top + "\r\n" + middle + bottom; //использовал "\r\n", так как в проверочных тестах вместо "\n" используется "\r\n" 
  }
  

  console.log(balance(b2)); // проходит лишь первичную проверку


