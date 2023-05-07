using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Office.Interop.Excel;
using Microsoft.Office;
using System.Text.Json;
using System.IO;

namespace Excelbehandler
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void ParseExcelDataset(object sender, RoutedEventArgs e)
        {
            //file navigator where the user chooses the excelfile it wants to load. 
            string filepath = string.Empty;
            OpenFileDialog openFile = new OpenFileDialog();
            openFile.Filter = "Excel files (*.xlsx,*.xlsm)|*.xlsx;*.xlsm| All files(*.*)|*.*"; //this filter chooses which file is available for the user.
            if (openFile.ShowDialog() == true)
            {
                filepath = openFile.FileName;
            }
            Innfilsti.Text = filepath;
            
            //opens the excelfile and chooses the first worksheet. 
            Microsoft.Office.Interop.Excel.Application excel = new Microsoft.Office.Interop.Excel.Application();
            Workbook Dataset;
            Worksheet DatasetTable;
            Dataset = excel.Workbooks.Open(filepath);
            DatasetTable = Dataset.Worksheets[1];
            int LengthDatasettList = DatasetTable.UsedRange.Rows.Count - 1;

            //simple parse through the excelfile Dataset 2018.
            for (int i = 2; i <= LengthDatasettList; i++)
            {
                //codeblock below assigns column value to each string in the class
                ParsedItemDataset DatasetItem = new ParsedItemDataset();
                DatasetItem.DataSetName = (string)DatasetTable.Cells[i,1].Value;
                DatasetItem.DataSetOwner = (string)DatasetTable.Cells[i,2].Value;
                DatasetItem.Municipality = (string)DatasetTable.Cells[i,3].Value;
                DatasetItem.Business = (string)DatasetTable.Cells[i,4].Value;
                DatasetItem.ContainsPII = (string)DatasetTable.Cells[i,5].Value;
                DatasetItem.HowIsItStored = (string)DatasetTable.Cells[i,6].Value;
                DatasetItem.WhereIsIt = (string)DatasetTable.Cells[i,7].Value;
                DatasetItem.DataProtocol=(string)DatasetTable.Cells[i,8].Value;
                DatasetItem.HowOften= (string)DatasetTable.Cells[i,9].Value;
                DatasetItem.HowPrecise=(string)DatasetTable.Cells[i,10].Value;
                DatasetItem.OpennessDegree = (string)DatasetTable.Cells[i,11].Value;
                DatasetItem.HasApi = (string)DatasetTable.Cells[i,12].Value;
                DatasetItem.URLAPI = (string)DatasetTable.Cells[i, 13].Value;
                DatasetItem.Commments=(string)DatasetTable.Cells[i, 14].Value;
                DatasetItem.Datasource = System.IO.Path.GetFileName(filepath);

                //names the json file, serialize the class and stores the file.
                string JsonFileName = DatasetItem.DataSetName+".json";
                string JsonString = JsonSerializer.Serialize(DatasetItem);
                File.WriteAllText(JsonFileName, JsonString);
                Status.Text = Status.Text + JsonFileName + "\n";
            }
            Dataset.Close();
            excel.Quit();
        }

        private void SoftwareList_Click(object sender, RoutedEventArgs e)
        {
            Status.Text = string.Empty;
            Innfilsti.Text = string.Empty;

            //file navigator where the user chooses the excelfile it wants to load. 
            string filepath = string.Empty;
            OpenFileDialog openFile = new OpenFileDialog();
            openFile.Filter = "Excel files (*.xlsx,*.xlsm)|*.xlsx;*.xlsm| All files(*.*)|*.*"; //this filter chooses which file is available for the user.
            if (openFile.ShowDialog() == true)
            {
                filepath = openFile.FileName;
            }
            Innfilsti.Text = filepath;

            //opens the excelfile and chooses the first worksheet. 
            Microsoft.Office.Interop.Excel.Application excel = new Microsoft.Office.Interop.Excel.Application();
            Workbook Dataset;
            Worksheet DatasetTable;
            Dataset = excel.Workbooks.Open(filepath);
            DatasetTable = Dataset.Worksheets[1];
            int LengthData = DatasetTable.UsedRange.Rows.Count - 1; //There was a problem with empty namecells below the last entrance in the sourcefile. 

            //simple parse through the excelfile programoversikt.
            for (int i = 2; i <= LengthData; i++)
            {
                //codeblock below assigns column value to each string in the class
                ParsedItemSoftwareOverview DatasetItem = new ParsedItemSoftwareOverview();
                DatasetItem.Name = (string)DatasetTable.Cells[i, 1].Value;
                DatasetItem.Description = (string)DatasetTable.Cells[i, 2].Value;
                DatasetItem.ADGroup = (string)DatasetTable.Cells[i, 3].Value;
                DatasetItem.ImportantNotes = (string)DatasetTable.Cells[i, 4].Value;
                DatasetItem.SoftwareModelForBA = (string)DatasetTable.Cells[i, 5].Value;
                DatasetItem.WhoCanOrder = (string)DatasetTable.Cells[i, 6].Value;
                DatasetItem.ForwardNew = (string)DatasetTable.Cells[i, 7].Value;
                DatasetItem.ForwardDelete = (string)DatasetTable.Cells[i, 8].Value;
                DatasetItem.Adress = (string)DatasetTable.Cells[i, 9].Value;
                DatasetItem.datasource = System.IO.Path.GetFileName(filepath);

                //names the json file, serialize the class and stores the file.
                string JsonFileName = DatasetItem.Name.Split(" ").FirstOrDefault() + i.ToString() + ".json";
                string JsonString = JsonSerializer.Serialize(DatasetItem);
                File.WriteAllText(JsonFileName, JsonString);
                Status.Text = Status.Text + JsonFileName + "\n";
            }
            Dataset.Close();
            excel.Quit();

        }

        private void ApplicationList_Click(object sender, RoutedEventArgs e)
        {
            Status.Text = string.Empty;
            Innfilsti.Text = string.Empty;

            //file navigator where the user chooses the excelfile it wants to load. 
            string filepath = string.Empty;
            OpenFileDialog openFile = new OpenFileDialog();
            openFile.Filter = "Excel files (*.xlsx,*.xlsm)|*.xlsx;*.xlsm| All files(*.*)|*.*"; //this filter chooses which file is available for the user.
            if (openFile.ShowDialog() == true)
            {
                filepath = openFile.FileName;
            }
            Innfilsti.Text = filepath;

            //opens the excelfile and chooses the first worksheet. 
            Microsoft.Office.Interop.Excel.Application excel = new Microsoft.Office.Interop.Excel.Application();
            Workbook Dataset;
            Worksheet DatasetTable;
            Dataset = excel.Workbooks.Open(filepath);
            DatasetTable = Dataset.Worksheets[1];
            int LengthData = DatasetTable.UsedRange.Rows.Count - 1;

            //simple parse through the excelfile programoversikt.
            for (int i = 2; i <= LengthData; i++)
            {
                //codeblock below assigns column value to each string in the class
                ParsedItemApplicationList DatasetItem = new ParsedItemApplicationList();
                DatasetItem.Name = (string)DatasetTable.Cells[i, 1].Value;
                DatasetItem.SystemNumber = (string)DatasetTable.Cells[i, 2].Value;
                DatasetItem.ServiceCaretaker = (string)DatasetTable.Cells[i, 3].Value;
                DatasetItem.Service = (string)DatasetTable.Cells[i, 4].Value;
                DatasetItem.ServiceOwner = (string)DatasetTable.Cells[i, 5].Value;
                DatasetItem.BusinessAreaLevelOne = (string)DatasetTable.Cells[i, 6].Value;
                DatasetItem.BusinessAreaLevelTwo = (string)DatasetTable.Cells[i, 7].Value;
                DatasetItem.Criticality = (string)DatasetTable.Cells[i, 8].Value;
                DatasetItem.UserChannel = (string)DatasetTable.Cells[i, 9].Value;
                DatasetItem.DatabaseType = (string)DatasetTable.Cells[i, 10].Value;
                DatasetItem.Environment = (string)DatasetTable.Cells[i, 11].Value;
                DatasetItem.AccessControll = (string)DatasetTable.Cells[i, 12].Value;
                DatasetItem.Datasource = System.IO.Path.GetFileName(filepath);

                //names the json file, serialize the class and stores the file.
                string JsonFileName = DatasetItem.Name.Split(" ").FirstOrDefault() + i.ToString() + ".json";
                string JsonString = JsonSerializer.Serialize(DatasetItem);
                File.WriteAllText(JsonFileName, JsonString);
                Status.Text = Status.Text + JsonFileName + "\n";
            }
            Dataset.Close();
            excel.Quit();
        }
    }
}

