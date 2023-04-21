using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Excelbehandler
{
    internal class ParsedItemSoftwareOverview
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ADGroup { get; set; } = string.Empty;
        public string ImportantNotes { get; set; } = string.Empty;
        public string SoftwareModelForBA { get; set; } = string.Empty;
        public string WhoCanOrder { get; set; } = string.Empty;
        public string ForwardNew { get; set; } = string.Empty;
        public string ForwardDelete { get; set; } = string.Empty;
        public string Adress { get; set; } = string.Empty;
        public string datasource { get; set; } = string.Empty;
    }
}
