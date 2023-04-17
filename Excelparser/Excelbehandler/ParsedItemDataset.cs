using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Excelbehandler
{
    internal class ParsedItemDataset
    {
        // A  very simple class to put the strings from the rows in excel
        public string DataSetName { get; set; } = string.Empty;
        public string DataSetOwner { get; set; } = string.Empty;
        public string Municipality { get; set; } = string.Empty;
        public string Business { get; set; } = string.Empty;
        public string ContainsPII { get; set; } = string.Empty;
        
        public string HowIsItStored { get; set; } = string.Empty;
        public string WhereIsIt { get; set; } = string.Empty;
        public string DataProtocol { get; set; } = string.Empty;

        public string HowOften { get; set; } = string.Empty;
        public string HowPrecise { get; set; } = string.Empty;
        public string OpennessDegree { get; set; } = string.Empty;
        public string HasApi { get; set; } = string.Empty;
        public string URLAPI { get; set; } = string.Empty;
        public string Commments { get; set; } = string.Empty;
        public string Datasource { get; set; } = string.Empty;

    }
}
