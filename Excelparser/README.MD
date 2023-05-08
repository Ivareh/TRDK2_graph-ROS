# Documentation of the excel parser a prototype.

The customer wanted a prototype to show a method for how to parse through different data sets that where in different excel files. The reason for this was that the customer did not have to manually add the data they had stored into the mentioned excel files. This parser is meant to show a method to parse through the excel files provided by the customer. Due to time constraints and data files that could have been organized better, the group made this prototype to give an guidelines for a solution to this problem. This parser has several challenges that needs to be adressed in one way or another. These challenges will also be adressed in this documentation. In this documentation the group will go through the parser in detail, from the programming language and any convention used. At the end any challenges the group faced will be adressed. The group made three parser one for each data set. The reason for this was that the datasets contained different data and different amount of variables.

## Technology and how the parser works.

The group chose to use C\#, .NET framework and Visual Studio Community 2022. The reason for this was that the group member responsible for this task was familiar with this programming language, and had some previous experience making such an application. The C# library for working with excel documents are: Microsoft.Office.Interop.Excel.

To use the parser the user presses the button for the dataset they want to parse. This will open a file dialog window where the user finds the excel file containing the correct data set. When the user presses open. The parser will parse through the selected file and create a json file for each listing in the file. When the parser is done file name of every json file is listed in the ouput section. The json files will be stored in the same folder as the parser. 

## Problem and possible errors. 
It is adviced to clean that datasets before putting them through the parser. It is adviced to check if the data set mixes between datatypes in the same columns. For example string and integer. It is also adviced to look for / or \ in the name coloumn. These should be replace with other symbols. This is because the name is also used as filename for the json files. Make sure that each listing in the datasets have all its data on the same row in the excel file. The parser goes through the excel file line by line. If a listing in the file is seperated on multiple lines the parser would interpret it as multiple listing in the dataset.

##Executable
In the folder "Excelparser\Excelbehandler\bin\Debug\net6.0-windows" the executable (Excelbehandleren.exe) files is stored to start the parser just doubleclick this file.
