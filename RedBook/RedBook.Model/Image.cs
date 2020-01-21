using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Model
{
    public class Image
    {
        public Image() { }
        public Image(int id, int reportId, byte[] img)
        {
            Id = id;
            ReportId = reportId;
            Img = img;
        }

        public int Id { get; set; }
        public int ReportId { get; set; }
        public byte[] Img { get; set; }
    }
}
