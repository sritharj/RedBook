using RedBook.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Service
{
    public class ImageDto
    {
        public ImageDto(Image data)
        {
            Id = data.Id;
            ReportId = data.ReportId;
            Img = data.Img;
        }

        public int Id { get; set; }
        public int ReportId { get; set; }
        public byte[] Img { get; set; }
    }
}
