using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Excelbehandler
{
    internal class ParsedItemApplicationList
    {
        public string Name { get; set; } = string.Empty;
        public string SystemNumber { get; set; } = string.Empty;
        public string ServiceCaretaker { get; set; } = string.Empty;
        public string Service { get; set; } = string.Empty;
        public string ServiceOwner { get; set; } = string.Empty;
        public string BusinessAreaLevelOne { get; set; } = string.Empty;
        public string BusinessAreaLevelTwo { get; set; } = string.Empty;
        public string Criticality { get; set; } = string.Empty;
        public string UserChannel { get; set; } = string.Empty;
        public string DatabaseType { get; set; } = string.Empty;
        public string Environment { get; set; } =string.Empty;
        public string AccessControll { get; set; } = string.Empty;
        public string Datasource { get; set; } = string.Empty;
    }
}
