using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace RedBook.Service.Requests
{
    public class ImageDataRequest
    {
        public int Id { get; set; }
        public int ReportId { get; set; }
        public byte[] Image { get; set; }
        public IEnumerable<IFormFile> Files { get; set; }
        public List<ImageDetails> Details { get; set; }
    }
}
